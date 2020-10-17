

// $(document).ready(function() {
 const questions =[
 {
  title : "The Manatees",
   choices: ["The name 'manatee' is believed to be derived from the Carib word manati, which means 'breast.' Manatees belong to the order Sirenia, which comes from the Latin syreni, meaning 'mermaid.' ", "A manatee closest relative is the elephant and they can grow as long as 12 feet and can weigh nearly 4,000 pounds!", "Manatees typically swim too deep to be threatened by recreational boat traffic there, there have been a handful of cases where manatees have been injured by collisions with hulls and propellers."],
   answer: "Manatees typically swim too deep to be threatened by recreational boat traffic there, there have been a handful of cases where manatees have been injured by collisions with hulls and propellers.",
  },
  {
    title : "Flamethrowers!",
     choices: ["Boston mayor, James Curley asked MIT engineers to find a way of melting city streets to avoid flooding during heavy snow, his suggestion was incorporating flamethrowers.", "A Detroit inventor Charl Fourie created a hood-mounted flamethrower for cars, intended for “self-defense”, but was prevented from making them due to a federal law that says personal flamethrowers are illegal.", "The modern flamethrower was invented in the early twentieth century, but massive tubed flamethrowers were used as early as 424 B.C., and the Byzantine navy had brass-tubed flamethrowers mounted on their ships by 672 AD."],
     answer: "A Detroit inventor Charl Fourie created a hood-mounted flamethrower for cars, intended for “self-defense”, but was prevented from making them due to a federal law that says personal flamethrowers are illegal.",
    },
//  {
//     title : "",
//      choices: "",
//      answer: "",
//      }
  ];

  let questionEl = document.querySelector("#questionDiv");
  let optionListEl = document.querySelector("#optionDiv");
  let gifEL = document.querySelector("#question-result");
  let questionResultEl = document.querySelector("#question-result");
  let timerEl = document.querySelector("#timer");

let questionIndex = 0;
let correctCount = 0;
let time = 10;
let intervalId;

function endQuiz(){
clearInterval(intervalId);
var body = document.body;
body.innerHTML = "Game Over, You scored " + correctCount;
setTimeout(showHighScore, 2);
}

function showHighScore() {
var name = prompt("Please enter your name");

var high_scores = localStorage.getItem("scores");

if (!high_scores) {
  high_scores = [];
} else {
  high_scores = JSON.parse(high_scores);
}

high_scores.push({ name: name, score: correctCount });

localStorage.setItem("scores", JSON.stringify(high_scores));

high_scores.sort(function (a, b) {
  return b.score - a.score;
});

var contentUL = document.createElement("ul");

for (var i = 0; i < high_scores.length; i++) {
  var contentLI = document.createElement("li");
  contentLI.textContent =
    "Name: " + high_scores[i].name + " Score: " + high_scores[i].score;
  contentUL.appendChild(contentLI);
}

document.body.appendChild(contentUL);
}

function updateTime(){
  time--;
  timerEl.textContent = time;
  if (time <= 0) {
    endQuiz();
  }
}

function renderQuestion(){

  //timer for question
  if(time == 0){
    updateTime();
    return;
  }
//pause timer
  intervalId = setInterval(updateTime,1000);
  questionEl.textContent =questions[questionIndex].title;

  //clear out any old question choices
  optionListEl.innerHTML= "";
  questionResultEl.innerHTML= "";

  //loop over choices
  let choices = questions[questionIndex].choices;
  let choicesLength = choices.length;

  for (var i = 0; i < choicesLength; i ++){
    let choiceBtn = document.createElement("button");
    choiceBtn.setAttribute("class","choice");
    choiceBtn.setAttribute("value",choice);

    choiceBtn.textContent = choices[i];
    optionListEl.append(choiceBtn);
  };
}

//move to next question unless all questions in the array have been viewed
function nxtQ(){
  questionIndex ++;
  if(questionIndex === questions.length){
    time = 0;
  }
  renderQuestion();
}

function correctAnswer(event){
  clearInterval(intervalId);
  if (event.target.matches("li")) {
    var answer = event.target.textContent;
    if (answer === questions[questionIndex].answer) {
      questionResultEl.textContent = "Correct";
      correctCount++;
    } else {
      questionResultEl.textContent = "Incorrect";
      time = time - 2;
      timerEl.textContent = time;
    }
  }
  setTimeout(nextQuestion, 2000);
}

renderQuestion();
optionListEl.addEventListener("click", checkAnswer);

  // $('#resultDiv').hide();
  // $('#questionDiv').hide();
  // $('#done').hide();
//fix questionDiv to hide until onclick
// console.log("test1");
// var number = 60;




// $("#start").on("click", run);

// console.log("test2");
// $("#start").click(function run(event) {

  // function run (){
  //   clearInterval(intervalid);
  //   intervalid = setInterval(decrement, 1000);

  //   $('#questionDiv').show();
  //   console.log("test3");
  // }

//   function decrement(){

//     number--;

//     $("#time").html("<h2>" + number + "</h2>");

//     if(number === 0){

//       stop();

//       alert("Time Up!");
//       $('#startDiv').hide();
//       $('#done').show();
//       $('#resultDiv').show();
//       console.log("test4");
//     }
//   }
//   $("#submit").on("click", stop);{

//   }
//  //stop timer


//   function stop(){
//     clearInterval(intervalid);
//     $('#questionDiv').hide();
//     $('#startDiv').hide();
//     $('#resultDiv').show();
//     console.log("test5");
//   }

//   function resultCount(){
//     var rightAnswer = 0;
//     var wrongAnswer = 0;
//     var unanswered = 0;

//     var correct = ["C1", "B2"];
//     var userAnswer = [];

//     var aq1 = $("input[name='q1']:checked").val();
//     var aq2 = $("input[name='q2']:checked").val();

//     var userArray = [aq1,aq2];

    // userAnswer.push($("input[name='q1']:checked").val());
    // console.log(userAnswer);
    // userAnswer.push($("input[name='q2']:checked").val());
    // console.log("test6" + userAnswer);
    // var aq2 = $("input[name='q2']:checked").val();

    // for (var i = 0; i < correct.length; i++){

    //   if(correct[i] === userArray){
    //     rightAnswer++
    //     $('#ra').addClass("rightA");
    //     $("rightA").append(rightAnswer);
    //     $("#ra").html(rightAnswer);


    //    }
    //    console.log()
    //   };
    // for (var i = 0; i < correct.length; i++) {
    //   for (var j = 0; j < userArray.length; j++) {
    //       if (correct[i] == userArray[j]) {
    //         rightAnswer++;
    //         console.log(rightAnswer);
            //I do not know why this line keeps showing an error on the definition.
            //need to comment out
            // else if(correct[i] !=== userArray[j]){
            //   wrongAnswer++;
            // }
            //   else{
            // $("input[name='q2']:not(checked)").val()
            //   unanswered++
            // }





    // $("#reset").on("click", run)
    //this isnt working
    //   number = 15;
    //   $('#resultDiv').hide()
    //   $('#questionDiv').show()

    // }
