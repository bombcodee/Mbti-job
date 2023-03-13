// 파일 가져오기
import {questions}from './data.js'

const progressValueEl= document.querySelector('.progress .value')
const numberEl=document.querySelector('.number')
const questionEl=document.querySelector('.question')
const choice1El=document.querySelector('.choice1')
const choice2El=document.querySelector('.choice2')

let currentNumber = 0 //현재 넘버
let mbti = '' // mbti 요소

//각각의 질문을 출력할 수 있게 해주는 함수
function renderQuestion() {
  const question = questions[currentNumber]
  numberEl.innerHTML = question.number
  questionEl.innerHTML = question.question
  choice1El.innerHTML = question.choices[0].text
  choice2El.innerHTML = question.choices[1].text
  
  progressValueEl.style.width = (currentNumber+1) * 10 + '%'
  if(currentNumber === 9)
  {
    progressValueEl.style.backgroundColor = '#32BFA1';
  }
  
}

function nextQuestion(choiceNumber) {
  if(currentNumber === questions.length-1)
  {
    //questionEl.innerHTML = '끝!!'
   // setTimeout(function(){showResultPage()},3000)
    showResultPage()
    return
  }
  const question = questions[currentNumber]
  mbti = mbti + question.choices[choiceNumber].value
  // mbti = 하나씩 더해지게끔
  currentNumber = currentNumber + 1
  
  renderQuestion()
}

function showResultPage(){
  // 주소로 이동, 그 주소로 정보를 담아서 페이지 이동 = 쿼리스트링
  location.href = '../results.html?mbti=' + mbti
}

choice1El.addEventListener('click',function(){
  nextQuestion(0)
})

choice2El.addEventListener('click',function(){
  nextQuestion(1)
})

renderQuestion()