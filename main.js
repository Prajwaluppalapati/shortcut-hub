//Firebase config
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";

import { 
  getAuth, 
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

onAuthStateChanged(auth, (user) => {
  if (user) {
    const name = user.displayName || user.email;
    const photo = user.photoURL || "https://via.placeholder.com/40";

    document.getElementById("userName").innerText = name;
    document.getElementById("profilePic").src = photo;
    document.getElementById("userEmail").innerText = user.email;

  } else {
    // not logged in → go back
    window.location.href = "index.html";
  }
});

//Profile dropdown 
const profilePic = document.getElementById("profilePic");
const dropdown = document.getElementById("profile_dropdown");

profilePic.addEventListener("click", () => {
  dropdown.classList.toggle("show");
});

document.addEventListener("click", (e) => {
  if (!profilePic.contains(e.target) && !dropdown.contains(e.target)) {
    dropdown.classList.remove("show");
  }
});
