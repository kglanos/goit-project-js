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

// const registerForm = document.querySelector('.registration-modal-form');

// registerForm.addEventListener('submit', handleSubmit);

// function handleSubmit(event) {
//   event.preventDefault();
//   const form = event.target;
//   const name = form.elements.name.value;
//   const login = form.elements.login.value;
//   const password = form.elements.password.value;

//   if (login === '' || password === '' || name === '') {
//     return console.log('Please fill in all the fields!');
//   }

//   console.log(`Name: ${name.value}, Login: ${login.value}, Password: ${password.value}`);
//   form.reset();
// }

// WALIDACJA Z EMAIL I NAME

// const form = document.querySelector('.registration-modal-form');
// const btnSubmit = document.querySelector('.signup-btn');
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

// // eslint-disable-next-line no-unused-vars
// document.addEventListener('DOMContentLoaded', event => {
//   form.reset();
// });
