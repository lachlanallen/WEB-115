// JavaScript code for form validation
document.addEventListener('DOMContentLoaded', function() {
  // Retrieve the input field element
  const inputField = document.getElementById('inputField');
  const form = document.getElementById('myForm');
  const errorMessage = document.getElementById('errorMessage');

  // Add an event listener to the form for the submit event
  form.addEventListener('submit', function(event) {
    // Prevent form from submitting
    event.preventDefault();

    // Retrieve the input field value
    const inputValue = inputField.value;

    // Regular expression pattern for alphanumeric input
    const regexTest = /^[a-z0-9]+$/i;

    // Check if the input value matches the pattern
    if (regexTest.test(inputValue)) {
      // Valid input: display confirmation and submit the form
      errorMessage.textContent = '';
      alert('Form submitted successfully!');
    } else {
      // Invalid input: display error message
      errorMessage.textContent = 'Input must be alphanumeric.';
      errorMessage.style.color = 'red';
      errorMessage.style.display = 'block'; 
    }
  });
});