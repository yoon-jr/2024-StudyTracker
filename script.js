document.addEventListener("DOMContentLoaded", () => {
  // Display current date and time
  const dateTimeElement = document.getElementById("date-time");

  if (dateTimeElement) {
    const updateDateTime = () => {
      const now = new Date();
      const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      };
      const dateStr = now.toLocaleDateString(undefined, options);
      const timeStr = now.toLocaleTimeString();
      dateTimeElement.textContent = `${dateStr}, ${timeStr}`;
    };

    updateDateTime();
    setInterval(updateDateTime, 1000);
  }

  // Timer functionality
  const timerElement = document.getElementById("timer");
  const startStopButton = document.getElementById("start-stop");
  const resetButton = document.getElementById("reset");

  if (timerElement && startStopButton && resetButton) {
    let timer;
    let isRunning = false;
    let time = 0;

    const updateTimer = () => {
      time++;
      const minutes = Math.floor(time / 60);
      const seconds = time % 60;
      timerElement.textContent = `${minutes < 10 ? "0" : ""}${minutes}:${
        seconds < 10 ? "0" : ""
      }${seconds}`;
    };

    startStopButton.addEventListener("click", () => {
      if (isRunning) {
        clearInterval(timer);
      } else {
        timer = setInterval(updateTimer, 1000);
      }
      isRunning = !isRunning;
      startStopButton.textContent = isRunning ? "Stop" : "Start";
    });

    resetButton.addEventListener("click", () => {
      clearInterval(timer);
      isRunning = false;
      time = 0;
      timerElement.textContent = "00:00";
      startStopButton.textContent = "Start";
    });
  }

  // Menu button functionality
  const mainMenu = document.getElementById("main-menu");
  const content = document.getElementById("content");
  const timerSection = document.getElementById("timer-section");
  const planSection = document.getElementById("plan-section");
  const notesSection = document.getElementById("notes-section");

  const timerButton = document.getElementById("timer-button");
  const plansButton = document.getElementById("plans-button");
  const notesButton = document.getElementById("notes-button");

  if (timerButton && plansButton && notesButton) {
    timerButton.addEventListener("click", () => {
      mainMenu.style.display = "none";
      content.style.display = "block";
      timerSection.style.display = "block";
      planSection.style.display = "none";
      notesSection.style.display = "none";
    });

    plansButton.addEventListener("click", () => {
      mainMenu.style.display = "none";
      content.style.display = "block";
      timerSection.style.display = "none";
      planSection.style.display = "block";
      notesSection.style.display = "none";
    });

    notesButton.addEventListener("click", () => {
      mainMenu.style.display = "none";
      content.style.display = "block";
      timerSection.style.display = "none";
      planSection.style.display = "none";
      notesSection.style.display = "block";
    });
  }

  // Update header for Study Plans page
  const planInput = document.getElementById("plan-input");
  const addPlanButton = document.getElementById("add-plan");
  const planList = document.getElementById("plan-list");
  const plansHeader = document.getElementById("plans-header");

  if (planInput && addPlanButton && planList) {
    addPlanButton.addEventListener("click", () => {
      const plan = planInput.value.trim();
      if (plan) {
        const li = document.createElement("li");

        // Create checkbox
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";

        // Create span element to hold the text
        const textSpan = document.createElement("span");
        textSpan.textContent = ` ${plan}`;

        // Append checkbox and span to list item
        li.appendChild(checkbox);
        li.appendChild(textSpan);

        // Append list item to plan list
        planList.appendChild(li);
        planInput.value = "";
      }
    });

    if (plansHeader) {
      const now = new Date();
      const options = {
        weekday: "long",
        year: "numeric",
        month: "numeric",
        day: "numeric",
      };
      const dateStr = now.toLocaleDateString(undefined, options);
      plansHeader.textContent = `${dateStr}의 Study Plans`;
    }
  }

  // Update header for Study Notes page
  const noteInput = document.getElementById("note-input");
  const addNoteButton = document.getElementById("add-note");
  const noteList = document.getElementById("note-list");
  const notesHeader = document.getElementById("notes-header");

  if (noteInput && addNoteButton && noteList) {
    addNoteButton.addEventListener("click", () => {
      const note = noteInput.value.trim();
      if (note) {
        const li = document.createElement("li");
        li.textContent = note;
        noteList.appendChild(li);
        noteInput.value = "";
      }
    });

    if (notesHeader) {
      const now = new Date();
      const options = {
        weekday: "long",
        year: "numeric",
        month: "numeric",
        day: "numeric",
      };
      const dateStr = now.toLocaleDateString(undefined, options);
      notesHeader.textContent = `${dateStr}의 Study Notes`;
    }
  }

  // Update header for Study Timer page
  const timerHeader = document.getElementById("timer-header");

  if (timerHeader) {
    const now = new Date();
    const options = {
      weekday: "long",
      year: "numeric",
      month: "numeric",
      day: "numeric",
    };
    const dateStr = now.toLocaleDateString(undefined, options);
    timerHeader.textContent = `${dateStr}의 Study Timer`;
  }
});
