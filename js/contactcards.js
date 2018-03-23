var card = document.getElementsByClassName('w50'),
    cardCL = card.classList,
    count = 1;

function counter(n) {
    count = count + n;
    if (count == 0) {
        count = card.length - 1;
    } else if (count == card.length - 1) {
        count = 0;
    }
}

function nextCard() {



    if (count < card.length) {

        for (let i = 0; i < card.length - 1; i++) {
            card[i].classList.remove("cardHiddenR");
            card[i].classList.remove("cardVisible");
            card[i].classList.add("transition");
        }

        if (count >= 2) {
            card[count - 2].classList.remove("transition");
        }

        if (count == 0) {
            card[card.length - 2].classList.add("cardHiddenR");
            card[0].classList.add("cardVisible");
        }

        if (count >= 0) {
            card[count].classList.add("cardVisible");
        }

        if (count >= 1) {
            card[count - 1].classList.add("cardHiddenR");
        }
        console.log(count);

        if (count > card.length) {
            card[count - 1].classList.add("cardHiddenR");
            card[count - 2].classList.remove("cardHiddenR");
            counter(-card.length - 1);
        }
        counter(1);
    }

}

function prevCard() {
    if (count > 0) {

        counter(-1);
        console.log(count);
        if (count > 1) {
            for (let j = 0; j < card.length - 1; j++) {
                card[j].classList.add("cardHiddenR");
                card[j].classList.remove("cardVisible");
                card[j].classList.add("transition");
            }
        }
        card[0].classList.remove("cardHiddenR");

        if (count == 0) {
            card[0].classList.add("cardHiddenR");
        }

        if (count > 0) {
            card[count - 1].classList.add("cardVisible");
            card[count - 1].classList.remove("cardHiddenR");
        }

        if (count <= card.length - 2) {
            card[count].classList.remove("cardVisible");
            card[count].classList.remove("cardHiddenR");
        }
    }

    if (count == 0) {
        card[0].classList.add("transition");
        counter(card.length);
    }
}
