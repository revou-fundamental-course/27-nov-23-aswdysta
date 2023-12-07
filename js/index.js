function luasSegitiga() {
    var a = parseFloat(document.getElementById("input-tinggi").value);
    var t = parseFloat(document.getElementById("input-alas").value);

    var luas = 0.5 * a * t;
  
    document.getElementById("output-luas").innerHTML = luas;

    try { 
        if(isNaN(a) || isNaN(t)) throw "kamu lupa masukkan nilai alas atau tinggi segitiga";
    }
    catch(err) {
        alert("Yah... " + err);
        return
    } 
}

function resetLuasSegitiga() {
    document.getElementById("input-tinggi").value = "";
    document.getElementById("input-alas").value = "";
    document.getElementById("output-luas").innerHTML = "";
}


function kelilingSegitiga() {
    var a = parseFloat(document.getElementById("input-sisi-satu").value);
    var b = parseFloat(document.getElementById("input-sisi-dua").value);
    var c = parseFloat(document.getElementById("input-sisi-tiga").value);

    var keliling = a + b + c;

    document.getElementById("output-keliling").innerHTML = keliling;  

    try { 
        if(isNaN(a) || isNaN(b) || isNaN(c)) throw "kamu lupa masukkan nilai sisi segitiga";
    }
    catch(err) {
        alert("Yah... " + err);
        return
    }  
}

function resetKelilingSegitiga() {
    document.getElementById("input-sisi-satu").value = "";
    document.getElementById("input-sisi-dua").value = "";
    document.getElementById("input-sisi-tiga").value = "";
    document.getElementById("output-keliling").innerHTML = "";
}

const inputField = document.getElementsByClassName("katik-input")
const buttonHitung = document.getElementById("button-hitung")

inputField.addEventListener('input', function(){
    var textInput = inputField.value.trim()
    if (validateInput(textInput)) {
        buttonHitung.disabled = false
    } else {
        buttonHitung.disabled = true
    }
})

function validateInput(inputValue) {
    const intergerRegex = /^-?\d+$/;
    return intergerRegex.test(inputValue)
}










