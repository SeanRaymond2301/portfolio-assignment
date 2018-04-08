var cards = document.getElementsByClassName("card"),
    count = 0;
function initFirstCard() {
    classAdd(count, "cardVisible");
    classAdd(count + 1, "cardHiddenR");
}
function resetCards() {
    for (i = 0; i < cards.length; i++) {
        classRemove(i, "cardHiddenR");
        classRemove(i, "cardVisible");
    }
}
function prevCard() {
    resetCards();
    count--;
    if (count < 0) {
        count = cards.length - 1;
    }
    setCards();
}
function nextCard() {
    resetCards();
    count++;
    if (count >= cards.length) {
        count = 0;
    }
    setCards();
}
function setCards() {
    classAdd(count, "cardVisible");
    classAdd(getNextCount(), "cardHiddenR");
}
function getNextCount() {
    if (count >= cards.length - 1) {
        return 0;
    }
    return count + 1;
}
function classAdd(index, className) {
    cards[index].classList.add(className);
}
function classRemove(index, className) {
    cards[index].classList.remove(className);
}
