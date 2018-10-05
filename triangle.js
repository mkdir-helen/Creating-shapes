//I want to build a cone in javascript



function cone_width(height){
    return parseInt(2*height-1);
  };
  let width, oWidth;
  width = oWidth = cone_width(5);
  let firstLine = '';
  
  for(let num=oWidth; num > 0; num--){
    if(width == oWidth){
      for(let num=width; num > 0; num--){
        firstLine += '*';
      };
      console.log(firstLine+ '\n');
      width--;
    }else{
      if(width % 2 === 1){
        let nextLine = '';
        let spaces = parseInt((oWidth - width)/2);
        for(let num=spaces; num>0; num--){
            nextLine += '1';
          
        };
        for(let num=width; num > 0; num--){
            nextLine += '*';
        };
        console.log(nextLine+'\n');
        width--;
      }else{
          width--;
      };
    };
  };



