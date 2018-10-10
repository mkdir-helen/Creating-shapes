//I want to build a cone in javascript



function cone_width(height){
    return parseInt(2*height-1);
  };


function make_cone(){
  let userInput = document.getElementById('height-tri').value;
  let width, oWidth;
  width = oWidth = cone_width(userInput);
  let firstLine = '';
  let symbol = document.getElementById('mySelect').value;
  let answer = document.getElementById("showcase");
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
  


