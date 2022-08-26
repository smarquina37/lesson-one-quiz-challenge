// 1. Create a multidimensional array to hold quiz questions and answers
const questions = [
  ["What state is Los Angeles in?", "California"],
  ["How many different states in the US has Susana lived in?", "4"],
  ["What is the city that never sleeps?", "NYC"]
];
let correctAnswers = [];
let incorrectAnswers = [];

// 2. Store the number of questions answered correctly
let score = 0;

/* 
  3. Use a loop to cycle through each question
      - Present each question to the user
      - Compare the user's response to answer in the array
      - If the response matches the answer, the number of correctly
        answered questions increments by 1
*/
for (let i = 0; i < questions.length; i++) {
  let question = questions[i][0];
  let answer = questions[i][1];
  let response = prompt(question);

  if (response === answer) {
    score++;
    correctAnswers.push(question);
  } else {
    incorrectAnswers.push(question);
  }
 
}

function createListItems(arr) {
  let items = '';
  for (let i = 0; i < arr.length; i++) {
    items += `<li>${arr[i]}</li>`
  }
  return items;
}


// 4. Display the number of correct answers to the user
let html = `
<h1>You answered ${score} questions correct!</h1>
<h2>You got these questions correct:</h2>
<ul>${createListItems(correctAnswers)}</ul>
<h2>You got these questions incorrect:</h2>
<ul>${createListItems(incorrectAnswers)}</ul>
`;

document.querySelector('main').innerHTML = html;