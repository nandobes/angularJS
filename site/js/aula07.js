/**
 * FUNCTIONS
 */

// function dividir(x, y){
//     return x / y;

// }

// alert(dividir(6, 2));

//------------------------------------------------------------------------//

/**
 * IF E ELSE
 */
/* 
var idade = 62;
if (idade <= 11) {
  alert("Crianca");
} else if (idade > 11 && idade <= 16) {
  alert("Adolescente");
} else if (idade > 16 && idade <= 21) {
  alert("Jovem");
} else if (idade > 21 && idade < 60) {
  alert("Adulto");
} else {
  alert("Maior ");
} */

//-----------------------------------------------------------------------//

/**
 * SWITCH
 */
/* var tecnologia = "delphi";
switch (tecnologia) {
  case "delphi":
  case "java":
  case "java":
    alert("linguagem de programacao " + tecnologia);
    break;
  case "mysql":
  case "firebird":
    alert("banco de dados " + tecnologia);
    break;
  default:
    alert("linguagem desconhecida " + tecnologia);
}
 */

//-----------------------------------------------------------------------//

/**
 * FOR
 */
/* var texto = "";
for (var i = 0; i <= 20; i++) {
  if (i % 2 == 0) {
    if (i == 20) {
      texto += i;
      break;
    }
    texto += i + " , ";
  }
  
}
alert(texto); */


//-----------------------------------------------------------------------//

/**
 * FOR IN
 */

var carro = {
    marca : "fuska",
    modelo:"1300L",
    velocidade:"80KM",
    cv:"46"
} ;
for (var props in carro) {
    alert(props + " - " + carro[props]);
}
