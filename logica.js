var salarioInicial;
var salarioAjustado;
var ajuste;
ajuste=parseFloat(ajuste);
salarioInicial=parseFloat(prompt("Ingrese su salario"));

if (salarioInicial<1300606) {
    ajuste=salarioInicial*0.15
} else {
    ajuste=0
}
salarioAjustado=ajuste+salarioInicial;
alert("su salario ajustado es" + salarioAjustado);
console.log("su salario con ajuste es igual a" + salarioAjustado);
