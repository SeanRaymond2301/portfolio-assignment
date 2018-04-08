function mSetWidth(next, pos) {
    var curWidth = 10,
        bars = document.getElementsByClassName("myProgress"),
        int = setInterval(setWidth, 10);
    function setWidth() {
        if (curWidth < next) {
            bars[pos].style.width = curWidth + "%";
            curWidth++;
        } else {
            clearInterval(int);
            return false;
        }
    }
}
mSetWidth(95, 0);
mSetWidth(90, 1);
mSetWidth(80, 2);
