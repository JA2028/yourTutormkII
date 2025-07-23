// Store study events
let studyEvents = JSON.parse(localStorage.getItem("studyEvents")) || [];

// Reference UI elements
const createBtn = document.getElementById("createStudyEventButton");
const viewBtn = document.getElementById("viewStudyEventsButton");

// Create a container to show messages and events
const displayContainer = document.createElement("div");
displayContainer.id = "eventDisplay";
displayContainer.className = "event-display";
document.querySelector("main").appendChild(displayContainer);

// Create event form (hidden by default)
const formContainer = document.createElement("div");
formContainer.className = "form-container";
formContainer.innerHTML = `
  <h2>Create a Study Event</h2>
  <input type="text" id="subject" placeholder="Subject (e.g., Algebra)" required>
  <input type="date" id="date" required>
  <input type="time" id="time" required>
  <input type="text" id="duration" placeholder="Duration (e.g., 1 hour)" required>
  <button id="saveEventButton">Save Event</button>
`;
document.querySelector("main").appendChild(formContainer);
formContainer.style.display = "none";

// Show form
createBtn.addEventListener("click", () => {
  formContainer.style.display = "block";
  displayContainer.innerHTML = ""; // clear event display
});

// Save event
document.getElementById("saveEventButton").addEventListener("click", () => {
  const subject = document.getElementById("subject").value.trim();
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;
  const duration = document.getElementById("duration").value.trim();

  if (subject && date && time && duration) {
    const newEvent = { subject, date, time, duration };
    studyEvents.push(newEvent);
    localStorage.setItem("studyEvents", JSON.stringify(studyEvents));

    // Show confirmation
    displayContainer.innerHTML = `<p class="confirmation">✅ Study event saved for ${subject} on ${date} at ${time}.</p>`;
    formContainer.style.display = "none";
  } else {
    displayContainer.innerHTML = `<p class="error">❗ Please fill out all fields.</p>`;
  }
});

// View study events
viewBtn.addEventListener("click", () => {
  formContainer.style.display = "none";
  displayContainer.innerHTML = "<h2>📚 Your Study Events</h2>";

  if (studyEvents.length === 0) {
    displayContainer.innerHTML += `<p>No study events scheduled yet.</p>`;
    return;
  }

  const list = document.createElement("ul");
  list.className = "event-list";

  studyEvents.forEach((event, index) => {
    const item = document.createElement("li");
    item.className = "event-item";
    item.innerHTML = `
      <strong>${event.subject}</strong> - ${event.date} @ ${event.time} (${event.duration})
    `;
    list.appendChild(item);
  });

  displayContainer.appendChild(list);
});
