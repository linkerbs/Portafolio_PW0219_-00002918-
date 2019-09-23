var arreglo = [1,4,8,10,2,4];
function tres(arreglo,ocurrencia)
{
    let suma = 0;
    let cont = 0;
    while(cont < arreglo.length)
    {
     if(arreglo[cont] === ocurrencia)
     {
         suma++;
     }
     cont++;
    }
    
    console.log("La ocurrencia es de: " + suma);
}
tres(arreglo,4);