// script.js

// Retrieve DOM elements
const darkModeCheckbox = document.getElementById('darkModeCheckbox');
const saveBtn = document.getElementById('saveBtn');
const statusMessage = document.getElementById('statusMessage');
const sampleImage = document.getElementById('image1');

// Function to save preferences in localStorage
function savePreferences() {
  const preferences = {
    darkMode: darkModeCheckbox.checked
  };
  localStorage.setItem('userPreferences', JSON.stringify(preferences));
  showStatusMessage('Preferences saved!');
  triggerAnimation(image1);
  applyPreferences(preferences);
}

// Function to load preferences from localStorage
function loadPreferences() {
  const data = localStorage.getItem('userPreferences');
  if (data) {
    const preferences = JSON.parse(data);
    // Apply preferences
    darkModeCheckbox.checked = preferences.darkMode;
    applyPreferences(preferences);
  }
}

// Apply preferences to the page
function applyPreferences(preferences) {
  if (preferences.darkMode) {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
  }
}

// Show animated status message
function showStatusMessage(message) {
  statusMessage.textContent = message;
  statusMessage.classList.add('show');

  // Remove the class after animation to allow re-trigger
  setTimeout(() => {
    statusMessage.classList.remove('show');
  }, 1500);
}

// Trigger CSS animation on image
function triggerAnimation(element) {
  element.classList.remove('animate');
  // Force reflow to restart animation
  void element.offsetWidth;
  element.classList.add('animate');
}

// Event listeners
saveBtn.addEventListener('click', savePreferences);
window.addEventListener('load', () => {
  loadPreferences();
  // Optional: automatically show message if preferences exist
  if (localStorage.getItem('userPreferences')) {
    showStatusMessage('Preferences loaded!');
  }
});

// Optional: animate image on hover or other user actions
sampleImage.addEventListener('click', () => {
  triggerAnimation(image1);
});