//JS Rewrite

//Removed the last blank card for the new system

//We define an array to hold all of our cards
var cards = document.getElementsByClassName("card"),
    //And a counter to keep track of where we are
    count = 0;


//We put the first two cards on screen
function initFirstCard() {
    //Set the first card to the left position
    classAdd(count, "cardVisible");
    //Set the second card to the right position
    classAdd(count + 1, "cardHiddenR");
}


//Reset all the cards
function resetCards() {
    //Loop through every single card and set it to hidden
    for (i = 0; i < cards.length; i++) {
        //Remove any right side classes which might make it show
        classRemove(i, "cardHiddenR");
        //Remove any left side classes which might make it show
        classRemove(i, "cardVisible");
    }
}

//Shows the previous card
function prevCard() {
    //We start by resetting all of the cards
    resetCards();
    //Then we decrement the count
    count--;
    //And now we check if count is out of bounds
    if (count < 0) {
        //Once again, think about the cards as a list. To loop around from 0, we
        //go back to the top of the list. And that is exactly what this is doing.
        count = cards.length - 1;
    }
    //And now we show all the cards
    setCards();
}

//Show the next card
function nextCard() {
    //We start by resetting all the cards
    resetCards();
    //Then we add to the count
    count++;
    //And now we check if count is out of bounds of the array.
    if (count >= cards.length) {
        //And if it is, we reset the count
        count = 0;
    }
    //And we show the cards in their current state
    setCards();
}

//Displays the current cards depending on the count
function setCards() {
    //We set the current card to the left side of the two cards
    classAdd(count, "cardVisible");
    //And we set the card after that to the right side of the two cards
    classAdd(getNextCount(), "cardHiddenR");
}

//Get the next card count
function getNextCount() {
    //We check if the current count is the top index of the array.
    //If you think about it as a list, once you get to the last row of that list,
    //in order to loop again, you look at the first element of the list. This function
    //does exactly that
    if (count >= cards.length - 1) {
        //Of course, the next element from the bottom of the list is the first,
        //so we return that
        return 0;
    }

    //Otherwise, we just simply return the next card from the count
    return count + 1;
}

//This function is self-explanatory
function classAdd(index, className) {
    console.log(index);
    cards[index].classList.add(className);
}
//Same with this one
function classRemove(index, className) {
    cards[index].classList.remove(className);
}

// var card = document.getElementsByClassName('w50'),
//     cardCL = card.classList,
//     count = 0;
//
// function initFirstCard() {
//     classAdd(0, "cardHiddenR");
//     classAdd(card.length - 3, "cardVisible");
//     count++;
// }
//
// function nextCard() {
//     if (count < card.length) {
//         for (let i = 0; i < card.length - 1; i++) {
//             classRem(i, "cardHiddenR");
//             classRem(i, "cardVisible");
//         }
//
//         if (count == 0) {
//             classRem(card.length - 2, "cardVisible");
//             classAdd(card.length - 2, "cardHiddenR");
//             classAdd(0, "cardVisible");
//         }
//
//             classAdd(count, "cardHiddenR");
//
//         if (count >= 1) {
//             classAdd(count - 1, "cardVisible");
//         }
//
//         if (count >= card.length - 2) {
//             classAdd(0, "cardHiddenR");
//             classAdd(count, "cardVisible")
//             count = 0;
//         }
//         count++;
//     }
// }
//
//     //Broken prevCard function
// // function prevCard() {
// //     count--;
// //     if (count >= 0) {
// //         console.log(count);
// //         for (let j = 0; j < card.length - 1; j++) {
// //             classRem(j, "cardHiddenR");
// //             classRem(j, "cardVisible");
// //         }
// //             if (count == card.length - 3) {
// //                 classRem(1, "cardVisible");
// //                 classRem(1, "cardHiddenR");
// //                 classRem(0, "cardVisible");
// //                 classAdd(0, "cardHiddenR");
// //                 classAdd(cLoc, "cardVisible");
// //                 classRem(cLoc - 1, "cardVisible");
// //                 console.log("here");
// //             }
// //         classAdd(cLoc, "cardHiddenR");
// //         if (count > 1) {
// //             classAdd(cLoc - 1, "cardVisible");
// //             }
// //         }
// //     if (count <= 0) {
// //         count = card.length - 2;
// //     }
// //
// // }
//
//
//     //Working prevCard function
// function prevCard() {
//     count--;
//     if (count >= 0) {
//         //initialize each card off the screen each time the function is called, before the rest of the cards are positioned to prevent overlapping.
//         for (let i = 0; i < card.length - 1; i++) {
//             classRem(i, "cardVisible");
//             classRem(i, "cardHiddenR");
//         }
//             //If count == 4 (in this case is the value I need it to equal when it loops through backwards) then make these two cards visible
//         if (count == 4) {
//             classAdd(0, "cardHiddenR");
//             classAdd(count, "cardVisible");
//         } else { // Else make these cards at these positions visible
//             classAdd(count + 1, "cardHiddenR");
//             classAdd(count, "cardVisible");
//         }
//     }
//         //If count is going out of bounds or about to go out of bounds (bounds in my array are 0 and card.length - 1 although card.length - 1 is a faux card) then reset it to the cards I want to show.
//     if (count <= 0) {
//         count = card.length - 2;
//     }
// }
//
// //Global variable for calculating which card is current
//     //Need to update this to work better, as it still allows me to go out of bounds. The lowest number I should be able to recieve is 0 but I have done my math incorrectly.
// var cLoc;
// function uptdCloc(count) {
//     var cLoc = ((count + card.length - 2) % card.length - 2);
// }
//
// function classAdd(position, className) {
//     card[position].classList.add(className);
// }
//
// function classRem(position, className) {
//     card[position].classList.remove(className);
// }
