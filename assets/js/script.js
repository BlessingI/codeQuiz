let startQuiz = document.querySelector('button');
let start = document.querySelector('.start');
let question = document.querySelector('.question');
let question1 = document.querySelector('.question2');
let question2 = document.querySelector('.question3');
let question3 = document.querySelector('.question4');
let box = document.querySelector('.box');
let box1 = document.querySelector('.box1');
let box2 = document.querySelector('.box2');
let box3 = document.querySelector('.box3');
let answerTag = document.querySelector('.answerTag');
let allDone = document.querySelector('.allDone');
let button = document.querySelector('.btn');
const itemInput = document.querySelector("input[type=text]");
let totalScore = document.querySelector('.totalScore')
let quizzScore = 0



const quizzStart = () => {
    start.style.display ="none"
    question.style.display = 'block'
    
}

const seeAnswer = (event) => {
    let quest1 = event.target.dataset['number']
    if(quest1 == 4) {
        quizzScore= quizzScore + 25
        console.log(quizzScore)
        answerTag.textContent = 'correct'
        setTimeout(() => {answerTag.textContent=""}, 300);
    } else {
        answerTag.textContent = 'wrong'
        setTimeout(() => {answerTag.textContent=""}, 300);
    }
    question.style.display = 'none'
    question1.style.display = 'block'
    
}



const seeAnswer1 = (event) => {
    let quest2 = event.target.dataset['number']
    if(quest2 == 3) {
        quizzScore = quizzScore + 25
        console.log(quizzScore)
        answerTag.textContent = 'correct'
        setTimeout(() => {answerTag.textContent=""}, 300);
    } else {
        answerTag.textContent = 'wrong'
        setTimeout(() => {answerTag.textContent=""}, 300);
    }
    question1.style.display = 'none'
    question2.style.display = 'block'
    
}


const seeAnswer2 = (event) => {
    let quest3 = event.target.dataset['number']
    if(quest3 == 1) {
        quizzScore = quizzScore + 25
        console.log(quizzScore)
        answerTag.textContent = 'correct'
        setTimeout(() => {answerTag.textContent=""}, 300);
    } else {
        answerTag.textContent = 'wrong'
        setTimeout(() => {answerTag.textContent=""}, 300);
    }
    question2.style.display = 'none'
    question3.style.display = 'block'
}


const seeAnswer3 = (event) => {
    let quest4 = event.target.dataset['number']
    if(quest4 == 4) {
        quizzScore = quizzScore + 25
        console.log(quizzScore)
        answerTag.textContent = 'correct'
        setTimeout(() => {answerTag.textContent=""}, 300);
    } else {
        answerTag.textContent = 'wrong'
        setTimeout(() => {answerTag.textContent=""}, 300);
    }
    question3.style.display = 'none'
    allDone.style.display = 'block'
    totalScore.textContent = quizzScore
}

button.addEventListener('click', buttonClick)

function buttonClick(e) {
    e.preventDefault()
    console.log(itemInput.value)
}

box.addEventListener('click', seeAnswer)
box1.addEventListener('click', seeAnswer1)
box2.addEventListener('click', seeAnswer2)
box3.addEventListener('click', seeAnswer3)
startQuiz.addEventListener('click', quizzStart)