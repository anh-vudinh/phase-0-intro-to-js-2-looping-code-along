// Code your solutions in this file

function writeCards(name, event){
    const messageArray = [];
    for (let i = 0; i < name.length; i++){
        messageArray.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`);
    }
    return messageArray;
}

function countDown(){
    for (let i = 10; i >= 0; i--){
        console.log(i);
    }
}

function countDownWhile(){
    let countDownNumber = 10;
    while (countDownNumber >= 0){
        console.log(countDownNumber);
        countDownNumber--;
    }
}