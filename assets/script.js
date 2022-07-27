//Hide start div
var startEl=document.querySelector(".start")
var startBtn=document.querySelector(".start-btn")
var qi=0

startBtn.addEventListener("click",function(){
    startEl.setAttribute("class", "hide")
    quizEl.removeAttribute("class","hide")
    displayQuestion()
})
var questions=[
    {text:"What is html?",choices:["a","b","c","d"],answer:"a"},
    {text:"What is html?",choices:["a","b","c","d"],answer:"a"},
    {text:"What is html?",choices:["a","b","c","d"],answer:"a"},
    {text:"What is html?",choices:["a","b","c","d"],answer:"a"},
    {text:"What is html?",choices:["a","b","c","d"],answer:"a"}
]
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