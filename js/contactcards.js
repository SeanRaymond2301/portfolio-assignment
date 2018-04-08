var card = document.getElementsByClassName('w50'),
    cardCL = card.classList,
    count = 0;

function initFirstCard() {
    classAdd(0, "cardHiddenR");
    classAdd(card.length - 3, "cardVisible");
    count++;
}

function nextCard() {
    if (count < card.length) {
        console.log(count)
        for (let i = 0; i < card.length - 1; i++) {
            classRem(i, "cardHiddenR");
            classRem(i, "cardVisible");
        }

        if (count == 0) {
            classRem(card.length - 2, "cardVisible");
            classAdd(card.length - 2, "cardHiddenR");
            classAdd(0, "cardVisible");
        }

            classAdd(count, "cardHiddenR");

        if (count >= 1) {
            classAdd(count - 1, "cardVisible");
        }

        if (count >= card.length - 2) {
            classAdd(0, "cardHiddenR");
            classAdd(count, "cardVisible")
            count = 0;
        }
        count++;
    }
}

function prevCard() {
    count--;
    if (count >= 0) {
        console.log(count);
        for (let j = 0; j < card.length - 1; j++) {
            classRem(j, "cardHiddenR");
            classRem(j, "cardVisible");
        }
            if (count == card.length - 3) {
                classRem(1, "cardVisible");
                classRem(1, "cardHiddenR");
                classRem(0, "cardVisible");
                classAdd(0, "cardHiddenR");
                classAdd(count, "cardVisible");
                classRem(count - 1, "cardVisible");
                console.log("here");
            }
        classAdd(count, "cardHiddenR");
        if (count > 1) {
            classAdd(count - 1, "cardVisible");
            }
        }
    if (count <= 0) {
        count = card.length - 2;
    }

}

function classAdd(position, className) {
    card[position].classList.add(className);
}

function classRem(position, className) {
    card[position].classList.remove(className);
}
