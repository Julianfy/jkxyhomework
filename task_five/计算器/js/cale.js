/**
 * Created by Administrator on 2016/7/15.
 */
//网页计算器


var num = 0,
    result = 0,
    numshow = "0";

var operate = false; //判断输入状态的标志

var calcul; //判断计算状态的标志

var quit = false; //防止重复按键的标志


function command(num) {

    var str = String(document.calculator.numScreen.value); //获得当前显示数据

    str = (str != "0") ? ((operate == false) ? str : "") : ""; //如果当前值不是"0"，且状态为0，则返回当前值，否则返回空值;

    str = str + String(num); //给当前值追加字符

    document.calculator.numScreen.value = str; //刷新显示

    operate = false; //重置输入状态

    quit = false; //重置防止重复按键的标志

}

function dzero() {

    var str = String(document.calculator.numScreen.value);

    str = (str != "0") ? ((operate == false) ? str + "00" : "0") : "0"; //如果当前值不是"0"，且状态为0，则返回当str+"00"，否则返回"0";

    document.calculator.numScreen.value = str;

    operate = false;

}

function dot() {

    var str = String(document.calculator.numScreen.value);

    str = (str != "0") ? ((operate == false) ? str : "0") : "0"; //如果当前值不是"0"，且状态为0，则返回当前值，否则返回"0";

    for (i = 0; i <= str.length; i++) { //判断是否已经有一个点号

        if (str.substr(i, 1) == ".") return false; //如果有则不再插入

    }

    str = str + ".";

    document.calculator.numScreen.value = str;

    operate = false;

}

function del() { //退格

    var str = String(document.calculator.numScreen.value);

    str = (str != "0") ? str : "";
    // 该方法在于提取出除最后一个字符的字符串

    str = str.substr(0, str.length - 1);

    str = (str != "") ? str : "0";

    document.calculator.numScreen.value = str;

}

function clearscreen() { //清除数据

    num = 0;

    result = 0;

    numshow = "0";

    document.calculator.numScreen.value = "0";

}

function unaryOper(type) {
    calculate(); //调用计算函数

    operate = true; //更改输入状态

    calcul = type; //更改计算状态为加
}

//
function equal() {

    calculate(); //等于

    operate = true;

    num = 0;

    result = 0;

    numshow = "0";

}


function calculate() {

    numshow = Number(document.calculator.numScreen.value);

    if (num != 0 && quit != true) { //判断前一个运算数是否为零以及防重复按键的状态

        switch (calcul) { //判断要输入状态

            case 'plus':
                result = num + numshow;
                break; //计算"+"

            case 'minus':
                result = num - numshow;
                break; //计算"-"

            case 'times':
                result = num * numshow;
                break;

            case 'divide':
                if (numshow != 0) { result = num / numshow; } else {
                    document.getElementById("note").innerHTML = "被除数不能为零！";
                    setTimeout(clearnote, 4000)
                }
                break;

            case 'persent':
                result = num % numshow;
                break;
            case 'ln':
                result = Math.round(Math.log(numshow));
                break;
            case 'sin':
                result = Math.sin(numshow*Math.PI/180);
                break;
            case 'cos':
                result = Math.cos(numshow*Math.PI/180);
                break;
            case 'tan':
                result = Math.tan(numshow*Math.PI/180);
                break;
            case 'log':
                result = Math.log(numshow);
                break;

        }

        quit = true; //避免重复按键

    } else {

        result = numshow;

    }

    numshow = String(parseFloat(result.toFixed(8)));

    document.calculator.numScreen.value = numshow;

    num = result; //存储当前值

}

function clearnote() { //清空提示

    document.getElementById("note").innerHTML = "";

}
