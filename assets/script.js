//Hide start div
var startEl=document.querySelector(".start")
var startBtn=document.querySelector(".start-btn")
var qi=0


//what the start button is doing
startBtn.addEventListener("click",function(){
    startEl.setAttribute("class", "hide")
    quizEl.removeAttribute("class","hide")
    displayQuestions()
})

//add a timer
var count = 20;
var interval = setInterval(function(){
  document.getElementById('count').innerHTML=count;
  count--;
  if (count === 0){
    clearInterval(interval);
    document.getElementById('count').innerHTML='Done';
    alert("You're out of time!");
  }
}, 1000);

//quiz questions and answers
var questions=[
    {text:"Commonly used data types DO not include:",choices:["a. booleans","b. strings","c. alerts","d. numbers"],answer:"a"},
    {text:"The condition in an if/else statement is enclosed with ______.",choices:["a. quotes","b. curly brackets","c. parenthesis","d. square brackets"],answer:"c"},
    {text:"Arrays in Javascript can be used to store ______.",choices:["a. numbers and strings","b. other arrays","c. booleans","d. all of the above"],answer:"d"},
    {text:"String values must be enclosed within ______ when being assigned to variables.",choices:["a. commas","b. curly brackets","c. quotes","d. parenthsis"],answer:"b"},
    {text:"A very useful tool used for development and debugging for printing content to the debugger is:",choices:["a. JavaScript","b. terminal/bash","c. for loops","d. console.log"],answer:"c"}
]

//display first question
function displayQuestions(){
    document.querySelector(".questions").textContent=questions[qi].text
    document.querySelector(".answer-box").innerHTML=""
    questions[qi].choices.forEach(function(choices){
        var btn=document.createElement("button")
        btn.textContent=choices;
        btn.setAttribute("value",choices)
        btn.onclick=evaluateAnswer
        document.querySelector(".answer-box").appendChild(btn)
    })
}

function evaluateAnswer(){
    console.log(this.value)
    qi++;
    displayQuestions()
}
//show quiz div 
var quizEl=document.querySelector(".quiz")


//add answer buttons
//check for correct answer
//show next question
//repeat until end
//run end game function