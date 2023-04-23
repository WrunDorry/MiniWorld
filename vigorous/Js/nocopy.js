/* 禁止按键操作 */
document.onkeydown = function () {
    if (window.event && window.event.keyCode == 123) { // F12
        event.keyCode = 0;
        return false;
    }
    if (event.ctrlKey) {
        return false;
    }
};
/* 禁用控件菜单 */
document.oncontextmenu = function () {
    return false;
};