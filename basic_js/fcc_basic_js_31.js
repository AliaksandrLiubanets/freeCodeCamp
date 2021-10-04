var count = 0;

function cc(card) {
    const regex = /[JQKA]/
    if (card === 10 || regex.test(card)) {
        count--
    } else if (card > 1 && card < 7) {
        count++
    }

    if (count <= 0) {
        return count + ' Hold'
    } else {
        return count + ' Bet'
    }

}

cc(2); cc(3); cc(7); cc('K'); cc('A');