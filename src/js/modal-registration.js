// 'use strict';
// import { Notify } from 'notiflix';

// const headerSignUpBtn = document.querySelector('.sign-up-btn');
// const headerUserBtn = document.querySelector('.user-btn');
// const mobileSignUpBtn = document.querySelector('.sign-up-mobile-btn');
// const mobileUserBtn = document.querySelector('.user-mobile-btn');
// const registrationBackdrop = document.querySelector('.registration-backdrop');
// const signUpLink = document.querySelector('.sign-up-link');
// const signInLink = document.querySelector('.sign-in-link');
// const btnSignUp = document.querySelector('.sign-up-modal');
// const btnSignIn = document.querySelector('.sign-in-modal');
// const nameInputContainer = document.querySelector('.name-input-container');
// const btnCloseRegistrationModal = document.querySelector('.registration-close-btn');
// const formRegistration = document.querySelector('.registration-modal-form');
// const nameInput = document.querySelector('.input-name');
// const emailInput = document.querySelector('.input-email');
// const passwordInput = document.querySelector('.input-password');
// const messageErrorName = document.querySelector('.name-error');
// const messageErrorEmail = document.querySelector('.email-error');
// const messageErrorPassword = document.querySelector('.password-error');
// const logOutBtn = document.querySelector('.log-out-btn');
// const mobileLogOut = document.querySelector('.log-out-mobile-btn');
// const name = nameInput.value;

// const openRegistrationModal = () => {
//   formRegistration.reset();
//   resetValidation();
//   btnSignUp.disabled = true;
//   btnSignUp.classList.add('disabled');
//   btnSignIn.disabled = true;
//   btnSignIn.classList.add('disabled');
//   registrationBackdrop.classList.toggle('registration-hidden');
// };

// const toggleBtnRegistrationSignIn = () => {
//   btnSignIn.classList.remove('btn-sign-in-up-hidden');
//   btnSignUp.classList.add('btn-sign-in-up-hidden');
//   nameInputContainer.classList.add('name-input-hidden');
//   messageErrorName.classList.add('warning-valid');
//   messageErrorName.classList.remove('warning-invalid');
// };

// const toggleBtnRegistrationSignUp = () => {
//   btnSignIn.classList.add('btn-sign-in-up-hidden');
//   btnSignUp.classList.remove('btn-sign-in-up-hidden');
//   nameInputContainer.classList.remove('name-input-hidden');
//   btnSignUp.disabled = true;
//   btnSignUp.classList.add('disabled');
// };

// const closeRegistrationModal = () => {
//   registrationBackdrop.classList.toggle('registration-hidden');
// };

// const regexName = /^[\p{L}\s]+$/u;
// const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
// const regexPassword = /^.{7,}$/;

// const validateButton = (buttonUp, buttonIn, elements) => {
//   const allValid = elements.every(element => element.classList.contains('valid'));
//   if (allValid) {
//     buttonUp.disabled = false;
//     buttonUp.classList.remove('disabled');
//     buttonIn.disabled = false;
//     buttonIn.classList.remove('disabled');
//   } else {
//     buttonUp.disabled = true;
//     buttonUp.classList.add('disabled');
//     buttonIn.disabled = true;
//     buttonIn.classList.add('disabled');
//   }
// };

// const doValidation = (element, message, regex, buttonUp, buttonIn, elements) => {
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
//   }
//   validateButton(buttonUp, buttonIn, elements);
// };

// const allElementsToValidate = [nameInput, emailInput, passwordInput];

// nameInput.addEventListener('input', () =>
//   doValidation(nameInput, messageErrorName, regexName, btnSignUp, btnSignIn, allElementsToValidate),
// );
// nameInput.addEventListener('blur', () =>
//   doValidation(nameInput, messageErrorName, regexName, btnSignUp, btnSignIn, allElementsToValidate),
// );

// emailInput.addEventListener('input', () =>
//   doValidation(
//     emailInput,
//     messageErrorEmail,
//     regexEmail,
//     btnSignUp,
//     btnSignIn,
//     allElementsToValidate,
//   ),
// );
// emailInput.addEventListener('blur', () =>
//   doValidation(
//     emailInput,
//     messageErrorEmail,
//     regexEmail,
//     btnSignUp,
//     btnSignIn,
//     allElementsToValidate,
//   ),
// );

// passwordInput.addEventListener('input', () =>
//   doValidation(
//     passwordInput,
//     messageErrorPassword,
//     regexPassword,
//     btnSignUp,
//     btnSignIn,
//     allElementsToValidate,
//   ),
// );
// passwordInput.addEventListener('blur', () =>
//   doValidation(
//     passwordInput,
//     messageErrorPassword,
//     regexPassword,
//     btnSignUp,
//     btnSignIn,
//     allElementsToValidate,
//   ),
// );

// const resetValidation = () => {
//   allElementsToValidate.forEach(element => {
//     element.classList.remove('invalid');
//     element.classList.add('valid');
//   });

//   [messageErrorName, messageErrorEmail, messageErrorPassword].forEach(message => {
//     message.classList.remove('warning-invalid');
//     message.classList.add('warning-valid');
//   });
// };

// const submitRegistrationForm = e => {
//   e.preventDefault();
//   closeRegistrationModal();
//   headerSignUpBtn.classList.toggle('visually-hidden');
//   headerUserBtn.classList.toggle('visually-hidden');
//   mobileSignUpBtn.classList.toggle('visually-hidden');
//   mobileUserBtn.classList.toggle('visually-hidden');
//   mobileLogOut.classList.toggle('visually-hidden');
//   headerUserBtn.innerHTML = name;
//   mobileUserBtn.innerHTML = name;
//   formRegistration.reset();
//   Notify.success(`You are sign in!`);
// };

// const logOutUser = () => {
//   logOutBtn.classList.toggle('visually-hidden');
//   mobileLogOut.classList.toggle('visually-hidden');
// };

// const afterLogOut = () => {
//   logOutBtn.classList.add('visually-hidden');
//   headerUserBtn.classList.toggle('visually-hidden');
//   headerSignUpBtn.classList.toggle('visually-hidden');
//   mobileLogOut.classList.add('visually-hidden');
//   mobileUserBtn.classList.toggle('visually-hidden');
//   mobileSignUpBtn.classList.toggle('visually-hidden');
//   Notify.info(`You are logged out!`);
// };

// headerSignUpBtn.addEventListener('click', openRegistrationModal);
// mobileSignUpBtn.addEventListener('click', openRegistrationModal);
// signInLink.addEventListener('click', toggleBtnRegistrationSignIn);
// signUpLink.addEventListener('click', toggleBtnRegistrationSignUp);
// btnCloseRegistrationModal.addEventListener('click', closeRegistrationModal);
// formRegistration.addEventListener('submit', submitRegistrationForm);
// headerUserBtn.addEventListener('click', logOutUser);
// // mobileUserBtn.addEventListener('click', logOutUser);
// logOutBtn.addEventListener('click', afterLogOut);
// mobileLogOut.addEventListener('click', afterLogOut);
