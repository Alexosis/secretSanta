let names = [];
let check = true;
let index = 0;
let shuffler = [];

function rememberName() {
    let name = document.getElementsByTagName("input")[0];
    console.log(name);
    if(unique(names, name.value)){
        name.value='already have this..';
        console.log('mistake');
        setTimeout(() => {
            name.value='';
            console.log('value');
        }, 1000)
    }
    else {
        names.push(name.value);
        name.value = '';
    }
    console.log(names);
}

function unique(arr, input) {
    let result = false;

    console.log('Da: ', input);

    if (input==="" || input===undefined) {
        result=true;
    }

    for (let str of arr) {
        console.log('checker: ',str);
        if (str===input) {
            result=true;
        }
    }

    console.log(result);
    return result;
}

function endOfRemember(){
    const finita=names.slice();
    shuffler = shuffle(finita);
    let answerArea=document.getElementsByClassName('answer')[0];
    if(names.length!==0){
    answerArea.innerText=`for 
    ${names[index]}`;}
}

function shuffle(array) {
    let curr=array;
    let currentIndex = curr.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        if(randomIndex===currentIndex){
            randomIndex = Math.floor(Math.random() * currentIndex);
        }
        temporaryValue = curr[currentIndex];
        curr[currentIndex] = curr[randomIndex];
        curr[randomIndex] = temporaryValue;
    }

    return curr;
}

function getName() {
    const button=document.getElementsByClassName('openBtn')[0];
    let answerArea=document.getElementsByClassName('answer')[0];
    if(check){
        answerArea.innerText =  `${names[index]}: 
        ${shuffler[index]}`;
        index++;
        button.innerText=`Take next gift`;
    }
    else{
        answerArea.innerText=`for: 
        ${names[index]}`;
        button.innerText=`Open the box`;
    }
    console.log('index:  ',index);
    if(index===names.length){
        index=0;
    }
    check=!check;
}