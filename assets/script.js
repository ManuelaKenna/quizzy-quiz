//Hide start div
var startEl=document.querySelector(".start")
var startBtn=document.querySelector(".start-btn")
var qi=0


//what the start button is doing
startBtn.addEventListener("click",function(){
    startEl.setAttribute("class", "hide")
    quizEl.removeAttribute("class","hide")
    displayQuestion()
})

//add a timer
var count = 15;
var interval = setInterval(function(){
  document.getElementById('count').innerHTML=count;
  count--;
  if (count === 0){
    clearInterval(interval);
    document.getElementById('count').innerHTML='Done';
    alert("You're out of time!");
  }
}, 1000);

//change to real questions
var questions=[
    {text:"Commonly used data types do not include:",choices:["a. booleans","b. strings","c. alerts","d. numbers"],answer:"a"},
    {text:"What is html?",choices:["a","b","c","d"],answer:"a"},
    {text:"What is html?",choices:["a","b","c","d"],answer:"a"},
    {text:"What is html?",choices:["a","b","c","d"],answer:"a"},
    {text:"What is html?",choices:["a","b","c","d"],answer:"a"}
]

//display first question
function displayQuestion(){
    document.querySelector(".question-text").textContent=questions[qi].text
    document.querySelector('.answer-box').innerHTML=""
    questions[qi].choices.forEach(function(choice){
        var btn=document.createElement("button")
        btn.textContent=choice;
        btn.setAttribute("value",choice)
        btn.onclick=evaluateAnswer
        document.querySelector(".answer-box").appendChild(btn)
    })
}
function evaluateAnswer(){
    console.log(this.value)
    qi++;
    displayQuestion()
}
//show quiz div 
var quizEl=document.querySelector(".quiz")

//display first question
//add answer buttons
//check for correct answer
//show next question
//repeat until end
//run end game function