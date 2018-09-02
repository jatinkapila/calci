function num1(){

	document.getElementById('display').value += "1"
};
function num2(){

	document.getElementById('display').value += "2"
};
function num3(){

	document.getElementById('display').value += "3"
};
function num4(){

	document.getElementById('display').value += "4"
};
function num5(){

	document.getElementById('display').value += "5"
};

function num6(){

	document.getElementById('display').value += "6"
};

function num7(){

	document.getElementById('display').value += "7"
};

function num8(){

	document.getElementById('display').value += "8"
};

function num9(){

	document.getElementById('display').value += "9"
};

function num0(){

	document.getElementById('display').value += "0"
};
function operPlus(){

	document.getElementById('display').value += "+"
};
function operMinus(){

	document.getElementById('display').value += "-"
};
function operDivide(){

	document.getElementById('display').value += "/"
};
function operMultiply(){

	document.getElementById('display').value += "*"
};

function operClear(){

	document.getElementById('display').value = ""
};


function operEquals() {
	var equals = eval(document.getElementById('display').value)
	document.getElementById('display').value = equals;
}
