/**
 * Created by Administrator on 2016/7/20 0020.
 */

var yellow = document.getElementsByClassName("footer-yellow")[0]; //通过ClassName获取到按钮
yellow.onclick = function yell() { //建立一个函数
    document.getElementById("main-nav").style.backgroundColor = "yellow"; //获取到更改背景的id，对它的style背景进行更改
    var tip=document.getElementsByTagName("a");
    for (var i = 8; i < 17; i++) {
        document.getElementsByTagName("a")[i].style.color = "red"; //利用for循环来截取到a标签8到17下标的字体进行颜色更改
    }
    localStorage.theme = "yell"; //存储一个yell
};
var red = document.getElementsByClassName("footer-red")[0]; //通过ClassName获取到按钮
red.onclick = function red() { //建立一个函数
    document.getElementById("main-nav").style.backgroundColor = "red"; //获取到更改背景的id，对它的style背景进行更改
    for (var i = 8; i < 17; i++) {
        document.getElementsByTagName("a")[i].style.color = "blue"; //利用for循环来截取到a标签8到17下标的字体进行颜色更改
    }
    localStorage.theme = "red"; //存储一个red
};
var bule = document.getElementsByClassName("footer-blue")[0]; //通过ClassName获取到按钮
bule.onclick = function blue() { //建立一个函数
    document.getElementById("main-nav").style.backgroundColor = "blue"; //获取到更改背景的id，对它的style背景进行更改
    for (var i = 8; i < 17; i++) {
        document.getElementsByTagName("a")[i].style.color = "yellow"; //利用for循环来截取到a标签8到17下标的字体进行颜色更改
    }
    localStorage.theme = "blue"; //存储一个blue
};
if (localStorage.theme == "yell") {
    document.getElementById("main-nav").style.backgroundColor = "yellow"; //获取到更改背景的id，对它的style背景进行更改
    for (var i = 8; i < 17; i++) {
        document.getElementsByTagName("a")[i].style.color = "red"; //利用for循环来截取到a标签8到17下标的字体进行颜色更改
    }
}
if (localStorage.theme == "red") {
    document.getElementById("main-nav").style.backgroundColor = "red"; //获取到更改背景的id，对它的style背景进行更改
    for (var i = 8; i < 17; i++) {
        document.getElementsByTagName("a")[i].style.color = "blue"; //利用for循环来截取到a标签8到17下标的字体进行颜色更改
    }
}
if (localStorage.theme == "blue") {
    document.getElementById("main-nav").style.backgroundColor = "blue"; //获取到更改背景的id，对它的style背景进行更改
    for (var i = 8; i < 17; i++) {
        document.getElementsByTagName("a")[i].style.color = "yellow"; //利用for循环来截取到a标签8到17下标的字体进行颜色更改
    }
}
