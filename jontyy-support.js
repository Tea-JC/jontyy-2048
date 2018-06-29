function getPostTop(i, j) {
    return 20 + 120 * i;
}

function getPostLeft(i, j) {
    return 20 + 120 * j;
}


function getNumberBackgroundColor(number) {
    switch (number) {
        case 2:
            return "#eee4da";
            break;
        case 4:
            return "#ede0c8";
            break;
        case 8:
            return "#f2b179";
            break;
        case 16:
            return "#f59563";
            break;
        case 32:
            return "#f67c5f";
            break;
        case 64:
            return "#f65e3b";
            break;
        case 128:
            return "#edcf72";
            break;
        case 256:
            return "#edcc61";
            break;
        case 512:
            return "#9c0";
            break;
        case 1024:
            return "#33b5e5";
            break;
        case 2048:
            return "#09c";
            break;
        case 4096:
            return "#a6c";
            break;
        case 8192:
            return "#93c";
            break;
    }
}

function getNumberColor(number) {
    if (number <= 4) {
        return "#776e5b";
    }
    return "White";
}

function canMoveLeft(border) {
    for (var i = 0; i != 4; i++) {
        for (var j = 1; j != 4; j++) {
            if (border[i][j] != 0) {
                if (border[i][j - 1] == 0 || border[i][j - 1] == border[i][j]) {
                    return true;
                }
            }
        }
    }
    return false;
}

function canMoveRight(border) {
    for (var i = 0; i != 4; i++) {
        for (var j = 2; j != -1; j--) {
            if (border[i][j] != 0) {
                if (border[i][j + 1] == 0 || border[i][j + 1] == border[i][j]) {
                    return true;
                }
            }
        }
    }
    return false;
}

function canMoveUp(border) {
    for (var j = 0; j != 4; j++) {
        for (var i = 1; i != 4; i++) {
            if (border[i][j] != 0) {
                if (border[i - 1][j] == 0 || border[i - 1][j] == border[i][j]) {
                    return true;
                }
            }
        }
    }
    return false;
}

function canMoveDown(border) {
    for (var j = 0; j != 4; j++) {
        for (var i = 2; i != -1; i--) {
            if (border[i][j] != 0) {
                if (border[i + 1][j] == 0 || border[i + 1][j] == border[i][j]) {
                    return true;
                }
            }
        }
    }
    return false;
}

function noBlockHorization(row, col1, col2, border) {
    for (var i = col1 + 1; i != col2; i++) {
        if (border[row][i] != 0) {
            return false;
        }
    }
    return true;
}

function noBlockHorization2(col, col1, col2, border) {
    for (var i = col1 + 1; i != col2; i++) {
        if (border[i][col] != 0) {
            return false;
        }
    }
    return true;
}

function isGameOver() {
    if (!canMoveLeft(border) && (!canMoveRight(border)) && !canMoveUp(border) && !canMoveDown(border)) {
        alert("gameOver" + " and you score is " + score);
        return true;
    }
}

function updateScore(score) {
    $("#score").html(score);
}

function pushNew(){
        var newUser = {"score":score,"name":username};
        grade = JSON.parse(storge.getItem('list')) || [];
        grade.unshift(newUser);
        grade.sort(sortId);
        if (grade.length > 10) {
            grade.shift();
        } 
        
        storge.removeItem("list");
        storge.setItem("list",  JSON.stringify(grade));
}
    

function sortId(a, b) {
    return b.score - a.score
}