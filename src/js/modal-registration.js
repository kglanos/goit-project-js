(() => {
  const refs = {
    openModalBtns: document.querySelectorAll('[registration-data-modal-open]'),
    closeModalBtn: document.querySelector('[registration-data-modal-close]'),
    modal: document.querySelector('[registration-data-modal]'),
  };
  refs.openModalBtns.forEach(btn => {
    btn.addEventListener('click', toggleModal);
  });
  refs.closeModalBtn.addEventListener('click', toggleModal);
  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();

let emailError = document.getElementById('emailError');
let passwordError = document.getElementById('passwordError');
const email = document.querySelector('#user-email');
const password = document.querySelector('#user-password');
const form = document.querySelector('.registration-modal-form');
const msg = document.querySelector('.msg');
const signUpBtnModal = document.querySelector('.sign-up-modal');
const signUpLink = document.querySelector('.sign-up-link');
const signInLink = document.querySelector('.sign-in-link');
const logOutHeader = document.querySelector('.log-out-btn');
const signUpHeader = document.querySelector('.sign-up-btn');
const userStephen = document.querySelector('.user-btn');

// Function to validate the email
const validateEmail = inputEmail =>
  inputEmail.value.match(
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  );

// Function to validate password
const validatePassword = inputPassword =>
  inputPassword.value.match(
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  );

// Function used to display errors
const generateError = (errorName, errorMsg) => {
  if (errorName == 'email') {
    emailError.innerText = errorMsg;
  } else if (errorName == 'password') {
    passwordError.innerText = errorMsg;
  }
};
const formValidate = (inputEmail, inputPassword) => {
  emailError.innerText = '';
  passwordError.innerText = '';
  if (!validateEmail(inputEmail)) {
    emailError = 'please enter a valid email address';
    generateError('email', emailError);
    return false;
  }
  if (!validatePassword(inputPassword)) {
    passwordError = 'please enter correct password';
    generateError(generateError('password', passwordError));
    return false;
  }
  return true;
};

//triggers when user submits the form
form?.addEventListener('submit', e => {
  e.preventDefault();
  formValidate(email, password);
  document.querySelector('[registration-data-modal]').classList.add('visually-hidden');
  document.querySelector('.sign-up-btn').classList.add('visually-hidden');
  document.querySelector('.user-btn').classList.remove('visually-hidden');
  document.querySelector('.log-out-btn').classList.remove('visually-hidden');
});
signUpBtnModal.addEventListener('click', e => {
  e.preventDefault();
  formValidate(email, password);
  document.querySelector('[registration-data-modal]').classList.add('visually-hidden');
  document.querySelector('.sign-up-btn').classList.add('visually-hidden');
  document.querySelector('.user-btn').classList.remove('visually-hidden');
  document.querySelector('.log-out-btn').classList.remove('visually-hidden');
  form.reset();
});

// Focusout event listener. Triggers when the user clicks anywhere else besides the input
email.addEventListener('focusout', e => {
  if (!validateEmail(email)) {
    email.style.borderColor = 'red';
    generateError('email', 'Please enter a valid email');
    email.parentElement.classList.add('error');
  }
});

// Focusout event listener triggers when the user clicks anywhere else besides the input
password.addEventListener('focusout', e => {
  if (!validatePassword(password)) {
    password.style.borderColor = 'red';
    generateError('password', 'Please enter a valid password');
    password.parentElement.classList.add('error');
  }
});
