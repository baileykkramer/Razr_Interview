/**
 * This file contains 3 classes, the Shape class and its two child classes, Circle and Square,
 * along with functions to generate, sort, and draw an array of shape objects.
 *
 * These scripts can be used to add randomly generated and sorted shapes to a webpage.
 *
 * @file   This files defines the Shape, Circle, and Square classes, sortAreaDescending(), generateArrayOfShapes(),
 *         and generateShapes().
 * @author Bailey Kramer.
 * @since  05.27.2021
 */
class Shape {
    constructor(length) {
      this.length = length;
    }
  }
  class Circle extends Shape{
    constructor(radius) {
        super(radius);
    }
    getName(){
      return "circle";
    }
    getRadius(){
      return this.length;
    }
    getArea() {
      return (Math.PI * this.length * this.length);
    }
    toString() {
      return "Circle : Radius = " + this.length + ", Area = " + this.getArea(); 
    }
  }
  class Square extends Shape{
    constructor(side) {
      super(side);
    }
    getName(){
      return "square";
    }
    getSide(){
      return this.length; 
    }
    getArea() {
      return this.length * this.length;
    }
    toString() {
      return "Square : Size = " + this.length + ", Area = " + this.getArea(); 
    }
  }
/**
* Function that sorts an array of shapes in descending order by area
* @author   Bailey Kramer
* @param    {Array} shapes    array of Shape type objects
* @return   {Array}         sorted array of shape type objects
*/
function sortAreaDescending(shapes) {
    return shapes.sort(function(a, b){return b.getArea() - a.getArea()});
} 
/**
* Function that generates an array of 100 Shape objects with random lengths. It will create 
* 50 square and 50 circle type objects. 
* @author   Bailey Kramer
* @return   {Array}         array of shape type objects
*/
function generateArrayOfShapes(){
    const shapesArray = [];
    //First, create 50 circle type objects
    for(let i = 0; i <50; i++){
        //Randomly select a number between 1 and 100 and divide by 2 to determine the radius.
        let circle = new Circle( (Math.floor(Math.random() * 101)+1)/2);
        shapesArray.push(circle);
    }
    //Next create 50 square type objects
    for(let i = 0; i <50; i++){
        //Randomly select a number between 1 and 100. 
        let square = new Square( Math.floor(Math.random() * 101)+1);
        shapesArray.push(square);
    }
    return shapesArray;
}
/**
* Function that generates, sorts, and draws an array of shape objects to the page.  
* @author   Bailey Kramer
*/
function generateShapes(){
    //Create the array of shape objects.
    let shapeArray = generateArrayOfShapes();
    //Sort the array of shape objects. 
    shapeArray = sortAreaDescending(shapeArray);
    for(let i = 0; i< shapeArray.length; i++){
        //If the shape object is a circle, then draw a blue cicle.
        if(shapeArray[i].getName() == "circle"){
            //Create an element that states the shape type, length, and area
            let text = document.createElementNS("http://www.w3.org/2000/svg", "text");
            text.setAttribute("x", 150);
            text.setAttribute("y", 50 + (i*150));
            text.setAttribute("fill", "black"); 
            text.textContent = shapeArray[i].toString();
            //Create an element that draws the circle based on the radius
            let circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
            circle.setAttribute("cx", 50); 
            circle.setAttribute("cy", 50 + (i*150)); 
            circle.setAttribute("r", shapeArray[i].length); 
            circle.setAttribute("fill", "blue"); 
            //Add the circle to the page
            const svg = document.getElementById("root"); 
            svg.appendChild(circle);
            svg.appendChild(text);
        }
        //If the shape object is a square, draw a red square.
        else{
            //Create an html element that states the shape type, length, and area
            let text = document.createElementNS("http://www.w3.org/2000/svg", "text");
            text.setAttribute("x", 150);
            text.setAttribute("y", 50 + (i*150));
            text.setAttribute("fill", "black"); 
            text.textContent = shapeArray[i].toString();
            //Create an element that draws the circle based on the side length
            let square = document.createElementNS("http://www.w3.org/2000/svg", "rect");
            square.setAttribute("x", 50); 
            square.setAttribute("y", 50 + (i*150)); 
            square.setAttribute("height", shapeArray[i].length); 
            square.setAttribute("width", shapeArray[i].length); 
            square.setAttribute("fill", "red"); 
            //Add the square to the page
            const svg = document.getElementById("root"); 
            svg.appendChild(square);
            svg.appendChild(text);
        }
    }
}

