//I want to build a cone in javascript

// var height = 9;
// var num = parseInt(2*height - 1);
// var init_num;

function cone(){
    var userInput = document.getElementById('demo').value
    var num = parseInt(2*userInput - 1);
    init_num = num;

    
}

while (num > 0){
    if(num % 2 == 1){
        if (init_num == num){
            var a_num = num;
            while(a_num > 0){
                // document.getElementById("demo").innerHTML = 5 + 6;
                document.getElementById('demo').innerHTML = '*';
                a_num -= 1;
            }
        }else{
            var b_num = num;
            var x_num = num;
            while(b_num >= 0){
                if(b_num > b_num - x_num){
                    while(x_num > 0){
                        document.getElementById('demo').innerHTML = ' ';
                        b_num -= 1;
                    }
                }else{
                    document.getElementById('demo').innerHTML = ' ';
                }
                b_num -= 1;
            }

        }
    }
    num -= 1;
}

