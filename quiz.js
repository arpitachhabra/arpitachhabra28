// Quiz Game: paste the whole block into the browser console and press Enter.
// Based on Lab 4 assignment requirements. :contentReference[oaicite:1]{index=1}

const quizQuestions = [
  { question: "What is the capital of India?", answer: "new delhi" },
  { question: "Which language runs in a web browser?", answer: "javascript" },
  { question: "How many days are there in a leap year?", answer: "366" },
  { question: "What is 5 + 7?", answer: "12" },
  { question: "Name the planet known as the Red Planet", answer: "mars" }
];

function runQuiz() {
  let score = 0;
  // friendly intro
  alert("Welcome to the Quiz! You will be asked " + quizQuestions.length + " questions. Type your answer in the prompt and press OK.");

  for (let i = 0; i < quizQuestions.length; i++) {
    const qObj = quizQuestions[i];
    // show question and get answer
    let userInput = prompt(`Question ${i + 1} of ${quizQuestions.length}:\n${qObj.question}`);
    
    // If user pressed Cancel, treat as empty string
    if (userInput === null) {
      userInput = "";
    }

    // normalize input
    const normalized = userInput.toLowerCase().trim();

    if (normalized === qObj.answer.toLowerCase().trim()) {
      score++;
      alert("Correct! 🎉");
    } else {
      // show correct answer for learning
      alert(`Wrong. The correct answer is: "${qObj.answer}".`);
    }
  }

  // final score
  alert(`Quiz finished! Your score: ${score} out of ${quizQuestions.length}.`);
  console.log(`Quiz finished! Score: ${score}/${quizQuestions.length}`);
}

// run the quiz immediately
runQuiz();
