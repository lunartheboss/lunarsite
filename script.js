function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("open");
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
  if (type === 'adSoyad') {
    // Get data from the database "gsm" for adSoyad
    const adSoyadResultBox = document.getElementById("adSoyadResultBox");
    adSoyadResultBox.textContent = "Data will be displayed here"; // Replace with actual data
  }
  // Implement other cases for different types if needed
}
