const notesData = [
    {
      id: 0,
      title: "What is a Linear Function?",
      explanation: "A linear function is a function whose graph is a straight line. It has the form f(x)=mx+b, where m is the slope, b is the y-intercept, and x is the independent variable.",
      question: "What is the general form of a linear function?",
      answer: "f(x)=mx+b"
    },
    {
      id: 1,
      title: "Identifying Linear Functions",
      explanation: "A function is linear if it has a constant rate of change, no variable exponents or multiplications between variables, and the graph is a straight line.",
      question: "Is y = x^2 + 1 a linear function?",
      answer: "no"
    },
    {
      id: 2,
      title: "Slope-Intercept Form",
      explanation: "The slope-intercept form is y = mx + b. Use this when you know the slope and the y-intercept.",
      question: "What does 'b' represent in y = mx + b?",
      answer: "y-intercept"
    },
    {
      id: 3,
      title: "Finding Slope from Two Points",
      explanation: "Slope (m) = (y2 - y1) / (x2 - x1).",
      question: "What is the slope between (2,3) and (5,9)?",
      answer: "2"
    },
    {
      id: 4,
      title: "Intercepts",
      explanation: "Y-intercept is where x=0. X-intercept is where y=0.",
      question: "What is the x-intercept of y = 2x + 4?",
      answer: "-2"
    }
  ];
  
  function loadFirstSegment() {
    displaySegment(0);
  }
  
  function displaySegment(id) {
    const container = document.getElementById("notes-container");
    const segment = notesData[id];
  
    const div = document.createElement("div");
    div.className = "segment";
    div.id = `segment-${id}`;
  
    div.innerHTML = `
      <h2>${segment.title}</h2>
      <p>${segment.explanation}</p>
      <label>${segment.question}</label>
      <input type="text" id="input-${id}" placeholder="Your answer">
      <button onclick="checkAnswer(${id})">Next</button>
    `;
  
    container.appendChild(div);
  }
  
  function checkAnswer(id) {
    const input = document.getElementById(`input-${id}`).value.trim().toLowerCase();
    const correct = notesData[id].answer.toLowerCase();
  
    if (input === correct) {
      if (id + 1 < notesData.length) {
        displaySegment(id + 1);
      } else {
        const msg = document.createElement("h2");
        msg.textContent = "🎉 You've completed the Linear Functions notes!";
        document.getElementById("notes-container").appendChild(msg);
      }
    } else {
      alert("Incorrect. Please try again.");
    }
  }
  
  window.onload = loadFirstSegment;
  