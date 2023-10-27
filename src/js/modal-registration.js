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

// sposób 1

const email = document.querySelector('#user-email');
const password = document.querySelector('#user-password');
const form = document.querySelector('.registration-modal-form');
const msg = document.querySelector('.msg');
const signUpBtnModal = document.querySelector('.sign-up-modal');
const signUpLink = document.querySelector('.sign-up-link');
const signInLink = document.querySelector('.sign-in-link');
const logOutHeader = document.querySelector('.log-out-btn');
const signUpHeader = document.querySelector('.sign-up-btn');

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
  const emailError = document.getElementById('emailError');
  const passwordError = document.getElementById('passwordError');
  if (errorName == 'email') {
    emailError.innerText = errorMsg;
  } else if (errorName == 'password') {
    passwordError.innerText = errorMsg;
  }
};

const formValidate = (inputEmail, inputPassword) => {
  if (!validateEmail(inputEmail)) {
    emailError = 'please enter a valid email address';
    generateError('email', emailError);
    return;
  }
  if (!validatePassword(inputPassword)) {
    passwordError = 'please enter correct password';
    generateError(generateError('password', passwordError));
    return;
  }
};

//triggers when user submits the form
form.addEventListener('submit', e => {
  e.preventDefault();
  formValidate(email, password);
  document.querySelector('[registration-data-modal]').classList.toggle('visually-hidden'),
    document.querySelector('.sign-up-btn').classList.toggle('visually-hidden'),
    document.querySelector('.user-btn').classList.remove('visually-hidden'),
    document.querySelector('.log-out-btn').classList.remove('visually-hidden');
});
signUpBtnModal.addEventListener('click', e => {
  e.preventDefault();
  formValidate(email, password);
  document.querySelector('[registration-data-modal]').classList.toggle('visually-hidden'),
    document.querySelector('.sign-up-btn').classList.toggle('visually-hidden'),
    document.querySelector('.user-btn').classList.remove('visually-hidden'),
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

// sposób 2

// const signUpBtnModal = document.querySelector('.sign-up-modal');
// const signUpLink = document.querySelector('.sign-up-link');
// const signInLink = document.querySelector('.sign-in-link');
// const logOutHeader = document.querySelector('.log-out-btn');
// const signUpHeader = document.querySelector('.sign-up-btn');
// const inputName = document.querySelector('#user-name');
// const inputEmail = document.querySelector('#user-email');
// const inputPassword = document.querySelector('#user-password');
// const registrationForm = document.querySelector('.registration-modal-form');

// function handleSubmit(event) {
//   event.preventDefault();
//   const form = event.target;
//   const name = form.elements.inputName.value;
//   const email = form.elements.inputEmail.value;
//   const password = form.elements.inputPassword.value;

//   if (inputName === '' || inputPassword === '' || inputEmail === '') {
//     return console.log('Please fill in all the fields!');
//   }

//   console.log(
//     `Name: ${inputName.value}, E-mail: ${inputEmail.value}, Password: ${inputPassword.value}`,
//   );
//   document.querySelector('[registration-data-modal]').classList.toggle('visually-hidden'),
//     document.querySelector('.sign-up-btn').classList.toggle('visually-hidden'),
//     document.querySelector('.user-btn').classList.remove('visually-hidden'),
//     document.querySelector('.log-out-btn').classList.remove('visually-hidden');
//   Notify.success(`You're logged in!`);
//   registrationForm.reset();
// }

// registrationForm.addEventListener('submit', handleSubmit);

// sposób 3

// const form = document.querySelector('.registration-modal-form');
// const btnSubmit = document.querySelector('.sign-up-modal');
// const inputName = document.querySelector('#user-name');
// const inputEmail = document.querySelector('#user-email');

// form.reset();

// const regexName = /^[\p{L}\s]+$/u;
// const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// const validateButton = (button, elements) => {
//   const allValid = elements.every(element => element.classList.contains('valid'));
//   if (allValid) {
//     button.disabled = false;
//     button.classList.remove('disabled');
//   } else {
//     button.disabled = true;
//     button.classList.add('disabled');
//   }
// };

// const doValidation = (element, message, regex, button, elements) => {
//   if (!regex.test(element.value)) {
//     element.classList.remove('valid');
//     element.classList.add('invalid');
//     message.classList.remove('warning-valid');
//     message.classList.add('warning-invalid');
//   } else {
//     element.classList.add('valid');
//     element.classList.remove('invalid');
//     message.classList.add('warning-valid');
//     message.classList.remove('warning-invalid');
//     document.querySelector('[registration-data-modal]').classList.toggle('visually-hidden'),
//       document.querySelector('.sign-up-btn').classList.toggle('visually-hidden'),
//       document.querySelector('.user-btn').classList.remove('visually-hidden'),
//       document.querySelector('.log-out-btn').classList.remove('visually-hidden');
//   }
//   validateButton(button, elements);
// };

// const allElementsToValidate = [inputName, inputEmail];

// inputName.addEventListener('input', () =>
//   doValidation(inputName, warningMessageName, regexName, btnSubmit, allElementsToValidate),
// );
// inputName.addEventListener('blur', () =>
//   doValidation(inputName, warningMessageName, regexName, btnSubmit, allElementsToValidate),
// );
// inputEmail.addEventListener('input', () =>
//   doValidation(inputEmail, warningMessageEmail, regexEmail, btnSubmit, allElementsToValidate),
// );
// inputEmail.addEventListener('blur', () =>
//   doValidation(inputEmail, warningMessageEmail, regexEmail, btnSubmit, allElementsToValidate),
// );

// document.addEventListener('DOMContentLoaded', event => {
//   form.reset();
// });
// btnSubmit.addEventListener('click', doValidation);
