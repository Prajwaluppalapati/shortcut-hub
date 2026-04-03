import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";

import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCFEB6eJI3dEVbuYjgEhjvl9hotpSnjuxE",
  authDomain: "prajwals-websites.firebaseapp.com",
  projectId: "prajwals-websites",
  storageBucket: "prajwals-websites.firebasestorage.app",
  messagingSenderId: "925211115074",
  appId: "1:925211115074:web:e9292af5941bcc0039f7db"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// SIGNUP
window.signup = () => {
  createUserWithEmailAndPassword(
    auth,
    email.value,
    password.value
  )
  .then(() => alert("Account created"))
  .catch(err => alert(err.message));
};

// LOGIN
window.login = () => {
  signInWithEmailAndPassword(
    auth,
    email.value,
    password.value
  )
  .then(() => window.location.href = "main.html")
  .catch(err => alert(err.message));
};

// GOOGLE LOGIN
window.googleLogin = () => {
  const provider = new GoogleAuthProvider();

  signInWithPopup(auth, provider)
    .then(() => window.location.href = "main.html")
    .catch(err => alert(err.message));
};

// SESSION CHECK
onAuthStateChanged(auth, (user) => {
  console.log(user ? "Logged in" : "Not logged in");
});