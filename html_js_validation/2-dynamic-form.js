// Function to generate input fields based on the selected value
function generateInputFields(selectedValue) {
    const inputContainer = document.getElementById('inputContainer');
    inputContainer.innerHTML = ''; // Clear any existing input fields
  
    for (let i = 1; i <= selectedValue; i++) {
      const inputField = document.createElement('input');
      inputField.type = 'text';
      inputField.name = `field${i}`;
      inputField.placeholder = `Field ${i}`;
      inputContainer.appendChild(inputField);
    }
  }
  
  // Function to validate the form
  function validateForm(event) {
    event.preventDefault(); // Prevent default form submission behavior
  
    const selectedValue = document.getElementById('numFields').value;
    const inputContainer = document.getElementById('inputContainer');
    const inputFields = inputContainer.querySelectorAll('input');
  
    let isValid = true;
  
    // Check if any input field is empty
    for (const inputField of inputFields) {
      if (inputField.value.trim() === '') {
        isValid = false;
        break;
      }
    }
  
    if (isValid) {
      // You can add code here to submit the form if all fields are filled
    } else {
      alert('Please fill in all fields.');
    }
  }
  
  // Add an event listener to detect changes in the dropdown menu selection
  const numFieldsSelect = document.getElementById('numFields');
  numFieldsSelect.addEventListener('change', function () {
    const selectedValue = numFieldsSelect.value;
    generateInputFields(selectedValue);
  });
  
  // Add an event listener to the form for form submission
  const dynamicForm = document.getElementById('dynamicForm');
  dynamicForm.addEventListener('submit', validateForm);
  
  // Initial generation of input fields based on the default selected value
  generateInputFields(numFieldsSelect.value);
  