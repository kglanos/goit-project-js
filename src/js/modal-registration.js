'use strict';

const headerSingUpBtn = document.querySelector('.sign-up-btn');
const headerUserBtn = document.querySelector('.user-btn');
const registrationBackdrop = document.querySelector('.registration-backdrop');
const signUpLink = document.querySelector('.sign-up-link');
const signInLink = document.querySelector('.sign-in-link');
const btnSignUp = document.querySelector('.sign-up-modal');
const btnSignIn = document.querySelector('.sign-in-modal');
const nameInputContainer = document.querySelector('.name-input-container');
const btnCloseRegistrationModal = document.querySelector('.registration-close-btn');
const formRegistration = document.querySelector('.registration-modal-form');
const nameInput = document.querySelector('.input-name');
const emailInput = document.querySelector('.input-email');
const passwordInput = document.querySelector('.input-password');
const messageErrorName = document.querySelector('.name-error');
const messageErrorEmail = document.querySelector('.email-error');
const messageErrorPassword = document.querySelector('.password-error');
const logOutBtn = document.querySelector('.log-out-btn');

const openRegistrationModal = () => {
  formRegistration.reset();
  resetValidation();
  registrationBackdrop.classList.toggle('registration-hidden');
};

const toggleBtnRegistrationSinIn = () => {
  btnSignIn.classList.remove('btn-sing-in-up-hidden');
  btnSignUp.classList.add('btn-sing-in-up-hidden');
  nameInputContainer.classList.add('name-input-hidden');
  messageErrorName.classList.add('warning-valid');
  messageErrorName.classList.remove('warning-invalid');
};

const toggleBtnRegistrationSinUp = () => {
  btnSignIn.classList.add('btn-sing-in-up-hidden');
  btnSignUp.classList.remove('btn-sing-in-up-hidden');
  nameInputContainer.classList.remove('name-input-hidden');
};

const closeRegistrationModal = () => {
  registrationBackdrop.classList.toggle('registration-hidden');
};

const regexName = /^[\p{L}\s]+$/u;
const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const regexPassword = /^.{7,}$/;

const validateButton = (buttonUp, buttonIn, elements) => {
  const allValid = elements.every(element => element.classList.contains('valid'));
  if (allValid) {
    buttonUp.disabled = false;
    buttonUp.classList.remove('disabled');
    buttonIn.disabled = false;
    buttonIn.classList.remove('disabled');
  } else {
    buttonUp.disabled = true;
    buttonUp.classList.add('disabled');
    buttonIn.disabled = true;
    buttonIn.classList.add('disabled');
  }
};

const doValidation = (element, message, regex, buttonUp, buttonIn, elements) => {
  if (!regex.test(element.value)) {
    element.classList.remove('valid');
    element.classList.add('invalid');
    message.classList.remove('warning-valid');
    message.classList.add('warning-invalid');
  } else {
    element.classList.add('valid');
    element.classList.remove('invalid');
    message.classList.add('warning-valid');
    message.classList.remove('warning-invalid');
  }
  validateButton(buttonUp, buttonIn, elements);
};

const allElementsToValidate = [nameInput, emailInput, passwordInput];

nameInput.addEventListener('input', () =>
  doValidation(nameInput, messageErrorName, regexName, btnSignUp, btnSignIn, allElementsToValidate),
);
nameInput.addEventListener('blur', () =>
  doValidation(nameInput, messageErrorName, regexName, btnSignUp, btnSignIn, allElementsToValidate),
);

emailInput.addEventListener('input', () =>
  doValidation(
    emailInput,
    messageErrorEmail,
    regexEmail,
    btnSignUp,
    btnSignIn,
    allElementsToValidate,
  ),
);
emailInput.addEventListener('blur', () =>
  doValidation(
    emailInput,
    messageErrorEmail,
    regexEmail,
    btnSignUp,
    btnSignIn,
    allElementsToValidate,
  ),
);

passwordInput.addEventListener('input', () =>
  doValidation(
    passwordInput,
    messageErrorPassword,
    regexPassword,
    btnSignUp,
    btnSignIn,
    allElementsToValidate,
  ),
);
passwordInput.addEventListener('blur', () =>
  doValidation(
    passwordInput,
    messageErrorPassword,
    regexPassword,
    btnSignUp,
    btnSignIn,
    allElementsToValidate,
  ),
);

const resetValidation = () => {
  allElementsToValidate.forEach(element => {
    element.classList.remove('invalid');
    element.classList.add('valid');
  });

  [messageErrorName, messageErrorEmail, messageErrorPassword].forEach(message => {
    message.classList.remove('warning-invalid');
    message.classList.add('warning-valid');
  });

  btnSignUp.disabled = false;
  btnSignUp.classList.remove('disabled');
  btnSignIn.disabled = false;
  btnSignIn.classList.remove('disabled');
};

const submitRegistrationForm = e => {
  e.preventDefault();
  closeRegistrationModal();
  headerSingUpBtn.classList.toggle('visually-hidden');
  headerUserBtn.classList.toggle('visually-hidden');
  formRegistration.reset();
};

const logOutUser = () => {
  logOutBtn.classList.toggle('visually-hidden');
};

headerSingUpBtn.addEventListener('click', openRegistrationModal);
signInLink.addEventListener('click', toggleBtnRegistrationSinIn);
signUpLink.addEventListener('click', toggleBtnRegistrationSinUp);
btnCloseRegistrationModal.addEventListener('click', closeRegistrationModal);
formRegistration.addEventListener('submit', submitRegistrationForm);
headerUserBtn.addEventListener('click', logOutUser);
