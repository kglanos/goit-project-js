import { Notify } from 'Notiflix';
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

// // Log in
// const loginEmailPassword = async () => {
//   const loginEmail = inputEmail.value;
//   const loginPassword = inputPassword.value;

// const showLoginForm = () => {
//   login.style.display = 'block';
//   app.style.display = 'none';
// };

// const showApp = () => {
//   login.style.display = 'none';
//   app.style.display = 'block';
// };

// const hideLoginError = () => {
//   divLoginError.style.display = 'none';
//   lblLoginErrorMessage.innerHTML = '';
// };

// const showLoginError = error => {
//   divLoginError.style.display = 'block';
//   if (error.code == AuthErrorCodes.INVALID_PASSWORD) {
//     lblLoginErrorMessage.innerHTML = `Wrong password. Try again.`;
//   } else {
//     lblLoginErrorMessage.innerHTML = `Error: ${error.message}`;
//   }
// };

// const showLoginState = user => {
//   lblAuthState.innerHTML = `You're logged in as ${user.displayName} (uid: ${user.uid}, email: ${user.email}) `;
// };

// hideLoginError();

//   await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
// };

// // Log up
// const createAccount = async () => {
//   const email = inputEmail.value;
//   const password = inputPassword.value;

//   try {
//     await createUserWithEmailAndPassword(auth, email, password);
//   } catch (error) {
//     console.log(`There was an error: ${error}`);
//     showLoginError(error);
//   }
// };

// // Monitor auth state
// const monitorAuthState = async () => {
//   onAuthStateChanged(auth, user => {
//     if (user) {
//       console.log(user);
//       showApp();
//       showLoginState(user);

//       hideLoginError();
//       hideLinkError();
//     } else {
//       showLoginForm();
//       lblAuthState.innerHTML = `You're not logged in.`;
//     }
//   });
// };

// // Log out
// const logout = async () => {
//   await signOut(auth);
// };

// signInBtnModal.addEventListener('click', loginEmailPassword);
// signUpLink.addEventListener('click', createAccount);
// signOutBtn.addEventListener('click', logout);

// const auth = getAuth(firebaseApp);
// connectAuthEmulator(auth, 'http://localhost:1234');

// monitorAuthState();

const auth = getAuth(app);
const app = initializeApp(firebaseConfig);

// Sign up

signUpLink.addEventListener('click', e => {
  e.preventDefault(),
    createUserWithEmailAndPassword(auth, inputEmail.value, inpotPassword.value)
      .then(userCredential => {
        const user = userCredential.user;
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
          document.querySelector('[login-modal]').classList.toggle('is-hidden');
        Notify.success(`You're logged in!`);
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        Notify.failure(`Wrong email or password. Try again.`);
      });
});

// Log out

signOutBtn.addEventListener('click', e => {
  e.preventDefault(),
    signOut(auth)
      .then(() => {
        return (
          signUpBtn.classList.toggle('is-hidden'),
          signOutBtn.classList.toggle('is-hiddeb'),
          Notify.info('You are logged out!')
        );
      })
      .catch(error => {
        Notify.info('You are logged out!');
      });
});

onAuthStateChanged(auth, user => {
  if (user) {
    signUpBtn.classList.toggle('is-hidden'), signOutBtn.classList.toggle('is-hidden');
    const uid = user.uid;
  } else {
    //User is signed out
  }
});
