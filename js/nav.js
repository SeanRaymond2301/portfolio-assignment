var boolVar = false;

function navBar() {
    iconM = document.getElementById("icon");
    bar = document.getElementById("nav");
    header = document.getElementById("header");

    if(!boolVar) {
        iconM.style.top = "75px";
        bar.style.top = "0";
        boolVar = true;
    } else {
        iconM.style.top = "0";
        bar.style.top = "-75px";
        boolVar = false;
    }
}
