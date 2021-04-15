// Dado un array de numeros enteros, retornar el 3er mayor
// Por ejemplo en: [4,3,4,5,1] el tercer mayor es 3
// si la longitud del array es < 3 se debe retornar undefined

const greater3 = array => {
    let mayor = 0;
    let segundoMayor = 0;
    let tercerMayor = 0;

    if (array.length < 3) {

        return undefined
    }
    else{
        array.forEach(element => {
            if (element > mayor) {
                tercerMayor = segundoMayor;
                segundoMayor = mayor;            
                mayor = element;        
            }
            else if (element != mayor && element > segundoMayor) {
                tercerMayor = segundoMayor;
                segundoMayor = element;
            }
            else if (element != mayor && element != segundoMayor && element > tercerMayor) {
                tercerMayor = element;
            }
        });

        return tercerMayor == 0 && segundoMayor == 0 ? undefined : tercerMayor;
    }
}


// TESTs no modificar
console.log(greater3([4,3,4,5,1]) === 3);
console.log(greater3([3,4]) === undefined);
console.log(greater3([4,4,4]) === undefined);
console.log(greater3([1,1,2,5]) === 1);