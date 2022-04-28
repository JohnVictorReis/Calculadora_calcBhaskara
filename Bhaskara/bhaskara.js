function calcDelta(a, b, c) {

  var delta = Math.pow(b,2) - (4 * a * c);
  var resultbhaskara = calcBhaskara(a, b, delta)

 return delta;

}

function calcBhaskara(a, b, delta) {

  var x1 = 0;
  var x2 = 0;

  if (delta > 0) {
    x1 = (-b + Math.sqrt(delta)) / (2 * a);
    x2 = (-b - Math.sqrt(delta)) / (2 * a);

    if(x1 <=0 )
    x1 = "Valor inexistente";

    if(x2 <= 0)
    x2 = "Valor inexistente";
  } else if (delta == 0) {
    x1 = (-b + Math.sqrt(delta)) / (2 * a);
    x2 = "indefinido";
  } else {
    
    x1 = "Valor inexistente";
    x2 = "Valor inexistente";
  }

  return  {x1, x2};
}


function enviar(){

    let a = document.getElementById("aaa").value;
    let b = document.getElementById("bbb").value;
    let c = document.getElementById("ccc").value;

    var delta = calcDelta(a,b,c);
    var resultbhaskara = calcBhaskara(a, b, delta)

    document.getElementById("resultado").innerHTML="   " +  "x' = " + resultbhaskara.x1 + " x'' = " + resultbhaskara.x2 + "   "

    
}


//const abc = document.getElementById("getElementById("fomulario")");
//document.getElementById("blau").innerHTML = x1;
//document.getElementById("botao").addEventListener("click", calcDelta(0, 0, 0));

document.getElementById("botao").addEventListener("click", enviar);


export { calcDelta, calcBhaskara, enviar };
