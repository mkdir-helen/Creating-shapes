let height = 4;
let width = 6;
let symbol = '🐬';

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