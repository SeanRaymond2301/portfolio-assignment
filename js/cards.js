//Declaring the variables globally because ehh
    //Also yes, this is being rewritten cause the first edition is crap and a hack.
var cards = document.getElementsByName("card"),
    tOut;
const cardLength = cards.length - 1;

function nextCard(current){
    if(current > cardLength) {
        clearTimeout(tOut);
    }

    if(current >= 1) {
        cards[current - 1].setAttribute("class", "cardHidden flexPC");
    }

    if(current >= 2) {
        cards[current - 2].setAttribute("class", " flexPC card");
        cards[5].setAttribute("class", "card");
    }

    if(current > cardLength){
        current = 0;
        cards[5].setAttribute("class", "cardHidden flexPC");
        clearTimeout(tOut);
        nextCard(current);
    } else {
        cards[current].setAttribute("class", "cardShown flexPC");
        current--;
        tOut = setTimeout(nextCard, 10000, current);
    }
}
