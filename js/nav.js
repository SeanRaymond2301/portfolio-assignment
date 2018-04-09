var boolVar = false;

function navBar() {
    iconM = document.getElementById("icon");
    bar = document.getElementById("nav");
    header = document.getElementById("header");

    if(!boolVar) {
        iconM.classList.add("down");
//        iconM.style.top = "75px";
        bar.classList.add("barDown");
        //bar.style.top = "0";
        boolVar = true;
    } else {
        iconM.classList.add("up");
//        iconM.style.top = "0";
        bar.classList.add("barUp");
//        bar.style.top = "-75px";
        boolVar = false;
    }
}
