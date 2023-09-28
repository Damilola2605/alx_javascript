// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent default form submission behavior
  
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const errorMessage = document.getElementById('error');
    const successMessage = document.getElementById('success');
  
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
  
    // Validation: Check if required fields are filled
    if (name === '' || email === '') {
      errorMessage.textContent = 'Please fill in all required fields.';
      successMessage.textContent = '';
    } else {
      // Validation passed, submit the form or perform other actions
      errorMessage.textContent = '';
      successMessage.textContent = 'Form submitted successfully!';
  
      // You can add code here to submit the form to a server or perform other actions
    }
  }
  
  // Add an event listener to the form for form submission
  const submitForm = document.getElementById('submitForm');
  submitForm.addEventListener('submit', handleFormSubmit);
  