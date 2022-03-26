let startQuiz = document.querySelector('button');
let goback = document.querySelector('.goback')
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
let itemInput = document.querySelector("input[type=text]");
let totalScore = document.querySelector('.totalScore');
let questionSection = document.querySelector('.questionSection');
let timeElm = document.getElementById('timer');
let initialInput = document.querySelector('.initialInput')
let submitButton = document.getElementById('submitButton')
// let typedName = document.querySelector('.typedName')
// let scoredSpace = document.querySelector('.scoredSpace')
let element;
let quizzScore = 0;
let setTime;
let y;

goback.addEventListener('click', function(event){
    initialInput.style.display = 'none'
    start.style.display ="block"
})

itemInput.addEventListener('input', function(event){
    element = event.target.value
})

const quizzStart = () => {
    start.style.display ="none"
    question.style.display = 'block'

    timex(60);
    
}

let timex = function(x) {
    if(x === -1) {
        questionSection.style.display ='none'
        allDone.style.display = 'block'
        totalScore.textContent = quizzScore
        return;
    }

    timeElm.innerHTML = x;
    y = x
    setTime = setTimeout(() => {timex(--x)}, 1000)

    return setTime;
 }


function stopFunction() {
    clearInterval(setTime)
}

const seeAnswer = (event) => {
    let quest1 = event.target.dataset['number']
    if(quest1 == 4) {
        quizzScore= quizzScore + 25
        answerTag.textContent = 'correct'
        setTimeout(() => {answerTag.textContent=""}, 300);
    } else {
        answerTag.textContent = 'wrong'
        setTimeout(() => {answerTag.textContent=""}, 300);
        stopFunction()
        y = y-10
        timex(y)
    }
    question.style.display = 'none'
    question1.style.display = 'block'
    
}


const seeAnswer1 = (event) => {
    let quest2 = event.target.dataset['number']
    if(quest2 == 3) {
        quizzScore = quizzScore + 25
        answerTag.textContent = 'correct'
        setTimeout(() => {answerTag.textContent=""}, 300);
    } else {
        answerTag.textContent = 'wrong'
        setTimeout(() => {answerTag.textContent=""}, 300);
        stopFunction()
        y = y-10
        timex(y)
    }
    question1.style.display = 'none'
    question2.style.display = 'block'
    
}


const seeAnswer2 = (event) => {
    let quest3 = event.target.dataset['number']
    if(quest3 == 1) {
        quizzScore = quizzScore + 25
        answerTag.textContent = 'correct'
        setTimeout(() => {answerTag.textContent=""}, 300);
    } else {
        answerTag.textContent = 'wrong'
        setTimeout(() => {answerTag.textContent=""}, 300);
        stopFunction()
        y = y-10
        timex(y)
    }
    question2.style.display = 'none'
    question3.style.display = 'block'
}


const seeAnswer3 = (event) => {
    let quest4 = event.target.dataset['number']
    if(quest4 == 4) {
        quizzScore = quizzScore + 25
        answerTag.textContent = 'correct'
        setTimeout(() => {answerTag.textContent=""}, 300);
    } else {
        answerTag.textContent = 'wrong'
        setTimeout(() => {answerTag.textContent=""}, 300);
        stopFunction()
        y = y-10
        timex(y)
    }
    question3.style.display = 'none';
    allDone.style.display = 'block';
    totalScore.textContent = quizzScore;
    stopFunction()
}

const SubmitbuttonClick = (event) =>{
    event.preventDefault()
    allDone.style.display= "none"
    initialInput.style.display = "block"
    addItem()
}


function addItem () {
    let ol = document.getElementById('dynamic-list')
    let li = document.createElement('li')
    let spanInitial = document.createElement('span')
    let spanScore = document.createElement('span')
    spanInitial.className = 'typedName'
    spanScore.className = 'scoredSpace'
    spanInitial.innerHTML = element
    spanScore.innerHTML = ': ' + quizzScore
    li.appendChild(spanInitial)
    li.appendChild(spanScore)
    ol.appendChild(li)
}




submitButton.addEventListener('click', SubmitbuttonClick)
box.addEventListener('click', seeAnswer)
box1.addEventListener('click', seeAnswer1)
box2.addEventListener('click', seeAnswer2)
box3.addEventListener('click', seeAnswer3)
startQuiz.addEventListener('click', quizzStart)
