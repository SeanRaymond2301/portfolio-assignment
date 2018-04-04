var card = document.getElementsByClassName('w50'),
    cardCL = card.classList,
    count = 0;

function initFirstCard() {
    classAdd(0, "cardHiddenR");
    classAdd(1, "cardVisible");
    count++;
}

function nextCard() {

    if (count < card.length) {
        count++;
        for (let i = 0; i < card.length - 1; i++) {
            classRem(i, "cardHiddenR");
            classRem(i, "cardVisible");
        }

        if (count == 0) {
            classRem(card.length - 2, "cardVisible");
            classAdd(card.length - 2, "cardHiddenR");
            classAdd(0, "cardVisible");
        }

        if (count >= 0) {
            classAdd(count, "cardVisible");
        }

        if (count >= 1) {
            classAdd(count - 1, "cardHiddenR");
        }

        if (count == 6) {
            classAdd(0, "cardVisible");
            classAdd(count, "cardHiddenR")
            count = 0;
        }
    }

}

function prevCard() {
    if (count >= 0) {
        count--;
        for (let j = 0; j < card.length - 1; j++) {
            classRem(j, "cardHiddenR");
            classRem(j, "cardVisible");
            console.log(j);
        }
        classAdd(count + 1, "cardHiddenR");
        classAdd(count, "cardVisible");
    }
    if (count == 0) {
        classAdd(0, "cardVisible");
        count = card.length - 2;
    }
}

function classAdd(position, className) {
    card[position].classList.add(className);
}

function classRem(position, className) {
    card[position].classList.remove(className);
}
