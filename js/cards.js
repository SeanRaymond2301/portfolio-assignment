//function nextCard(counterRec)  {
//    var cards = document.getElementsByName("card");
//    checkCards(counterRec);
//}
//
//var timeThing;
//
//function checkCards(count) {
//    var cards = document.getElementsByName("card");
//    if (count >= 2) {
//        cards[count - 2].removeAttribute("style");
//    }
//
//    if (count > cards.length - 1) { 
//        count = 0;
//        cards[cards.length - 2].style.overflow = "hidden";
//        cards[cards.length - 2].style.marginLeft = "2000px";
//        cards[cards.length - 2].style.visibility = "hidden";
//        nextCard(count);
//        return;
//    } else {
//        if(count > 0) {
//            cards[cards.length - 2].removeAttribute("style");
//            cards[count - 1].removeAttribute("style");
//            cards[count - 1].style.overflow = "hidden";
//            cards[count - 1].style.marginLeft = "2000px";
//            cards[count - 1].style.visibility = "hidden";
//        }
//        
//        console.log(count);
//        cards[count].removeAttribute("style");
//        cards[count].style.marginLeft = "0px";
//        cards[count].style.visibility = "visible";
//        count++;
//        if(count < 7){
//            timeThing = setTimeout(nextCard, 10000, count);
//            console.log("here");
//        } else {
//            clearTimeout(timeThing);
//            nextCard(count);
//        }
//    }
//}

//Declaring the variables globally because ehh
    //Also yes, this is being rewritten cause the first edition is crap and a hack.
var cards = document.getElementsByName("card"),
    bool = false,
    tOut;
const cardLength = cards.length - 1;

function nextCard(current){
    console.log(current);
        
    if (current > cardLength) {
        console.log("here");
        clearTimeout(tOut);
    }
    
    if(current >= 1) {
        cards[current - 1].setAttribute("class", "cardHidden");
    } 

    if(current >= 2) {
        cards[current - 2].setAttribute("class", "card");
    }

    if(current > cardLength){
        current = 0;
        clearTimeout(tOut);
        nextCard(current);
    } else {
        cards[current].setAttribute("class", "cardShown");
        current++;
        tOut = setTimeout(nextCard, 3000, current);
    }
    if (!bool) {
        bool = false;
    } else {
        cardLeft(current);
        bool = true;
    }
}

function cardLeft(count) {
    cards[count].setAttribute("class", "cardShown");
    count--;
}