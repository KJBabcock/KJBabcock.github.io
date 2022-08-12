const startButton = document.querySelector('.start-button');
const buySnackButton = document.querySelector('.buySnack')
const giveSnackButton = document.querySelector('.giveSnack')
const eatButton = document.querySelector('.eat')
const yardButton = document.querySelector('.yard')
const workButton = document.querySelector('.work')
const workOutButton = document.querySelector('.workOut')
const studyButton = document.querySelector('.study')
const healthHp = document.querySelector('.health-hp')
const fitnessHp = document.querySelector('.fitness-hp')
const intelligenceHp = document.querySelector('.intelligence-hp')
const moodHp = document.querySelector('.mood-hp')
const reputationHp = document.querySelector('.reputation-hp')
const cashHp = document.querySelector('.cash-hp')
const snacksHp = document.querySelector('.snacks-hp')
const escapeButton = document.querySelector('.attemptEscape')
document.querySelector('.game').style.display = 'none';
document.querySelector('.attempt-escape').style.display = 'none';
document.querySelector('.end-game-won').style.display = 'none';
document.querySelector('.end-game-lost').style.display = 'none';
document.querySelector('.debt').style.display = 'none';
document.querySelector('.health0').style.display = 'none';
document.querySelector('.fitness0').style.display = 'none';
document.querySelector('.intelligence0').style.display = 'none';
document.querySelector('.mood0').style.display = 'none';
document.querySelector('.reputation0').style.display = 'none';

let health = 10;
let fitness = 10;
let intelligence = 10;
let mood = 10;
let reputation = 10;
let cash = 0;
let snacks = 0;
let clicks = 0;
let setName = document.querySelector('.name')
let setName2 = document.querySelector('.name2')
let setName3 = document.querySelector('.name3')
let setName4 = document.querySelector('.name4')
let setName5 = document.querySelector('.name5')
let setName6 = document.querySelector('.name6')
let setName7 = document.querySelector('.name7')
let setName8 = document.querySelector('.name8')
let setName9 = document.querySelector('.name9')
let input = document.querySelector('input')
let myName
let startTimer

function startGame(e) {
    e.preventDefault()
    myName = input.value
    setName.innerHTML = myName
    document.querySelector('.menu-screen').style.display = 'none';
    document.querySelector('.game').style.display = 'inline';
    startTimer = setInterval(timer, 5000);
}
function escape() {
    clicks += 1;
    if (clicks === 15) {
        document.querySelector('.attempt-escape').style.display = 'block';
    }
}
function end() {
    if (health >= 20 && fitness >= 20 && intelligence >= 20 && reputation >= 20) {
        setName2.innerHTML = myName
        document.querySelector('.game').style.display = 'none';
        document.querySelector('.end-game-won').style.display = 'inline';
    } else {
        setName5.innerHTML = myName
        document.querySelector('.game').style.display = 'none';
        document.querySelector('.end-game-lost').style.display = 'inline';
    }
}
function timer() {
    if (cash < -9 || snacks < -9) {
        setName4.innerHTML = myName
        document.querySelector('.game').style.display = 'none';
        document.querySelector('.debt').style.display = 'inline';
        clearInterval(startTimer);
    } else if (health < 2) {
        setName3.innerHTML = myName
        document.querySelector('.game').style.display = 'none';
        document.querySelector('.health0').style.display = 'inline';
        clearInterval(startTimer);
    } else if (fitness < 2) {
        setName6.innerHTML = myName
        document.querySelector('.game').style.display = 'none';
        document.querySelector('.fitness0').style.display = 'inline';
        clearInterval(startTimer);
    } else if (intelligence < 2) {
        setName7.innerHTML = myName
        document.querySelector('.game').style.display = 'none';
        document.querySelector('.intelligence0').style.display = 'inline';
        clearInterval(startTimer);
    } else if (mood < 2) {
        setName8.innerHTML = myName
        document.querySelector('.game').style.display = 'none';
        document.querySelector('.mood0').style.display = 'inline';
        clearInterval(startTimer);
    } else if (reputation < 2) {
        setName9.innerHTML = myName
        document.querySelector('.game').style.display = 'none';
        document.querySelector('.reputation0').style.display = 'inline';
        clearInterval(startTimer);
    }
    health -= 1
    healthHp.innerHTML = `${health}`
    fitness -= 1
    fitnessHp.innerHTML = `${fitness}`
    intelligence -= 1
    intelligenceHp.innerHTML = `${intelligence}`
    mood -= 1
    moodHp.innerHTML = `${mood}`
    reputation -= 1
    reputationHp.innerHTML = `${reputation}`
    cash -= 1
    cashHp.innerHTML = `${cash}`
    snacks -= 1
    snacksHp.innerHTML = `${snacks}`
}
function workOut() {
    health += 1
    healthHp.innerHTML = `${health}`
    fitness += 2
    fitnessHp.innerHTML = `${fitness}`
    intelligence -= 2
    intelligenceHp.innerHTML = `${intelligence}`
    mood += 1
    moodHp.innerHTML = `${mood}`
    reputation += 1
    reputationHp.innerHTML = `${reputation}`
}
function study() {
    fitness -= 1
    fitnessHp.innerHTML = `${fitness}`
    intelligence += 3
    intelligenceHp.innerHTML = `${intelligence}`
    mood -= 1
    moodHp.innerHTML = `${mood}`
    reputation -= 1
    reputationHp.innerHTML = `${reputation}`
}
function work() {
    health -= 1
    healthHp.innerHTML = `${health}`
    mood -= 1
    moodHp.innerHTML = `${mood}`
    reputation -= 1
    reputationHp.innerHTML = `${reputation}`
    cash += 4
    cashHp.innerHTML = `${cash}`
}
function yard() {
    health -= 1
    healthHp.innerHTML = `${health}`
    fitness += 1
    fitnessHp.innerHTML = `${fitness}`
    intelligence -= 1
    intelligenceHp.innerHTML = `${intelligence}`
    mood += 2
    moodHp.innerHTML = `${mood}`
}
function buySnack() {
    cash -= 2
    cashHp.innerHTML = `${cash}`
    snacks += 1
    snacksHp.innerHTML = `${snacks}`
}
function giveSnack() {
    intelligence += 2
    intelligenceHp.innerHTML = `${intelligence}`
    mood += 1
    moodHp.innerHTML = `${mood}`
    reputation += 3
    reputationHp.innerHTML = `${reputation}`
    snacks -= 1
    snacksHp.innerHTML = `${snacks}`
}
function eat() {
    health += 2
    healthHp.innerHTML = `${health}`
    mood += 1
    moodHp.innerHTML = `${mood}`
    reputation += 1
    reputationHp.innerHTML = `${reputation}`
    cash -= 1
    cashHp.innerHTML = `${cash}`
}

startButton.addEventListener('click', startGame);
buySnackButton.addEventListener('click', buySnack);
giveSnackButton.addEventListener('click', giveSnack);
eatButton.addEventListener('click', eat);
yardButton.addEventListener('click', yard);
workButton.addEventListener('click', work);
workOutButton.addEventListener('click', workOut);
studyButton.addEventListener('click',  study);
escapeButton.addEventListener('click', end)