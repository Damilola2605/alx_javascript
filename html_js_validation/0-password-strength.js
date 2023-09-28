// Function to validate the password
function validatePassword(password) {
    const minLength = 8;
    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    const digitRegex = /[0-9]/;
    const specialCharRegex = /[!@#$%^&*]/;
  
    if (
      password.length >= minLength &&
      uppercaseRegex.test(password) &&
      lowercaseRegex.test(password) &&
      digitRegex.test(password) &&
      specialCharRegex.test(password)
    ) {
      return true; // Password meets all criteria
    }
  
    return false; // Password does not meet all criteria
  }
  
  // Function to handle form submission
  function handleFormSubmit(event) {
    event.preventDefault(); // Prevent default form submission behavior
  
    const passwordInput = document.getElementById('password');
    const errorMessage = document.getElementById('error');
    const password = passwordInput.value;
  
    if (validatePassword(password)) {
      errorMessage.textContent = ''; // Clear any existing error message
      // You can add code here to submit the form if needed
    } else {
      errorMessage.textContent =
        'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one numeric digit, and one special character.';
    }
  }
  
  // Add an event listener to the form for form submission
  const passwordForm = document.getElementById('passwordForm');
  passwordForm.addEventListener('submit', handleFormSubmit);
  