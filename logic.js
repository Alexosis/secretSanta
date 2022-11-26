let names = [];
let check = true;
let index = 0;
let shuffler = [];

function getNames() {
    let modal = document.getElementById("listModal");
    let listNames = document.getElementById("listNames").value.split(/\n/);
    modal.style.display = "none";
    for (let nm of listNames) {
        if(nm !=='')
        names.push(nm)
    }
    console.log(names);
    endOfRemember()
}

function endOfRemember() {
    const finita = names.slice();
    shuffler = shuffle(finita);
    console.log(shuffler[1]);
    let answerArea = document.getElementsByClassName('answer')[0];
    if (names.length !== 0) {
        answerArea.innerText = `for 
    ${names[index]}`;
    }
}

function shuffle(array) {
    let curr = array;
    let currentIndex = curr.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        if (randomIndex === currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
        }
        temporaryValue = curr[currentIndex];
        curr[currentIndex] = curr[randomIndex];
        curr[randomIndex] = temporaryValue;
    }

    return curr;
}

function getName() {
    const button = document.getElementsByClassName('openBtn')[0];
    let answerArea = document.getElementsByClassName('answer')[0];
    if (check) {
        answerArea.innerText = `${names[index]}: 
        ${shuffler[index]}`;
        index++;
        button.innerText = `Take next gift`;
    } else {
        answerArea.innerText = `for: 
        ${names[index]}`;
        button.innerText = `Open the box`;
    }
    console.log('index:  ', index);
    if (index === names.length) {
        index = 0;
    }
    check = !check;
}