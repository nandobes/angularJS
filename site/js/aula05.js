/**
 * funçcao ligar lampada
  
function ligar(){
    var nome = window.prompt("Qual o seu nome?");
    alert("Seja bem vindo " + nome);

    document.getElementById("xti").src = "img/xlamp_on.png";

}*/

/**
 * operadores
 *
//var x = 40 % 3;
var x = 6;


alert(x);  */
/**
 * operadores logicos
 *
 * && AND  (e)
 * || OR   (ou)
 * !  NOT  (nao)
 *
 */

function calcularIMC() {
    var f = document.getElementById("form");

    var kilos = +f.kilos.value;
    var metros = +f.metros.value;
    var centimetros = +f.cm.value;

    var altura = (metros * 100 + centimetros) / 100;
    var imc = kilos / (altura * altura);

    f.imc.value = imc.toFixed(2);

    if (imc < 20) {
        f.msg.value = "Abaixo do peso";
    } else if (imc >= 20 && imc < 25) {
        f.msg.value = "Peso ideal";
    } else if (imc >= 25 && imc < 30) {
        f.msg.value = "Sobrepeso";
    } else if (imc >= 30 && imc < 35) {
        f.msg.value = "Obesidade Moderada";
    } else if (imc >= 35 && imc < 40) {
        f.msg.value = "Obesidade Severa";
    } else if (imc >= 40 && imc < 50) {
        f.msg.value = "Obesidade Morbida";
    } else {
        f.msg.value = "Super Obesidade";
    }
}
