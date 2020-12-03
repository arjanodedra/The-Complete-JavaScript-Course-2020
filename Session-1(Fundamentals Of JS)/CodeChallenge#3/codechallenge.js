let dolphinAverage = (110 + 104 + 90) / 3;
let koalasAverage = (110 + 104 + 90) / 3;

console.log(`Dolphin Average Score${dolphinAverage}
Koalas Average Score ${koalasAverage}`);

if (dolphinAverage >= 100 || koalasAverage >= 100) {
    if (dolphinAverage > koalasAverage) {
        console.log(`Dolphin Team Is Winner With Average Score ${dolphinAverage} Against  Koalas's Average Score ${koalasAverage}`);
    }
    else if (koalasAverage > dolphinAverage) {
        console.log(`Koalas Team Is Winner With Average Score ${koalasAverage} Against Dolphin's Average Score ${dolphinAverage}`);
    }
    else if (dolphinAverage === koalasAverage) {
        console.log(`Ohh...Its a Tie`);
    }
}
else {
    console.log(`Minimum Criteria Not Fulfilled..No Clear Winner Here ...!!!`);
}