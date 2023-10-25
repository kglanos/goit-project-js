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

const signUpLink = document.querySelector('.sign-up-link');
const signInLink = document.querySelector('.sign-in-link');
const signOutLink = document.querySelector('.sign-out-link');
const registrationForm = document.querySelector('.registration-modal-form');
const authorizationModal = document.querySelector('.registration-backdrop');
const signInBtnModal = document.querySelector('.signin-btn');
const closeBtn = document.querySelector('.registration-close-btn');
const signUpBtn = [...document.querySelectorAll('.sign-up-btn')];
const signOutBtn = [...document.querySelectorAll('.sign-out-btn')];
const inputName = document.querySelector('#user-name');
const inputEmail = document.querySelector('#user-email');
const inputPassword = document.querySelector('#user-password');

// Log in
const loginEmailPassword = async () => {
  const loginEmail = inputEmail.value;
  const loginPassword = inputPassword.value;

  await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
};

// Log up
const createAccount = async () => {
  const email = inputEmail.value;
  const password = inputPassword.value;

  try {
    await createUserWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(`There was an error: ${error}`);
    showLoginError(error);
  }
};

// Monitor auth state
const monitorAuthState = async () => {
  onAuthStateChanged(auth, user => {
    if (user) {
      console.log(user);
      showApp();
      showLoginState(user);

      hideLoginError();
      hideLinkError();
    } else {
      showLoginForm();
      lblAuthState.innerHTML = `You're not logged in.`;
    }
  });
};

// Log out
const logout = async () => {
  await signOut(auth);
};

signInBtnModal.addEventListener('click', loginEmailPassword);
signUpLink.addEventListener('click', createAccount);
signOutBtn.addEventListener('click', logout);

const auth = getAuth(firebaseApp);
connectAuthEmulator(auth, 'http://localhost:9099');

monitorAuthState();
