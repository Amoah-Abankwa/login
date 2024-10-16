// Get elements
const form = document.querySelector('form');
const usernameInput = document.querySelector('input[type="text"]');
const passwordInput = document.querySelector('input[type="password"]');
const rememberMeCheckbox = document.querySelector('input[type="checkbox"]');
const loginButton = document.querySelector('.btn');
const registerLink = document.querySelector('.register-link a');

// Add event listeners
form.addEventListener('submit', handleSubmit);
loginButton.addEventListener('click', handleSubmit);
registerLink.addEventListener('click', handleRegister);

// Functions
function handleSubmit(e) {
  e.preventDefault();
  
  // Validate inputs
  if (usernameInput.value.trim() === '' || passwordInput.value.trim() === '') {
    alert('Please fill in both username and password');
    return;
  }
  
  // Simulate login (replace with actual login logic)
  console.log('Logging in with:', usernameInput.value, passwordInput.value);
  
  // Remember me functionality
  if (rememberMeCheckbox.checked) {
    localStorage.setItem('username', usernameInput.value);
    localStorage.setItem('password', passwordInput.value);
  } else {
    localStorage.removeItem('username');
    localStorage.removeItem('password');
  }
}

function handleRegister(e) {
  e.preventDefault();
  window.location.href = 'anulogin.html'; 
}

// Initialize remember me functionality
if (localStorage.getItem('username') && localStorage.getItem('password')) {
  usernameInput.value = localStorage.getItem('username');
  passwordInput.value = localStorage.getItem('password');
  rememberMeCheckbox.checked = true;
}