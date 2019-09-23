var palabra = "aerea";

function cinco(palabra)
{
    let cont = 0;
    let fin = palabra.length - 1;
    var palin;
    palin = true;
    if(palabra.length%2 == 0)
    {
        while(cont < palabra.length/2)
        {
         
         if(palabra[cont] == palabra[fin])
         {
         palin = true;
         }
         else{
         palin = false;
         }
         cont++;
         fin--;
        }
    }
    else{
        while(cont < (palabra.length/2) + 0.5 && palin == true)
        
        {
         
         if(palabra[cont] == palabra[fin])
         {
         palin = true;
         }
         else{
         palin = false;
         }
         cont++;
         fin--;
        }
    }
    
    
    
    
    if(palin == true)
    {
        console.log("Es palindroma");
    }
    else{
        console.log("No es palindroma");
    }
}
cinco(palabra);