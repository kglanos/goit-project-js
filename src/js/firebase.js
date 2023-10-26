import { Notify } from 'notiflix';
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  connectAuthEmulator,
} from 'firebase/auth';

const firebaseApp = initializeApp({
  apiKey: 'AIzaSyAjvSJvQxu47W-Oa1JrSyOVnKx1KBTL5UA',
  authDomain: 'goit-project-js-bookshelf.firebaseapp.com',
  projectId: 'goit-project-js-bookshelf',
  storageBucket: 'goit-project-js-bookshelf.appspot.com',
  messagingSenderId: '93438368377',
  appId: '1:93438368377:web:063f56aa4bd4ee23e1d2a8',
  measurementId: 'G-BRZ6Z5X8NQ',
});

const signUpBtnModal = document.querySelector('.sign-up-modal');
const signUpLink = document.querySelector('.sign-up-link');
const signInLink = document.querySelector('.sign-in-link');
const logOutLink = document.querySelector('.log-out-btn');
const registrationForm = document.querySelector('.registration-modal-form');
const authorizationModal = document.querySelector('.registration-backdrop');
const closeBtn = document.querySelector('.registration-close-btn');
const signUpBtn = [...document.querySelectorAll('.sign-up-btn')];
const signOutBtn = [...document.querySelectorAll('.log-out-btn')];
const inputName = document.querySelector('#user-name');
const inputEmail = document.querySelector('#user-email');
const inputPassword = document.querySelector('#user-password');

const auth = getAuth(app);
const app = initializeApp(firebaseConfig);

// Sign up

signUpBtnModal.addEventListener('click', e => {
  e.preventDefault(),
    createUserWithEmailAndPassword(auth, inputEmail.value, inputPassword.value)
      .then(userCredential => {
        (user = userCredential.user),
          document.querySelector('.sign-up-btn').classList.toggle('.is-hidden'),
          document.querySelector('.user-btn').classList.remove('.is-hidden');
        Notify.success(`You're signed up!`);
      })
      .catch(error => {
        const errorCode = error.message;
        console.log(errorCode, errorMessage);
      });
});

// Sign in

signInLink.addEventListener('click', e => {
  e.preventDefault(),
    signInWithEmailAndPassword(auth, inputEmail.value, inputPassword.value)
      .then(userCredential => {
        (user = userCredential.user),
          document.querySelector('[registration-data-modal]').classList.toggle('is-hidden'),
          document.querySelector('.sign-up-btn').classList.toggle('.is-hidden'),
          document.querySelector('.user-btn').classList.remove('.is-hidden'),
          document.querySelector('.log-out-btn').classList.remove('.visually-hiden');
        Notify.success(`You're logged in!`);
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        Notify.failure(`Wrong email or password. Try again.`);
      });
});

// Log out

logOutLink.addEventListener('click', e => {
  e.preventDefault(),
    signOut(auth)
      .then(() => {
        return (
          signUpBtnModal.classList.toggle('is-hidden'),
          logOutLink.classList.toggle('is-hidden'),
          Notify.info('You are logged out!')
        );
      })
      .catch(error => {
        Notify.info('You are logged out!');
      });
});

onAuthStateChanged(auth, user => {
  if (user) {
    signUpBtnModal.classList.toggle('is-hidden'), logOutLink.classList.toggle('is-hidden');
    const uid = user.uid;
  } else {
    //User is signed out
  }
});
