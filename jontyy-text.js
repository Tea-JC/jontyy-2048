function enSure(str) {
    // 去除首尾空格
    mytrim(str);
    // 去除全部数字
    myconfirm();
    // 去除重复
    myRepeat();
}

function mytrim(str) {
    if (str) {
        return str.replace(/(^\s*)|(\s*$)/g, "").length == 0 ? (alert("不允许全部空格"),newGame()) : str.replace(/(^\s*)|(\s*$)/g, "");
    } else {
        return (alert("你没有输入内容"),newGame())
    }
}
 function myRepeat(arr, str) {
    for(var i in arr) {
        if (arr[i].name == str) {
            return false;
        }
    }
    return true;
 }