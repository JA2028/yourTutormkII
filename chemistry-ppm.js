const questions = [
    {
      question: "What color do you get when you mix red and blue?",
      choices: ["Green", "Purple", "Orange", "Yellow"],
      correctAnswer: "Purple",
      explanation: "Red and blue are primary colors that combine to make purple."
    },
    {
      question: "What planet do we live on?",
      choices: ["Venus", "Mars", "Earth", "Jupiter"],
      correctAnswer: "Earth",
      explanation: "Humans live on Earth, the third planet from the sun."
    },
    {
      question: "What is 5 + 3?",
      choices: ["6", "7", "8", "9"],
      correctAnswer: "8",
      explanation: "5 + 3 = 8."
    },
    {
      question: "Which of these is a vowel?",
      choices: ["B", "C", "D", "A"],
      correctAnswer: "A",
      explanation: "A is one of the five vowels: A, E, I, O, U."
    },
    {
      question: "Which word is a noun?",
      choices: ["Run", "Blue", "Cat", "Quickly"],
      correctAnswer: "Cat",
      explanation: "Cat is a person/place/thing — it’s a noun."
    },
    {
      question: "How many minutes are in one hour?",
      choices: ["30", "60", "90", "120"],
      correctAnswer: "60",
      explanation: "One hour has 60 minutes."
    },
    {
      question: "How many days are in a week?",
      choices: ["5", "6", "7", "8"],
      correctAnswer: "7",
      explanation: "A week has 7 days."
    },
    {
      question: "Which of the following is a fruit?",
      choices: ["Carrot", "Apple", "Lettuce", "Broccoli"],
      correctAnswer: "Apple",
      explanation: "Apple is a fruit; the others are vegetables."
    },
    {
      question: "Which object gives us light and heat?",
      choices: ["Moon", "Star", "Sun", "Earth"],
      correctAnswer: "Sun",
      explanation: "The sun is our main source of light and heat."
    },
    {
      question: "What is 4 × 2?",
      choices: ["6", "8", "10", "12"],
      correctAnswer: "8",
      explanation: "4 times 2 equals 8."
    },
    {
      question: "Which animal is known as 'man's best friend'?",
      choices: ["Cat", "Dog", "Horse", "Parrot"],
      correctAnswer: "Dog",
      explanation: "Dogs are commonly called 'man’s best friend.'"
    },
    {
      question: "Which weather is associated with lightning?",
      choices: ["Snow", "Sunshine", "Thunderstorm", "Wind"],
      correctAnswer: "Thunderstorm",
      explanation: "Lightning and thunder happen during thunderstorms."
    },
    {
      question: "A triangle has how many sides?",
      choices: ["2", "3", "4", "5"],
      correctAnswer: "3",
      explanation: "A triangle always has 3 sides."
    },
    {
      question: "What color do you get by mixing yellow and blue?",
      choices: ["Red", "Orange", "Green", "Purple"],
      correctAnswer: "Green",
      explanation: "Yellow + Blue = Green."
    },
    {
      question: "Which instrument has keys and is often found in homes?",
      choices: ["Guitar", "Violin", "Piano", "Drum"],
      correctAnswer: "Piano",
      explanation: "The piano is a keyboard instrument found in many homes."
    }
  ];
  
  // Get a random question
  const randomIndex = Math.floor(Math.random() * questions.length);
  const question = questions[randomIndex];
  
  // Set question and answer button text
  const questionText = document.getElementById("question");
  questionText.textContent = question.question;
  
  const answerBtn1 = document.getElementById("answer-button1");
  const answerBtn2 = document.getElementById("answer-button2");
  const answerBtn3 = document.getElementById("answer-button3");
  const answerBtn4 = document.getElementById("answer-button4");
  
  answerBtn1.textContent = "A - " + question.choices[0];
  answerBtn2.textContent = "B - " + question.choices[1];
  answerBtn3.textContent = "C - " + question.choices[2];
  answerBtn4.textContent = "D - " + question.choices[3];
  
  const userAnswer = document.getElementById("answer-input");
  const submitBtn = document.getElementById("submit-button");
  const nextQuestionBtn = document.getElementById("next-button");
  
  const questionsCorrect = document.getElementById("left-x");
  const questionsIncorrect = document.getElementById("right-x");
  
  let scoreCounter = 0;
  const answerText = document.getElementById("answer-text");
  
  // Hide Next button text initially
  nextQuestionBtn.textContent = "";
  
  function checkAnswer() {
      const userResponse = userAnswer.value.trim().toLowerCase();
      const correctResponse = question.correctAnswer.toLowerCase();
  
      if (userResponse === correctResponse) {
          scoreCounter += 1;
          questionsCorrect.textContent = scoreCounter;
          answerText.textContent = "✅ Correct! " + question.explanation;
          answerText.style.color = "lightgreen";
      } else {
          questionsIncorrect.textContent = Number(questionsIncorrect.textContent) + 1;
          answerText.textContent = "❌ Incorrect. " + question.explanation;
          answerText.style.color = "red";
      }
  
      userAnswer.value = ""; // Clear input
      nextQuestionBtn.textContent = "Next Question"; // Show button only after submitting
  }
  
  function nextQuestion() {
      window.location.reload(); // Load new question
  }
  
  submitBtn.addEventListener("click", checkAnswer);
  nextQuestionBtn.addEventListener("click", nextQuestion);
  