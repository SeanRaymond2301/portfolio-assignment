var boolVar = false;

function navBar() {
    iconM = document.getElementById("navIcon");
    bar = document.getElementById("nav");
    header = document.getElementById("header");

    if(!boolVar) {
        iconM.style.transitionDuration = "1.5s";
        bar.style.transitionDuration = "1.5s";
        iconM.classList.remove("down");
        iconM.classList.add("up");
        bar.classList.add("barUp");
        bar.classList.remove("barDown");
        boolVar = true;
    } else {
        iconM.classList.add("down");
        iconM.classList.remove("up");
        bar.classList.add("barDown");
        bar.classList.remove("barUp");
        boolVar = false;
    }
}
