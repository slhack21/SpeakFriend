import { auth, db } from './firebase-config.js';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
import { doc, setDoc, getDoc, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";

const signupForm = document.getElementById('signupForm');
if (signupForm) {
  signupForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const pseudo = document.getElementById('pseudo').value;
    const res = await createUserWithEmailAndPassword(auth, email, password);
    await setDoc(doc(db, "users", res.user.uid), { pseudo, email });
    alert("Compte créé !");
    window.location.href = "messaging.html";
  });
}

const loginForm = document.getElementById('loginForm');
if (loginForm) {
  loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    await signInWithEmailAndPassword(auth, email, password);
    alert("Connecté !");
    window.location.href = "messaging.html";
  });
}
