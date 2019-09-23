var arreglo = [1,4,8,10,2];
function tipo(arreglo)
{
    let suma = 0;
    let cont = 0;
    while(cont < arreglo.length)
    {
     suma = suma + arreglo[cont];
     cont++;
    }
    let prom = suma/cont;
    console.log("La suma es: " + suma + " y el promedio: " + prom);
}

tipo(arreglo);