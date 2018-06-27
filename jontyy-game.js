// keydown表示键盘呗按下去
$(document).keydown(function (event) {
    var x = event.keyCode;
    switch (parseInt(x)) {
        // 左上右下
        case 37:
            event.preventDefault();
            if (moveLeft()) {
                generateOneNumber();
                isGameOver();
            }
            break;
        case 38:
            event.preventDefault();
            if (moveUp()) {
                generateOneNumber();
                isGameOver();
            }
            break;
        case 39:
            event.preventDefault();
            if (moveRight()) {
                generateOneNumber();
                isGameOver();
            }
            break;
        case 40:
            event.preventDefault();
            if (moveDown()) {
                generateOneNumber();
                isGameOver();
            }
            break;
    }
});

function moveLeft() {
    // return a bootlen
    if (!canMoveLeft(border)) {
        return false;
    }
    // 向左移动 上下左右对i和j有区分
    for (var i = 0; i != 4; i++) {
        for (var j = 1; j != 4; j++) {
            if (border[i][j] !== 0) {
                for (var k = 0; k != j; k++) {
                    if (border[i][k] == 0 && noBlockHorization(i, k, j, border)) {
                        // 向左移动
                        showMoveAnimation(i, j, i, k);
                        border[i][k] = border[i][j];
                        border[i][j] = 0;
                    } else if (border[i][k] == border[i][j] && noBlockHorization(i, k, j, border)) {
                        // 向左移动
                        showMoveAnimation(i, j, i, k);
                        border[i][k] += border[i][j];
                        score += border[i][j];
                        border[i][j] = 0;
                        updateScore(score);
                    }
                }
            }
        }
    }

    setTimeout("updateBorderView()", 200);
    return true;
}


function moveRight() {
    // return a bootlen
    if (!canMoveRight(border)) {
        return false;
    }
    // 向右移动 上下左右对i和j有区分
    for (var i = 0; i != 4; i++) {
        for (var j = 2; j != -1; j--) {
            if (border[i][j] !== 0) {
                for (var k = 3; k != j; k--) {
                    if (border[i][k] == 0 && noBlockHorization(i, j, k, border)) {
                        // 移动
                        showMoveAnimation(i, j, i, k);
                        border[i][k] = border[i][j];
                        border[i][j] = 0;
                    } else if (border[i][k] == border[i][j] && noBlockHorization(i, j, k, border)) {
                        // 向左移动
                        showMoveAnimation(i, j, i, k);
                        border[i][k] += border[i][j];
                        score += border[i][j];
                        border[i][j] = 0;
                        updateScore(score);
                    }
                }
            }
        }
    }
    setTimeout("updateBorderView()", 200);
    return true;
}

function moveUp() {
    // return a bootlen
    if (!canMoveUp(border)) {
        return false;
    }
    // 向左移动 上下左右对i和j有区分
    for (var j = 0; j != 4; j++) {
        for (var i = 1; i != 4; i++) {
            if (border[i][j] !== 0) {
                for (var k = 0; k != i; k++) {
                    if (border[k][j] == 0 && noBlockHorization2(j, k, i, border)) {
                        // 向左移动
                        showMoveAnimation(i, j, k, j);
                        border[k][j] = border[i][j];
                        border[i][j] = 0;
                    } else if (border[k][j] == border[i][j] && noBlockHorization2(j, k, i, border)) {
                        // 向左移动
                        showMoveAnimation(i, j, k, j);
                        border[k][j] += border[i][j];
                        score += border[i][j];
                        border[i][j] = 0;
                        updateScore(score);
                    }
                }
            }
        }
    }
    setTimeout("updateBorderView()", 200);
    return true;
}

function moveDown() {
    // return a bootlen
    if (!canMoveDown(border)) {
        return false;
    }
    // 向右移动 上下左右对i和j有区分
    for (var j = 0; j != 4; j++) {
        for (var i = 2; i != -1; i--) {
            if (border[i][j] !== 0) {
                for (var k = 3; k != i; k--) {
                    if (border[k][j] == 0 && noBlockHorization2(j, i, k, border)) {
                        // 移动
                        showMoveAnimation(i, j, k, j);
                        border[k][j] = border[i][j];
                        border[i][j] = 0;
                    } else if (border[k][j] == border[i][j] && noBlockHorization2(j, i, k, border)) {
                        // 向左移动
                        showMoveAnimation(i, j, k, j);
                        border[k][j] += border[i][j];
                        score += border[i][j];
                        border[i][j] = 0;
                        updateScore(score);
                    }
                }
            }
        }
    }
    setTimeout("updateBorderView()", 200);
    return true;
}