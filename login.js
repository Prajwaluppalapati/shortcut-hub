import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";

import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  updateProfile
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
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!name) {
    alert("Please enter your name");
    return;
  }

  createUserWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
      const user = userCredential.user;

      // ✅ Save name
      await updateProfile(user, {
        displayName: name
      });

      alert("Account created!");
      window.location.href = "main.html";
    })
    .catch(err => alert(err.message));
};

// LOGIN
window.login = () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
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

// ✅ AUTO REDIRECT IF ALREADY LOGGED IN
onAuthStateChanged(auth, (user) => {
  if (user) {
    window.location.href = "main.html";
  } else {
    console.log("Not logged in");
  }
});