var card = document.getElementsByClassName('w50'),
    cardCL = card.classList,
    count = 1;


function counter(n) {
    count = count + n;
}


function nextCard() {

    if (!(count > card.length - 2)) {
        for (let i = 0; i < card.length - 1; i++) {
            card[i].classList.remove("cardHiddenR");
        }
        
        if (count >= 0) {
            card[count].classList.add("cardVisible");
        } else if (count == card.length + 1) {
            return;
        }

        if (count >= 1 && count < card.length - 1) {
            card[count - 1].classList.add("cardHiddenR");
            card[count - 1].classList.remove("cardVisible");
        }
        counter(1);
        console.log(count);
    }
}

function prevCard() {
    if (count > 1) {
        counter(-1);
        console.log(count);
        if (!(count < 1)) {
            for (let j = 0; j < card.length - 1; j++) {
                card[j].classList.add("cardHiddenR");
            }
        }
        if (count > 0) {
            card[count - 1].classList.add("cardVisible");
            card[count - 1].classList.remove("cardHiddenR");
        }

        if (count <= card.length - 2) {
            card[count].classList.remove("cardVisible");
            card[count].classList.remove("cardHiddenR");
        }
    } else if (count >= 0) {
        return;
    }
}
