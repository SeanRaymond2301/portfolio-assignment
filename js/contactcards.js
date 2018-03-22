var card = document.getElementsByClassName('w50'),
    cardCL = card.classList,
    count = 1;

function counter(n) {
    count = count + n;
}

function nextCard() {

    if (count < card.length - 1) {
        for (let i = 0; i < card.length - 1; i++) {
            card[i].classList.remove("cardHiddenR");
            card[i].classList.remove("cardVisible");
            card[i].classList.remove("transition");
        }

        if (count == 0) {
            card[card.length - 2].classList.add("transition");
            card[card.length - 2].classList.add("cardHiddenR");
        }

        if (count >= 0) {
            card[count].classList.add("cardVisible");
            card[count].classList.add("transition");
        }

        if (count >= 1 && count < card.length - 1) {
            card[count - 1].classList.add("transition");
            card[count - 1].classList.add("cardHiddenR");
        }
        counter(1);
        console.log(count);
    }
        if (count == card.length - 1) {
            counter(-card.length + 1);
        }

}

function prevCard() {
    if (count > 1) {
        counter(-1);
        console.log(count);
        if (!(count < 1)) {
            for (let j = 0; j < card.length - 1; j++) {
                card[j].classList.add("cardHiddenR");
                card[j].classList.remove("cardVisible");
                card[j].classList.remove("transition");
            }
        }

        if (count == 0) {
            card[0].classList.add("cardHiddenR");
            card[0].classList.remove("cardVisible");
        }

        if (count > 0) {
            card[count - 1].classList.add("cardVisible");
            card[count - 1].classList.remove("cardHiddenR");
            card[count - 1].classList.add("transition");
        }

        if (count <= card.length - 2) {
            card[count].classList.remove("cardVisible");
            card[count].classList.add("transition");
            card[count].classList.remove("cardHiddenR");
        }
    } if (count <= 1) {
        card[0].classList.add("transition");
        counter(card.length - 1);
    }
}
