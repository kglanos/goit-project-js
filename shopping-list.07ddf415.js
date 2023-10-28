var e=globalThis,t={},r={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in r){var o=r[e];delete r[e];var l={id:e,exports:{}};return t[e]=l,o.call(l.exports,l,l.exports),l.exports}var s=Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){r[e]=t},e.parcelRequired7c6=o),o.register,o("kM5jX"),o("haS5e"),o("fQwj1"),o("a7nVE"),(()=>{let e={openModalBtns:document.querySelectorAll("[registration-data-modal-open]"),closeModalBtn:document.querySelector("[registration-data-modal-close]"),modal:document.querySelector("[registration-data-modal]")};function t(){e.modal.classList.toggle("is-hidden")}e.openModalBtns.forEach(e=>{e.addEventListener("click",t)}),e.closeModalBtn.addEventListener("click",t)})();// sposób 1
const l=document.querySelector("#user-email"),s=document.querySelector("#user-password"),n=document.querySelector(".registration-modal-form");document.querySelector(".msg");const a=document.querySelector(".sign-up-modal");document.querySelector(".sign-up-link"),document.querySelector(".sign-in-link"),document.querySelector(".log-out-btn"),document.querySelector(".sign-up-btn");// Function to validate the email
const d=e=>e.value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),i=e=>e.value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),u=(e,t)=>{let r=document.getElementById("emailError"),o=document.getElementById("passwordError");"email"==e?r.innerText=t:"password"==e&&(o.innerText=t)},c=(e,t)=>{if(!d(e)){u("email",emailError="please enter a valid email address");return}if(!i(t)){u(u("password",passwordError="please enter correct password"));return}};//triggers when user submits the form
n.addEventListener("submit",e=>{e.preventDefault(),c(l,s),document.querySelector("[registration-data-modal]").classList.toggle("visually-hidden"),document.querySelector(".sign-up-btn").classList.toggle("visually-hidden"),document.querySelector(".user-btn").classList.remove("visually-hidden"),document.querySelector(".log-out-btn").classList.remove("visually-hidden")}),a.addEventListener("click",e=>{e.preventDefault(),c(l,s),document.querySelector("[registration-data-modal]").classList.toggle("visually-hidden"),document.querySelector(".sign-up-btn").classList.toggle("visually-hidden"),document.querySelector(".user-btn").classList.remove("visually-hidden"),document.querySelector(".log-out-btn").classList.remove("visually-hidden"),n.reset()}),// Focusout event listener. Triggers when the user clicks anywhere else besides the input
l.addEventListener("focusout",e=>{d(l)||(l.style.borderColor="red",u("email","Please enter a valid email"),l.parentElement.classList.add("error"))}),// Focusout event listener triggers when the user clicks anywhere else besides the input
s.addEventListener("focusout",e=>{i(s)||(s.style.borderColor="red",u("password","Please enter a valid password"),s.parentElement.classList.add("error"))}),// const signUpBtnModal = document.querySelector('.sign-up-modal');
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
o("2DTLi"),o("865h4");//# sourceMappingURL=shopping-list.07ddf415.js.map

//# sourceMappingURL=shopping-list.07ddf415.js.map
