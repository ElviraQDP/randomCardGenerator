let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
let suit = ['&spades;', '&clubs;', '&hearts;', '&diams;'];
  




function randomCard( ) {
   
    let suitRandom = suit[Math.floor(Math.random() * suit.length)];
    let numbersRandom = numbers[Math.floor(Math.random() * numbers.length)];

    let suitsTop = document.getElementById("top-suit");
    let suitsBottom = document.getElementById("bottom-suit");

    document.getElementById("top-suit").innerHTML = suitRandom;
    document.getElementById("number").innerHTML = numbersRandom;
    document.getElementById("bottom-suit").innerHTML = suitRandom;

    

    if (suitRandom == '&hearts;' || suitRandom == '&diams;') {
        suitsTop.classList.add("red");
        suitsBottom.classList.add("red");

        
    }
    

}

 
