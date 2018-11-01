//I want to build a cone in javascript
let sym = document.getElementById('mySelect');
let symbolInputDiv = document.querySelector('[data-symbol-choice]');
let symbolInput = document.getElementById('symbol-input');
let answer = document.getElementById("showcase");
let nonBox = document.querySelector('[data-nonbox]');
let forBox = document.querySelector('[data-for-box]');
let submit = document.querySelector('[data-submit]');
let symbol = '';

//Changing the DOM when the user chooses an option
// document.addEventListener('DOMContentLoaded', function(){
//   document.querySelector('select[name="shapes"]').onchange=changeEventHandler;
// }, false);

document.querySelector('select[name="shapes"]').addEventListener('change', changeEventHandler);
document.querySelector('select[name="mySelect"]').addEventListener('change', getSymbol);


//Get symbol when user chooses a symbol from the selector
function getSymbol(event){
  sym.value = event.target.value;
  if(sym.value==='getit'){
    if(symbolInputDiv.classList.contains('invisible')){
      symbolInputDiv.classList.remove('invisible');
    }
    if(symbolInput.value === ''){
      symbolInput.addEventListener('focusout', function(){
        symbol = symbolInput.value;
      });
    }else{
      symbol = symbolInput.value;
    }
  }else{
    if(symbolInputDiv.classList.contains('invisible')===false){
      symbolInputDiv.classList.add('invisible');
    }
      symbol = sym.value;
  }
  
};


//When the shapes are selected by the user, the DOM changes
function changeEventHandler(event){
  let the_func;
  // debugger;
  if(event.target.value === "triangle"){
    toggleBox();
    toggleNonBox();
    document.getElementById('height-tri-label').innerHTML = "Enter the height of triangle: ";
    the_func = make_triangle;
  }else if(event.target.value === "cone"){
    toggleBox();
    toggleNonBox();
    document.getElementById('height-tri-label').innerHTML = "Enter the height of cone: ";
    the_func = make_cone;
  }else if(event.target.value === "square"){
    toggleBox();
    toggleNonBox();
    document.getElementById('height-tri-label').innerHTML = "Enter the size of the square: ";
    the_func = make_square;
  } else if(event.target.value === "box"){
    forBox.classList.remove('invisible');
    nonBox.classList.add('invisible');
    the_func = make_box;
  }
  submit.removeEventListener('click', make_triangle);
  submit.removeEventListener('click', make_cone);
  submit.removeEventListener('click', make_square);
  submit.removeEventListener('click', make_box);
  submit.addEventListener('click', the_func);
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

function make_triangle(){
  console.log("I am triangle");
  answer.innerHTML = '';
  let userInput = document.getElementById('height-tri').value;
  let oWidth;
  oWidth = cone_width(userInput);
  let firstLine = '';
  for(let width=1; width <= oWidth; width++){
      if(width % 2 === 1){
        let nextLine = '';
        let spaces = parseInt(oWidth - width);
        for(let num=spaces; num>0; num--){
            nextLine += ' &nbsp ';
            // nextLine += ' ';
          
        };
        for(let num=width; num > 0; num--){
            nextLine += symbol;
        };
        // console.log(nextLine+'\n');
        answer.innerHTML += (nextLine+'<br>');
        width++;
      }else if(width == oWidth){
      for(let num=width; num > 0; num--){
        firstLine += symbol;
      };
      // console.log(firstLine+ '\n');
      answer.innerHTML= (firstLine+ '<br>');
      width++;
    }else{
          width++;
      };
    };

}

function make_box(){
  console.log("I am box");

  answer.innerHTML = '';
  let height = document.getElementById('height').value;
  let width = document.getElementById('width').value;
  for(let row=0; row<height; row++){
      let line = '';
      for(let col=0; col<width; col++){
          if(row === height-1 || row === 0){
              line += symbol;
          }else{
              if(col === 0){
                  line += symbol;
              }else if(col === width-1){
                  line += '&nbsp'+symbol;
              }else{
                  line += '&nbsp &nbsp &nbsp';
              }
          }
      };
      answer.innerHTML += line+'<br>';
  }; 
}

function make_square (){
  console.log("I am square");

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


////////////CONE//////////////////////////
function cone_width(height){
    return parseInt(2*height-1);
  };


function make_cone(){
  console.log("I am cone");

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
  


