function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("closed");
  const mainPanel = document.getElementById("mainPanel");
  mainPanel.style.marginLeft = sidebar.classList.contains("closed") ? "0" : "250px";
}

function leave() {
  // Show loading screen for 3 seconds
  setTimeout(() => {
    window.location.href = "index.html";
  }, 3000);
}

function validateTCInput(input) {
  const tcWarningMsg = document.getElementById("tcWarningMsg");
  if (!/^\d+$/.test(input.value)) {
    tcWarningMsg.textContent = "Please enter only numbers.";
  } else if (input.value.length < 12) {
    tcWarningMsg.textContent = "Incorrect entry";
  } else {
    tcWarningMsg.textContent = "";
  }
}

function validateTextInput(input) {
  if (input.value.trim() === "") {
    input.style.borderColor = "red";
  } else {
    input.style.borderColor = "";
  }
}

function sorgula(type) {
  const resultBox = document.getElementById("resultBox");
  // Implement database interaction and display data in resultBox
  resultBox.textContent = "Data will be displayed here"; // Replace with actual data
}
