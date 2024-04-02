// Code your solutions in this file

function writeCards(name, gift) {
    const cards = [];
    for (let i = 0; i < name.length; i++) {
        cards[i] = `Thank you, ${name[i]}, for the wonderful ${gift} gift!`;
    }
    
    console.log(cards);

    return cards;
}

function countDown(number) {
    for (let i = number; i >= 0; i--) {
        console.log(i);
    }
}