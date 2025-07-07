
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getDatabase, ref, push, onValue } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyAaLeC4nsxlLGX9q3YEoNP47pWiSZGP7LM",
  authDomain: "bnbce2025.firebaseapp.com",
  projectId: "bnbce2025",
  storageBucket: "bnbce2025.firebasestorage.app",
  messagingSenderId: "260200595329",
  appId: "1:260200595329:web:c35215407c2d33af1a7280",
  measurementId: "G-0GETHTCWQG"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

window.addCourse = function () {
    const name = document.getElementById("courseName").value;
    const duration = document.getElementById("duration").value;
    const fee = document.getElementById("fee").value;

    if (!name || !duration || !fee) {
        alert("Please fill all fields.");
        return;
    }

    push(ref(db, "courses"), { name, duration, fee }).then(() => {
        alert("Course added successfully!");
        document.getElementById("courseName").value = "";
        document.getElementById("duration").value = "";
        document.getElementById("fee").value = "";
    });
};
