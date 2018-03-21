var boolVar = false;

function navBar() {
    iconM = document.getElementById("icon");
    bar = document.getElementById("nav");
    header = document.getElementById("header");
    
    if(!boolVar) {
        iconM.style.marginTop = "75px";
        bar.style.top = "0";
        header.style.marginTop = "-75px";
        header.style.transitionDuration = "1.5s";
        boolVar = true;
    } else {
        iconM.style.marginTop = "0";
        bar.style.top = "-75px";
        header.style.transitionDuration = "1.5s";
        header.style.marginTop = "0";
        boolVar = false;
    }
}