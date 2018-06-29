$(function () {
    newGame();
});

function newGame() {
    username = mytrim(prompt("Enter you name"));
    // username =prompt("Enter you name");
    console.log(username)
    if(!myRepeat(JSON.parse(storge.getItem('list')), username)) {
        alert("用户名已经存在");
        newGame();
    }
    console.log(username)
    score = 0;
    updateScore(score);
    // 初始化棋盘格和数字格
    init();
    // 在随机位置的两个格子生成随机数字
    generateOneNumber();
    generateOneNumber();
}
// var ifDone = false;
var username;
var border = new Array();
var score = 0;
var grade = [];
var storge = window.localStorage;

function init() {
    updateScore(score);
    for (var i = 0; i != 4; i++) {
        // 定义了一个二维数组
        border[i] = new Array();
        for (var j = 0; j != 4; j++) {
            // 初始化小格子的值为零
            border[i][j] = 0;
            var gridCell = $("#grid-cell-" + i + "-" + j);
            // var gridCell = document.getElementById("grid-ceil-" + i + "-" +j);
            // 通过getPostTop设置每个格子距离顶部的值
            gridCell.css("top", getPostTop(i, j));
            // 通过getPostLeft设置每个格子距离左边的值
            gridCell.css("left", getPostLeft(i, j));
        }
    }
    updateBorderView();
    run();
}

function updateBorderView() {
    $(".number-cell").remove();
    for (var i = 0; i != 4; i++) {
        for (var j = 0; j != 4; j++) {
            $("#grid-continer").append("<div class = 'number-cell' id = 'number-cell-" + i + "-" + j + "'></div>");
            var numberCeil = $("#number-cell-" + i + "-" + j);
            // 如果棋盘格的值为0的话，那么设置高度和宽度都为0
            // 如果棋盘格的值不为0，那么设置高度和宽度为75 并设置前景色和背景色以及数字的值
            if (border[i][j] == 0) {
                numberCeil.css("with", "0px");
                numberCeil.css("height", "0px");
                numberCeil.css("top", getPostTop(i, j) + 50);
                numberCeil.css("left", getPostLeft(i, j) + 50);
            } else {
                numberCeil.css("width", "100px");
                numberCeil.css("height", "100px");
                numberCeil.css("top", getPostTop(i, j));
                numberCeil.css("left", getPostLeft(i, j));
                numberCeil.css("background-color", getNumberBackgroundColor(border[i][j]));
                numberCeil.css("color", getNumberColor(border[i][j]));
                numberCeil.html(border[i][j])
            }
        }
    }
}

function generateOneNumber() {
    // 生成一个随机数
    // 生成一个随机位置
    // 在随机位置上显示随机数字
    var rendx = parseInt(Math.floor(Math.random() * 4));
    var rendy = parseInt(Math.floor(Math.random() * 4));
    // console.log(rendx);
    // console.log(rendy);
    while (true) {
        if (border[rendx][rendy] == 0) {
            break;
        } else {
            var rendx = parseInt(Math.floor(Math.random() * 4));
            var rendy = parseInt(Math.floor(Math.random() * 4));
        }
    }
    // 随机生成的数字
    var rendNumber = Math.random() > 0.5 ? 2 : 4;
    // console.log(rendNumber);
    border[rendx][rendy] = rendNumber;
    // 实现随机数字产生的动画
    showNumberWithAnimotion(rendx, rendy, rendNumber);
}

$("#newGameButton").click(function () {
    window.location.reload();
})