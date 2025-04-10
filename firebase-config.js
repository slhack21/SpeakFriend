import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";
const firebaseConfig = {
  apiKey: "AIzaSyCC1GmDO9pxUwR-9Rz9XYB7nnZshGF7HLM",
  authDomain: "speakfriend-b449a.firebaseapp.com",
  projectId: "speakfriend-b449a",
  storageBucket: "speakfriend-b449a.appspot.com",
  messagingSenderId: "963353950300",
  appId: "1:963353950300:web:63fa147cbb8688a9f4ce99",
};
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
