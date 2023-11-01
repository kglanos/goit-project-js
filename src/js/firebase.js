// import { Notify } from 'notiflix';
// import { initializeApp } from 'firebase/app';
// import { getDatabase, ref, set, onValue } from 'firebase/database';
// import {
//   getAuth,
//   signOut,
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
// } from 'firebase/auth';

// const firebaseConfig = {
//   apiKey: 'AIzaSyAjvSJvQxu47W-Oa1JrSyOVnKx1KBTL5UA',
//   authDomain: 'goit-project-js-bookshelf.firebaseapp.com',
//   projectId: 'goit-project-js-bookshelf',
//   storageBucket: 'goit-project-js-bookshelf.appspot.com',
//   messagingSenderId: '93438368377',
//   appId: '1:93438368377:web:063f56aa4bd4ee23e1d2a8',
//   measurementId: 'G-BRZ6Z5X8NQ',
// };
// initializeApp(firebaseConfig);
// const auth = getAuth();
// const database = getDatabase();

// const signUpBtnModal = document.querySelector('.sign-up-modal');
// const signUpLink = document.querySelector('.sign-up-link');
// const signInLink = document.querySelector('.sign-in-link');
// const logOutHeader = document.querySelector('.log-out-btn');
// const signUpHeader = document.querySelector('.sign-up-btn');
// const userStephen = document.querySelector('.user-btn');
// const inputName = document.querySelector('#user-name');
// const inputEmail = document.querySelector('#user-email');
// const inputPassword = document.querySelector('#user-password');
// const registrationForm = document.querySelector('.registration-modal-form');
// const authorizationModal = document.querySelector('.registration-backdrop');
// const closeBtn = document.querySelector('.registration-close-btn');
// const signUpBtn = [...document.querySelectorAll('.sign-up-btn')];
// const signOutBtn = [...document.querySelectorAll('.log-out-btn')];

// signUpBtn.forEach(el => el.addEventListener('click', onOpenAuthMenu));
// registrationForm.addEventListener('submit', signUp);

// let isAuth = JSON.parse(localStorage.getItem('userAuth'));
// let bookListRef;
// let userRef;
// if (isAuth) {
//   userRef = ref(database, 'users/' + JSON.parse(localStorage.getItem('userAuth')));
//   bookListRef = ref(database, 'usersBookList/' + JSON.parse(localStorage.getItem('userAuth')));
//   signUpBtn.forEach(el => el.removeEventListener('click', onOpenAuthMenu));
//   signOutBtn.forEach(el => el.addEventListener('click', signOuting));
// } else {
//   signUpBtn.forEach(el => el.addEventListener('click', onOpenAuthMenu));
// }

// function signUpModalMarkup(event) {
//   event.preventDefault();
//   registrationForm.elements.userName.style.display = '';
//   signUpBtnModal.textContent = 'Sign up';
//   registrationForm.removeEventListener('submit', signIn);
//   registrationForm.removeEventListener('submit', signUp);
//   registrationForm.addEventListener('submit', signUp);
// }

// function signInModalMarkup(event) {
//   event.preventDefault();
//   registrationForm.elements.userName.style.display = 'none';
//   signUpBtnModal.textContent = 'Sign in';
//   registrationForm.removeEventListener('submit', signUp);
//   registrationForm.removeEventListener('submit', signIn);
//   registrationForm.addEventListener('submit', signIn);
// }

// function signUp(event) {
//   event.preventDefault();
//   const { userPassword, userEmail, userName } = event.target.elements;
//   createUserWithEmailAndPassword(auth, userEmail.value, userPassword.value)
//     .then(userCredential => {
//       const user = userCredential.user;
//       localStorage.setItem('userAuth', JSON.stringify(user.uid));
//       userRef = ref(database, 'users/' + user.uid);
//       bookListRef = ref(database, 'usersBookList/' + user.uid);
//       const userData = JSON.stringify({
//         userName: userName.value,
//         userEmail: userEmail.value,
//       });
//       set(userRef, userData);
//       set(bookListRef, JSON.parse(localStorage.getItem('bookList')));
//       document.querySelector('.user-info').classList.remove('visually-hidden');
//       registrationForm.reset();
//       setUserInfo();
//       onCloseAuthMenu();
//     })
//     .catch(error => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       console.log(errorCode);
//       Notify.failure(
//         'Sorry, you entered incorrect data. Please check the entered data for errors and try again.',
//       );
//     });
// }

// function signIn(event) {
//   event.preventDefault();
//   const { userPassword, userEmail } = event.target.elements;
//   signInWithEmailAndPassword(auth, userEmail.value, userPassword.value, {
//     remember: true,
//   })
//     .then(userCredential => {
//       const user = userCredential.user;
//       bookListRef = ref(database, 'usersBookList/' + user.uid);
//       localStorage.setItem('userAuth', JSON.stringify(user.uid));
//       onValue(bookListRef, snapshot => {
//         const data = snapshot.val();
//         localStorage.setItem('bookList', data);
//         //dodać div z klasą user-info do info o userze w menu mobilnym
//         // document.querySelector('.user-info').classList.remove('visually-hidden');
//         registrationForm.reset();
//       });
//       setUserInfo();
//       onCloseAuthMenu();
//     })
//     .catch(error => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       console.log(errorMessage);
//       Notify.failure(
//         'Sorry, you entered incorrect data. Please check the entered data for errors and try again.',
//       );
//     });
// }

// function onCloseAuthMenu() {
//   document.body.classList.remove('registration-modal');
//   authorizationModal.classList.add('visually-hidden');
//   signUpLink.removeEventListener('click', signUpModalMarkup);
//   signInLink.removeEventListener('click', signInModalMarkup);
//   closeBtn.removeEventListener('click', onCloseAuthMenu);
// }
// function onOpenAuthMenu() {
//   document.body.classList.add('registration-modal');
//   authorizationModal.classList.remove('registration-hidden');
//   signUpLink.addEventListener('click', signUpModalMarkup);
//   signInLink.addEventListener('click', signInModalMarkup);
//   closeBtn.addEventListener('click', onCloseAuthMenu);
// }

// function signOuting() {
//   signOut(auth)
//     .then(() => {
//       userRef = null;
//       localStorage.removeItem('userAuth');
//       localStorage.removeItem('userOption');
//       localStorage.removeItem('bookList');
//       //dodać div z klasą user-info do info o userze w menu mobilnym
//       //   document.querySelector('.user-info').classList.add('visually-hidden');
//       document.location.reload();
//     })
//     .catch(error => {
//       console.log(error);
//     });
// }
// function setUserInfo() {
//   onValue(ref(database, 'users/' + JSON.parse(localStorage.getItem('userAuth'))), snapshot => {
//     const data = snapshot.val();
//     localStorage.setItem('userOption', data);
//     const user = JSON.parse(data);
//     window.setTimeout(() => document.location.reload(), 1000);
//     // document.location.reload();
//   });
// }

// export function addToFierbase() {
//   if (isAuth) {
//     const cartDataFromLocalStorage = localStorage.getItem('bookList');
//     set(bookListRef, cartDataFromLocalStorage);
//   } else {
//     Notify.warning(
//       'If you want to save changes in your Shopping List, please log in to your account or create it',
//     );
//   }
// }
