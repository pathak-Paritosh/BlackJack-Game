function getRandomNumber(){
    let num=1+Math.floor( Math.random()*13 );
    if(num === 1){
        return 11;
    }
    if(num>10){
        return 10;
    }
    return num;
}
let firstCard,secondCard;
let totalSum=0;
let hasBlackJack=false;
let isAlive=false;
let message="";
let cardArr=[];
let msgEle=document.getElementById("Message");
let sumELe=document.getElementById("sum");
let cardEle=document.getElementById("Card");
function startGame(){
    isAlive=true;
    totalSum=0;
    while(cardArr.length > 0){
        cardArr.pop();
    }
    firstCard=getRandomNumber();
    secondCard=getRandomNumber();
    totalSum=firstCard+secondCard;
    cardArr.push(firstCard);
    cardArr.push(secondCard);
    renderGame();
}
function renderGame(){
    if(totalSum <= 20){
    message="Do you want to draw a new card?";
    }
    else if(totalSum == 21){
        message="Wohoo!, You have got BlackJack!";
        hasBlackJack=true;
    }
    else{
        message="You are out of game!";
        isAlive=false;
    }
    sumELe.textContent="Sum: "+totalSum;
    cardEle.textContent="Cards: ";
    for(let i=0;i<cardArr.length;i++){
        cardEle.textContent+=(cardArr[i]+" ");
    }
    msgEle.textContent=message;
}
function newCard(){
    if(isAlive===true && hasBlackJack===false){
        giveNewCard();
    }
}
function giveNewCard(){
    let newCard=getRandomNumber();
    newCard=parseInt(newCard);
    totalSum+=newCard;
    cardArr.push(newCard);
    renderGame();
}