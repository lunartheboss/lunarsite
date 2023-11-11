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
  const resultBox = document.getElementById("resultBox");
  // Implement database interaction and display data in resultBox
  resultBox.innerHTML = "<strong>Data will be displayed here:</strong><br>ad: John<br>soyad: Doe<br>tc: 1234567890<br>dogumtarihi: 01/01/1990<br>annead: Jane<br>annetc: 0987654321<br>babatc: 9876543210<br>babaad: Bob<br>uyruk: TR"; // Replace with actual data
}
