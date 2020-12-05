'use strict'

const calcAverage = (score1, score2, score3) => {
    return (score1 + score2 + score3) / 3;
}

const checkWinner = function (avgDol, avgKoa) {
    if (avgDol >= 2 * avgKoa) {
        return `Dolphin is winner (${avgDol} vs ${avgKoa})`;
    }
    else if (avgKoa >= 2 * avgDol) {
        return `Koala is winner (${avgKoa} vs ${avgDol})`;
    }
    else {
        return `No One Wins..!!!`;
    }
}

let avgDolphins = calcAverage(44, 23, 71);
let avgKoalas = calcAverage(65, 54, 49);
console.log(checkWinner(avgDolphins, avgKoalas));


avgDolphins = calcAverage(85, 54, 41);
avgKoalas = calcAverage(23, 34, 27);
console.log(checkWinner(avgDolphins, avgKoalas));