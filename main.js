function insert(num) {
    document.form.textview.value += num;
}

function clean() {
    document.form.textview.value = "";
}

function back() {
    var exp = document.form.textview.value;
    document.form.textview.value = exp.substring(0, exp.length-1);
}

function searchForSquare() {
    var arr = [];
    arr = document.form.textview.value;
    var indexing = arr.indexOf('^');
    var firstString = arr.substring(0, indexing);
    var secondString = arr.substring(indexing+1);

    var pow = Math.pow(firstString, secondString);
    document.form.textview.value = pow;
}

function searchForFactorial() {
    var arr = [];
    var factorial = 1;
    arr = document.form.textview.value;
    var indexing = arr.indexOf('!');
    var stringBeforeIndex = arr.substring(0, indexing);
    var convertIntoInteger = Number(stringBeforeIndex);
    while(convertIntoInteger > 0) {
        factorial = factorial * convertIntoInteger;
        convertIntoInteger--;
    }
    document.form.textview.value = factorial;
}

function searchForSquareRoot() {
    var arr = [];
    arr = document.form.textview.value;
    var stringAfterIndex = arr.substring(1, arr.length);
    var convertIntoInteger = Number(stringAfterIndex);
    var squareRoot = (convertIntoInteger)**(1/2);
    document.form.textview.value = squareRoot;
}

function searchForCubeRoot() {
    var arr = [];
    arr = document.form.textview.value;
    var stringAfterIndex = arr.substring(1, arr.length);
    var convertIntoInteger = Number(stringAfterIndex);
    var CubeRoot = Math.cbrt(convertIntoInteger);
    document.form.textview.value = CubeRoot;
}

function evaluation() {
    var exp = document.form.textview.value;
    document.form.textview.value = eval(exp);
}

function equal() {
    var exp = document.form.textview.value;
    var i;
    for(i = 0; i < exp.length; i++){
        if(exp[i] == '^') {
            searchForSquare();
        }
    }
    for(i = 0; i < exp.length; i++) {
        if(exp[i] == '!') {
            searchForFactorial();
        }
    }
    for(i = 0; i < exp.length; i++) {
        if(exp[i] == '√') {
            searchForSquareRoot();
        }
    }
    for(i = 0; i < exp.length; i++) {
        if(exp[i] == '∛') {
            searchForCubeRoot();
        }
    }
    for(i = 0; i < exp.length; i++) {
        if(exp[i] != '^') {            
            if(i == Math.max(i)){
                evaluation();
            }
            continue;
        }
    }
}