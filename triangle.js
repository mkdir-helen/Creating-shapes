//I want to build a cone in javascript
let sym = document.getElementById('mySelect');
// let symbol = getSymbol();
let answer = document.getElementById("showcase");
let nonBox = document.querySelector('[data-nonbox]');
let forBox = document.querySelector('[data-for-box]');

// outputElement.textContent = newFortune;
// const triangle = document.querySelector('[data-shape="triangle"]');
// const cone = document.querySelector('[data-shape="cone"]');
// const box = document.querySelector('[data-shape="box"]');
// const square = document.querySelector('[data-shape="square"]');


//Changing the DOM when the user chooses an option
document.addEventListener('DOMContentLoaded', function(){
  document.querySelector('select[name="shapes"]').onchange=changeEventHandler;
}, false);

// symbol.addEventListener('click', function(event){
//   symbol.value = event.target.value;
//   console.log(symbol);
// }, false);

document.addEventListener('DOMContentLoaded', function(){
  document.querySelector('select[name="mySelect"]').onchange=getSymbol;
}, false);

function getSymbol(event){
  sym.value = event.target.value;
  symbol = sym.value;
  return symbol;
};

function changeEventHandler(event){
  answer.innerHTML = '';
  if(event.target.value === "cone"){
    toggleBox();
    toggleNonBox();
    let dataShape = document.getElementById('submit');
    dataShape.setAttribute('data-shape', 'cone');
    document.getElementById('height-tri-label').innerHTML = "Enter the height of cone: ";
    dataShape.addEventListener('click', make_cone);
  }else if(event.target.value === "square"){
    toggleBox();
    toggleNonBox();
    let dataShape = document.getElementById('submit');
    dataShape.setAttribute('data-shape', 'square');
    document.getElementById('height-tri-label').innerHTML = "Enter the size of the square: ";
    dataShape.addEventListener('click', make_square);
  } else if(event.target.value === "box"){
    forBox.classList.remove('invisible');
    nonBox.classList.add('invisible');
  }
}

function toggleBox(){
  if(forBox.classList.contains('invisible') === false){
    forBox.classList.add('invisible');
  };
}
function toggleNonBox(){
  if(nonBox.classList.contains('invisible')){
    nonBox.classList.remove('invisible');
  };
}

function make_box(){
  let height = 4;
  let width = 6;

  for(let row=0; row<height; row++){
      let line = '';
      for(let col=0; col<width; col++){
          if(row === height-1 || row === 0){
              line += symbol;
          }else{
              if(col === 0){
                  line += symbol;
              }else if(col === width-1){
                  line += ' '+symbol;
              }else{
                  line += '  ';
              }
          }
      };
      console.log(line);
  }; 
}

function make_square (){
  answer.innerHTML = '';
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
// cone.addEventListener('click', make_cone);


////////////CONE//////////////////////////
function cone_width(height){
    return parseInt(2*height-1);
  };


function make_cone(){
  answer.innerHTML = '';
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
  


