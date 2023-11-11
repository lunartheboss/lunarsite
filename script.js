function toggleSidebar() {
    var sidebar = document.getElementById('sidebar');
    var mainContent = document.getElementById('main-content');

    if (sidebar.style.left === '0px' || sidebar.style.left === '') {
        sidebar.style.left = '-200px';
        mainContent.style.marginLeft = '0';
    } else {
        sidebar.style.left = '0';
        mainContent.style.marginLeft = '200px';
    }
}

function leave() {
    document.body.innerHTML = '<div class="loading-dot"></div>';
    setTimeout(function () {
        window.location.href = 'index.html';
    }, 3000);
}

function performGsmQuery() {
    var gsmInput = document.getElementById('gsmInput').value;
    var gsmWarning = document.getElementById('gsmWarning');

    // Example: Checking if the input is less than 12
    if (gsmInput.length < 12) {
        gsmWarning.style.display = 'block';
    } else {
        gsmWarning.style.display = 'none';
        // Implement GSM query logic here
    }
}

function performNameQuery() {
    // Implement name query logic here
}

// Additional JavaScript code as needed
