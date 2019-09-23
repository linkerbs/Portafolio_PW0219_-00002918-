let num = 5;
let actual = 1;
let anterior = 0;
let con = 0;
let temp = 0;
function fibonacci(num)
{
    while(con < num)
    {
        temp = actual;
        actual = actual + anterior;
        anterior = temp;
        console.log(anterior)
        con++;
    }
    
    
}

fibonacci(num);