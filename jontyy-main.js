$(function () {
    newGame();
});

function newGame() {
    // 初始化棋盘格
    init();
    // 在随机两个格子生成数字
    // generateOneNumber();
    // generateOneNumber();
}

var border = new Array();

function init() {
    for (var i = 0; i != 4; i++) {
        // 定义了一个二维数组
        border[i] = new Array();
        for (var j = 0; j != 4; j++) {
            // 初始化小格子的值为零
            border[i][j] = 0;
            var gridCell = $("#grid-cell-" + i + "-" + j);
            // 通过getPostTop设置每个格子距离顶部的值
            gridCell.css("top", getPostTop(i, j));
            // 通过getPostLeft设置每个格子距离左边的值
            gridCell.css("left", getPostLeft(i, j));
        }
    }
    updateBorderView();
}

function updateBorderView() {
    for (var i = 0; i != 4; i++) {
        for (var j = 0; j != 4; j++) {
            $("#grid-continer").append("<div class = 'number-cell' id = 'number-cell-" + i + "-" + j + "'></div>");
            //    如果棋盘格的值为0的话，那么设置高度和宽度都为0
            //  如果棋盘格的值不为0，那么设置高度和宽度为75 并设置前景色和背景色以及数字的值
            // if (border[i][i] == 0)  {
            //     numberCeil.css("with", "0px");
            //     numberCeil.css("height", "0px");
            //     numberCeil.css("top", getPostTop(i, j) + 50);
            //     numberCeil.css("left", getPostLeft(i, j) + 50);
            // } else {
            //     numberCeil.css("width", "100px");
            //     numberCeil.css("height", "100px");
            //     numberCeil.css("top", getPostTop(i, j));
            //     numberCeil.css("left", getPostLeft(i, j));
            //     numberCeil.css("background-color", getNumberBackGroundColor(border[i][j]));
            //     numberCeil.css("color", getNumberColor(border[i][j]));
            // }
        }
    }
}