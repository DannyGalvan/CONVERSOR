const dato = document.getElementById('dato');
dato.onkeyup = () => CalcularResultado();

const hexadecimal = document.getElementById('hexadecimal');
hexadecimal.onchange = ()=> CalcularResultado();

const decimal = document.getElementById('decimal');
decimal.checked = true;
decimal.onchange = ()=> CalcularResultado();

const octal = document.getElementById('octal');
octal.onchange = ()=> CalcularResultado();

const binario = document.getElementById('binario');
binario.onchange = ()=> CalcularResultado();

const error = document.getElementById('error');

const result1 = document.getElementById('result1');
const res1 = document.getElementById('res1');
const result2 = document.getElementById('result2');
const res2 = document.getElementById('res2');
const result3 = document.getElementById('result3');
const res3 = document.getElementById('res3');

const convertir = document.getElementById('convertir');
convertir.onclick = () => CalcularResultado();

function CalcularResultado() {
    if (decimal.checked) {
        if (isNaN(dato.value) || dato.value <= 0) {
            error.innerText = "Número Invalido";
            return
        }
        else{
            result1.value = convertirHexadecimal(parseInt(dato.value));
            res1.innerText = "hexadecimal";
            result2.value = convertirOctal(parseInt(dato.value));
            res2.innerText = "octal";
            result3.value = convertirBinario(parseInt(dato.value));
            res3.innerText = "binario";
        }    
    }else if (hexadecimal.checked) {
        result1.value = convertirDecimal(hexadecimal.value);
        res1.innerText = "decimal";
        result2.value = convertirOctal(parseInt(result1.value));
        res2.innerText = "octal";
        result3.value = convertirBinario(parseInt(result1.value));
        res3.innerText = "binario"
    } else if (octal.checked) {
        result1.value = convertirDecimal(octal.value);
        res1.innerText = "decimal";
        result2.value = convertirHexadecimal(parseInt(result1.value));
        res2.innerText = "Hexadecimal";
        result3.value = convertirBinario(parseInt(result1.value));
        res3.innerText = "binario"
    } else if (binario.checked) {
        result1.value = convertirDecimal(binario.value);
        res1.innerText = "decimal";
        result2.value = convertirHexadecimal(parseInt(result1.value));
        res2.innerText = "Hexadecimal";
        result3.value = convertirOctal(parseInt(result1.value));
        res3.innerText = "octal";  
    }     
}   


function convertirDecimal(base){
     let numero = dato.value;
     let resultado = parseInt(numero,base);
     if (isNaN(resultado)  || resultado <= 0) {
        error.innerText = "Número Invalido";
        return "";
    }
    else{
        error.innerText = " ";
        return resultado; 
    }  
     
}

function convertirHexadecimal(numero) {
    if (isNaN(numero) || numero <= 0) {
        error.innerText = "Número Invalido";
        return "";
    }
    else{
        error.innerText = " ";
        return numero.toString('16').toUpperCase();
    }  
}

function convertirOctal(numero) {
    if (isNaN(numero ) || numero <= 0) {
        error.innerText = "Número Invalido";
        return "";
    }
    else{
        error.innerText = " ";
        return numero.toString('8');
    }
}

function convertirBinario(numero) {
    if (isNaN(numero) || numero <= 0) {
        error.innerText = "Número Invalido";
        return "";
    }
    else{
        error.innerText = " ";
        return numero.toString('2');
    }
}




