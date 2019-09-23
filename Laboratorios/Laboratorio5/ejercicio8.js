var num = 14;
var bin = 0;
var actual = "";
function decimal(nume)
{   
    do{
        bin = num % 2;
        num = Math.floor(num/2);
        
        actual = actual + bin;
    }while(num>1)

    var fin;
    fin = actual + num;
   console.log();
   
}

decimal(num);