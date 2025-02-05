function selectOption(option) {
    if (option === 'yes') {
        // Flash rainbow colors and then display the heart image
        flashRainbowColors(function () {
            document.getElementById('question').style.display = 'none'; // Hide the question
            displayMinionHeart(); // Display the heart image
        });
    } else if (option === 'no') {
        // Change the "No" button text to "You sure?"
        document.getElementById('no-button').innerText = 'You sure?';
        // Increase the font size of the "Yes" button
        var yesButton = document.getElementById('yes-button');
        var currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
        var newSize = parseFloat(currentFontSize) * 2; // Double the font size
        yesButton.style.fontSize = newSize + 'px';
    } else {
        // Handle unexpected options
        alert('Invalid option!');
    }
}

function flashRainbowColors(callback) {
    var colors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#9400d3'];
    var i = 0;
    var interval = setInterval(function () {
        document.body.style.backgroundColor = colors[i];
        i = (i + 1) % colors.length;
    }, 200); // Change color every 200 milliseconds
    setTimeout(function () {
        clearInterval(interval);
        document.body.style.backgroundColor = ''; // Reset background color
        if (callback) {
            callback();
        }
    }, 2000); // Flash colors for 2 seconds
}

// Function to display the initial minion image
function displayMinion() {
    var imageContainer = document.getElementById('image-container');
    var minionImage = new Image();
    minionImage.src = 'minion.jpg'; // Updated file extension to match the actual file
    minionImage.alt = 'Minion';
    minionImage.onload = function () {
        imageContainer.appendChild(minionImage);
    };
}

// Function to display the minion-heart image
function displayMinionHeart() {
    document.getElementById('image-container').innerHTML = ''; // Clear existing content
    var imageContainer = document.getElementById('image-container');
    var minionHeartImage = new Image();
    minionHeartImage.src = 'minionheart.jpg'; // Updated file extension to match the actual file
    minionHeartImage.alt = 'Minion heart';
    minionHeartImage.onload = function () {
        imageContainer.appendChild(minionHeartImage);
        document.getElementById('options').style.display = 'none'; // Hide the options
    };
}

// Initially display the minion image
displayMinion();
﻿
