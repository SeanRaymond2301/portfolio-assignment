function nextCard(counterRec)  {
    var cards = document.getElementsByName("card");
    checkCards(counterRec);
}

var timeThing;

function checkCards(count) {
    var cards = document.getElementsByName("card");
    if (count >= 2) {
        cards[count - 2].removeAttribute("style");
    }

    if (count > cards.length - 1) { 
        count = 0;
        cards[cards.length - 2].style.overflow = "hidden";
        cards[cards.length - 2].style.marginLeft = "2000px";
        cards[cards.length - 2].style.visibility = "hidden";
        nextCard(count);
        return;
    } else {
        if(count > 0) {
            cards[cards.length - 2].removeAttribute("style");
            cards[count - 1].removeAttribute("style");
            cards[count - 1].style.overflow = "hidden";
            cards[count - 1].style.marginLeft = "2000px";
            cards[count - 1].style.visibility = "hidden";
        }
        
        console.log(count);
        cards[count].removeAttribute("style");
        cards[count].style.marginLeft = "0px";
        cards[count].style.visibility = "visible";
        count++;
        if(count < 7){
            timeThing = setTimeout(nextCard, 10000, count);
            console.log("here");
        } else {
            clearTimeout(timeThing);
            nextCard(count);
        }
    }
}