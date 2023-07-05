// Get element by Id/Class/QuerySelector

// Quiz area
const timer = document.getElementbyId("timer");
const quizArea = document.getElementbyId("quiz-area");
const selectOption = document.getElementbyClass("select-option");
const question = document.getElementbyClass("question");
const choicePrefix = document.getElementbyClass("choice-prefix");

// Recurring result area
const resultsArea = document.getElementbyId("results-area");
const questionsCount = document.getElementbyId("questions-count");
const correctCount = document.getElementbyId("correct-count");

// Quiz bio and landing info
const quizBio = document.getElementbyId("quiz-bio");
const testKnowl = document.getElementbyId("test-knowl");
const nextQuestionButton = document.getElementbyId("next-question");

//Final result area
const finalResultArea = document.getElementbyId("final-result-area");
const finalResult = document.getElementbyId("final-result");
const restartQuiz = document.getElementbyId("restart-quiz");

// Get elements by query selector 

// Fluctuating variable numbers 
let questionNumber = 0;
let userScore = 0;

// All Buttons 

// Start quiz button "Test Your Knowledge Here"

function testKnowl() {
    quizBio.style.display = 'none';
    finalResultArea.style.display = 'none';
    quizArea.style.display = 'block';
    questionsCount(questionNumber);
    avaliableQuestions = [...question];
    currentScore(0);
    beginTimer(20);
}

// Select option button 
function selectOption() {

}

// Questions count
function questionsCount() {

}

// Refresh (each question and corresponding mulitple choice options) as new question loads
function refreshQuestion() {

}

/**
 * New question function:
 * Load new question and corresponding multiple choice options
 * Each new question group should be new from the questions.js
 * Loop to stop asking when quiz questions stop */
refreshQuestion();


/**
 * Reveal answer function:
 * Sets the event listener for the select options buttons and validates correct or incorrect
 * Displays correct answer and explanation
 * Diables select option buttons when user clicks answer
 * Shows the next question button when user clicks answer
 */
function revealAnswer() {

}

// Next question button
function nextQuestionButton() {

}
// Restart quiz button
function restartQuiz() {

}

// Timer function 
function timer() {

}

// Final result and result takeaway functions 
function finalResultArea() {
    restartQuiz();

}

