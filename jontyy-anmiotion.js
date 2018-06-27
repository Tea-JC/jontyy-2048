function showNumberWithAnimotion(i, j, rendNumber) {
    var numberCell = $("#number-cell-" + i + "-" + j);
    numberCell.css("background-color", getNumberBackgroundColor(rendNumber));
    numberCell.css("color", getNumberColor(rendNumber));
    numberCell.text(rendNumber);
    numberCell.animate({
        width: "100px",
        height: "100px",
        top: getPostTop(i, j),
        left: getPostLeft(i, j),
    }, 50);
}

function showMoveAnimation(fromx, fromy, tox, toy) {
    // 获取当前数据
    var numberCell = $("#number-cell-" + fromx + "-" + fromy);
    numberCell.animate({
        top: getPostTop(tox, toy),
        left: getPostLeft(tox, toy)
    }, 200);
}