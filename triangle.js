//I want to build a cone in javascript
let symbol = document.getElementById('mySelect').value;
let answer = document.getElementById("showcase");

// outputElement.textContent = newFortune;
const triangle = document.querySelector('[data-shape="triangle"]');
const cone = document.querySelector('[data-shape="cone"]');
const box = document.querySelector('[data-shape="box"]');
const square = document.querySelector('[data-shape="square"]');


//Changing the DOM when the user chooses an option
document.addEventListener('DOMContentLoaded', function(){
  document.querySelector('select[name="shapes"]').onchange=changeEventHandler;
}, false);

function changeEventHandler(event){
  if(event.target.value === "square"){
    let dataShape = document.getElementById('submit');
    dataShape.setAttribute("data-shape", "square");
    document.getElementById('height-tri-label').innerHTML = "Enter the size of the square:";
    dataShape.addEventListener('click', make_square);
  };
}


function make_square (){
  let num = document.getElementById('height-tri').value;
  for(let row=0;row<num; row++){
    let line = '';
    for(let col=0; col<num; col++){
        line += symbol;
    };
    answer.innerHTML += line + '<br>';
  };
}

//Calling the cone function
cone.addEventListener('click', make_cone);


////////////CONE//////////////////////////
function cone_width(height){
    return parseInt(2*height-1);
  };


function make_cone(){
  let userInput = document.getElementById('height-tri').value;
  let width, oWidth;
  width = oWidth = cone_width(userInput);
  let firstLine = '';
  for(let num=oWidth; num > 0; num--){
    if(width == oWidth){
      for(let num=width; num > 0; num--){
        firstLine += symbol;
      };
      // console.log(firstLine+ '\n');
      answer.innerHTML= (firstLine+ '<br>');
      width--;
    }else{
      if(width % 2 === 1){
        let nextLine = '';
        let spaces = parseInt(oWidth - width);
        for(let num=spaces; num>0; num--){
            nextLine += ' &nbsp ';
          
        };
        for(let num=width; num > 0; num--){
            nextLine += symbol;
        };
        // console.log(nextLine+'\n');
        answer.innerHTML += (nextLine+'<br>');
        width--;
      }else{
          width--;
      };
    };
  };
  
};  
  


