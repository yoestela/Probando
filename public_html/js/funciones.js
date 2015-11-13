function convertir_celsius_a_fahrenheit(){
    var grado;
    if (!document.getElementById("argumentConv").value || 0){ 
        document.getElementById("answer").innerHTML = "0ºC = 32ºF";       
    }else{
        grado = parseFloat(document.getElementById("argumentConv").value);
        var result = grado * 1.8000 + 32.00;
        document.getElementById("answer").innerHTML = grado.toString()+"ºC = "+ result.toString()+ "ºF";
    }
}

function convertir_celsius_a_kelvin(){
    var grado = parseFloat(document.getElementById("argumentConv").value);
    var salida = document.getElementById("answer");
    var result = grado + 273.15;
    salida.innerHTML = grado.toString()+"ºC= "+ result.toString()+ "ºK";
}

function convertir_celsius_a_rankine(){
    var grado = parseFloat(document.getElementById("argumentConv").value);
    var salida = document.getElementById("answer");
    var result = grado * 1.8000 + 491.67;
    salida.innerHTML = grado.toString()+"ºC= "+ result.toString()+ "ºR";
}
function convertir_celsius_a_delisle(){
    var grado = parseFloat(document.getElementById("argumentConv").value);
    var salida = document.getElementById("answer");
    var result = grado * 1.5000 - 100.00;
    salida.innerHTML = grado.toString()+"ºC= "+ result.toString()+ "ºDe";
}
function convertir_celsius_a_newton(){
    var grado = parseFloat(document.getElementById("argumentConv").value);
    var salida = document.getElementById("answer");
    var result = grado * 0.33000;
    salida.innerHTML = grado.toString()+"ºC= "+ result.toString()+ "ºN";
    
}

function convertir_fahrenheit_a_celsius(){  
    var grado = parseFloat(document.getElementById("argumentConv").value);
    var salida = document.getElementById("answer");
    var result = (grado - 32)/1.8000;
    salida.innerHTML = grado.toString()+"ºF= "+ result.toString()+ "ºC";
}
function convertir_fahrenheit_a_kelvin(){  
    var grado = parseFloat(document.getElementById("argumentConv").value);
    var salida = document.getElementById("answer");
    var result = ((grado - 32)/1.8000) + 273.15;
    salida.innerHTML = grado.toString()+"ºK= "+ result.toString()+ "ºK";
}
function convertir_fahrenheit_a_rankine(){  
    var grado = parseFloat(document.getElementById("argumentConv").value);
    var salida = document.getElementById("answer");
    var result = (grado - 32) + 491.67;
    salida.innerHTML = grado.toString()+"ºK= "+ result.toString()+ "ºR";
}
function convertir_fahrenheit_a_newton(){  
    var grado = parseFloat(document.getElementById("argumentConv").value);
    var salida = document.getElementById("answer");
    var result = (grado - 32) * 0.18333;
    salida.innerHTML = grado.toString()+"ºF= "+ result.toString()+ "ºN";
}
function convertir_fahrenheit_a_delisle(){  
    var grado = parseFloat(document.getElementById("argumentConv").value);
    var salida = document.getElementById("answer");
    var result = ((grado - 32) * 0.83333) - 100.00;
    salida.innerHTML = grado.toString()+"ºF= "+ result.toString()+ "ºDe";
}
function convertir_kelvin_a_celsius(){
    var grado = parseFloat(document.getElementById("argumentConv").value);
    var salida = document.getElementById("answer");
    var result = grado - 273.15;
    salida.innerHTML = grado.toString()+"ºK= "+ result.toString()+ "ºC";
}
function convertir_kelvin_a_delisle(){
    var grado = parseFloat(document.getElementById("argumentConv").value);
    var salida = document.getElementById("answer");
    var result = ((grado - 273.15) * 1.5000) - 100.00;
    salida.innerHTML = grado.toString()+"ºK= "+ result.toString()+ "ºDe";
}
function convertir_kelvin_a_fahrenheit(){
    var grado = parseFloat(document.getElementById("argumentConv").value);
    var salida = document.getElementById("answer");
    var result = ((grado - 273.15) * 1.8000 )+ 32.00;
    salida.innerHTML = grado.toString()+"ºK= "+ result.toString()+ "ºF";
}
function convertir_kelvin_a_newton(){
    var grado = parseFloat(document.getElementById("argumentConv").value);
    var salida = document.getElementById("answer");
    var result = (grado - 273.15)* 0.33000;
    salida.innerHTML = grado.toString()+"ºK= "+ result.toString()+ "ºN";
}
function convertir_kelvin_a_rankine(){
    var grado = parseFloat(document.getElementById("argumentConv").value);
    var salida = document.getElementById("answer");
    var result = ((grado - 273.15)* 1.8000) + 491.67;
    salida.innerHTML = grado.toString()+"ºK= "+ result.toString()+ "ºR";
}
function convertir_rankine_a_celsius(){
    var grado = parseFloat(document.getElementById("argumentConv").value);
    var salida = document.getElementById("answer");
    var result = (grado - 491.67) / 1.8000;
    salida.innerHTML = grado.toString()+"ºR= "+ result.toString()+ "ºC";
}
function convertir_rankine_a_delisle(){
    var grado = parseFloat(document.getElementById("argumentConv").value);
    var salida = document.getElementById("answer");
    var result = ((grado- 491.67)* 0.83333) - 100.00;
    salida.innerHTML = grado.toString()+"ºR= "+ result.toString()+ "ºDe";
}
function convertir_rankine_a_fahrenheit(){
    var grado = parseFloat(document.getElementById("argumentConv").value);
    var salida = document.getElementById("answer");
    var result = (grado - 491.67) + 32.00;
    salida.innerHTML = grado.toString()+"ºR= "+ result.toString()+ "ºF";
}
function convertir_rankine_a_kelvin(){
    var grado = parseFloat(document.getElementById("argumentConv").value);
    var salida = document.getElementById("answer");
    var result = ((grado - 491.67) / 1.8000 )+  273.15;
    salida.innerHTML = grado.toString()+"ºR= "+ result.toString()+ "ºK";
}
function convertir_rankine_a_newton(){
    var grado = parseFloat(document.getElementById("argumentConv").value);
    var salida = document.getElementById("answer");
    var result = (grado  - 491.67)* 0.18333;
    salida.innerHTML = grado.toString()+"ºR= "+ result.toString()+ "ºN";
}