function nextCard(counterRec)  {
    var cards = document.getElementsByName("card"),
        card = cards[counterRec - 1];
    setTimeout(checkCards(counterRec), 3000);
    if(counterRec == 6) {
            card.removeAttribute("style");
    }
}

function checkCards(count) {
    var cards = document.getElementsByName("card"),
        card = cards[count - 1];
    if (count >= 2) {
            cards[count - 2].removeAttribute("style");
    }
    if (count <= 3) {
        cards[5].style.overflow = "hidden";
        cards[5].style.visibility = "hidden;"
        cards[5].style.left = "2000px";
    } 
    if (count == 4){
        cards[5].removeAttribute("style");
    }
    if (count > cards.length - 1) { 
        count = 0;
        nextCard(count);
        return;
    } else {
        if(count > 0) {
            card.removeAttribute("style");
            card.style.overflow = "hidden";
            card.style.left = "2000px";
            card.style.visibility = "hidden;"
        }
        console.log(count);
        cards[count].removeAttribute("style");
        cards[count].style.left = "0";
        cards[count].style.visibility = "visible";
        count++;
        setTimeout(nextCard, 3000, count);
    }
}