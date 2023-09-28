// Function to validate the email format
function validateEmail(email) {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  
    return emailRegex.test(email);
  }
  
  // Function to handle form submission
  function handleFormSubmit(event) {
    event.preventDefault(); // Prevent default form submission behavior
  
    const emailInput = document.getElementById('email');
    const errorMessage = document.getElementById('error');
    const email = emailInput.value;
  
    if (validateEmail(email)) {
      errorMessage.textContent = ''; // Clear any existing error message
      // You can add code here to submit the form if needed
    } else {
      errorMessage.textContent = 'Please enter a valid email address.';
    }
  }
  
  // Add an event listener to the form for form submission
  const emailForm = document.getElementById('emailForm');
  emailForm.addEventListener('submit', handleFormSubmit);
  