var num = 10;
var actual = 1;
var anterior = 0;
var con = 1;
var temp = 0;

function fibonacci(nume)
{    
    console.log(anterior)
    console.log(actual)
    while(con < nume)
    {
       
        temp = actual;
        actual = actual + anterior;
        anterior = temp;
        console.log(anterior)
        con++;
    }
    
    
}

fibonacci(num);