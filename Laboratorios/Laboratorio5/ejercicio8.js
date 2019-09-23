var num = 14;
var bin = 0;
var actual = 0;
function decimal(nume)
{   
    do{
        bin = num % 2;
        num = num/2;
        actual = actual + bin;
    }while(num!=2)

    console.log(actual);
   
}

decimal(num);