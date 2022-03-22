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



const quizzStart = () => {
    start.style.display ="none"
    question.style.display = 'block'
    
}

const seeAnswer = (event) => {
    let quest1 = event.target.dataset['number']
    if(quest1 == 4) {
        answerTag.textContent = 'correct'
        setTimeout(() => {answerTag.textContent=""}, 500);
    }
    question.style.display = 'none'
    setTimeout(() => {question1.style.display = 'block'}, 700);
    
}


const seeAnswer1 = (event) => {
    let quest2 = event.target.dataset['number']
    if(quest2 == 3) {
        answerTag.textContent = 'correct'
        setTimeout(() => {answerTag.textContent=""}, 500);
    }
    question1.style.display = 'none'
    question2.style.display = 'block'
    
}


const seeAnswer2 = (event) => {
    let quest3 = event.target.dataset['number']
    if(quest3 == 1) {
        answerTag.textContent = 'correct'
        setTimeout(() => {answerTag.textContent=""}, 500);
    }
    question2.style.display = 'none'
    question3.style.display = 'block'
    
}


const seeAnswer3 = (event) => {
    let quest4 = event.target.dataset['number']
    if(quest4 == 4) {
        answerTag.textContent = 'correct'
        setTimeout(() => {answerTag.textContent=""}, 500);
    }
    question3.style.display = 'none'
    allDone.style.display = 'block'
}






box.addEventListener('click', seeAnswer)
box1.addEventListener('click', seeAnswer1)
box2.addEventListener('click', seeAnswer2)
box3.addEventListener('click', seeAnswer3)
startQuiz.addEventListener('click', quizzStart)