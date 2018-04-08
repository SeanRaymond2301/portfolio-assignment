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

    //Broken prevCard function
// function prevCard() {
//     count--;
//     if (count >= 0) {
//         console.log(count);
//         for (let j = 0; j < card.length - 1; j++) {
//             classRem(j, "cardHiddenR");
//             classRem(j, "cardVisible");
//         }
//             if (count == card.length - 3) {
//                 classRem(1, "cardVisible");
//                 classRem(1, "cardHiddenR");
//                 classRem(0, "cardVisible");
//                 classAdd(0, "cardHiddenR");
//                 classAdd(cLoc, "cardVisible");
//                 classRem(cLoc - 1, "cardVisible");
//                 console.log("here");
//             }
//         classAdd(cLoc, "cardHiddenR");
//         if (count > 1) {
//             classAdd(cLoc - 1, "cardVisible");
//             }
//         }
//     if (count <= 0) {
//         count = card.length - 2;
//     }
//
// }


    //Working prevCard function
function prevCard() {
    count--;
    if (count >= 0) {
        //initialize each card off the screen each time the function is called, before the rest of the cards are positioned to prevent overlapping.
        for (let i = 0; i < card.length - 1; i++) {
            classRem(i, "cardVisible");
            classRem(i, "cardHiddenR");
        }
            //If count == 4 (in this case is the value I need it to equal when it loops through backwards) then make these two cards visible
        if (count == 4) {
            classAdd(0, "cardHiddenR");
            classAdd(count, "cardVisible");
        } else { // Else make these cards at these positions visible
            classAdd(count + 1, "cardHiddenR");
            classAdd(count, "cardVisible");
        }
    }
        //If count is going out of bounds or about to go out of bounds (bounds in my array are 0 and card.length - 1 although card.length - 1 is a faux card) then reset it to the cards I want to show.
    if (count <= 0) {
        count = card.length - 2;
    }
}

//Global variable for calculating which card is current
    //Need to update this to work better, as it still allows me to go out of bounds. The lowest number I should be able to recieve is 0 but I have done my math incorrectly.
var cLoc;
function uptdCloc(count) {
    var cLoc = ((count + card.length - 2) % card.length - 2);
}

function classAdd(position, className) {
    card[position].classList.add(className);
}

function classRem(position, className) {
    card[position].classList.remove(className);
}
