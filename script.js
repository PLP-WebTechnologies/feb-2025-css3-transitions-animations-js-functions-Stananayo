// script.js

// Function to save user preference (e.g., preferred greeting)
function savePreference(key, value) {
    localStorage.setItem(key, value);
  }
  
  // Function to get user preference
  function getPreference(key) {
    return localStorage.getItem(key);
  }
  
  // Function to trigger animation
  function triggerAnimation(element) {
    element.classList.remove('animate-pulse'); // Reset if already animated
    void element.offsetWidth; // Trigger reflow for restart
    element.classList.add('animate-pulse');
  }
  
  // Initialize on page load
  document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('animatedBtn');
    const greetingPara = document.getElementById('greeting');
  
    // Retrieve and display stored greeting preference
    const preferredGreeting = getPreference('greeting') || 'Hello!';
  
    greetingPara.textContent = preferredGreeting;
  
    // When button is clicked
    btn.addEventListener('click', () => {
      // Save a new greeting preference
      const newGreeting = 'You clicked the button!';
      savePreference('greeting', newGreeting);
      greetingPara.textContent = newGreeting;
  
      // Trigger pulse animation on button
      triggerAnimation(btn);
    });
  });