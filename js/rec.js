var bool = false,
    card1 = document.getElementById("card1"),
    card2 = document.getElementById("card2"),
    top = card1.getBoundingClientRect().top;

card2.style.top = top;

function switchLetter() {
    if (!(bool)) {
        card1.style.marginLeft = "-2560px";
        card2.style.marginLeft = "0";
        bool = true;
    } else {
        card1.style.marginLeft = "0";
        card2.style.marginLeft = "2560px";
        bool = false;
    }
}
