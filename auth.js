
// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyDdhffMPmSVm3-jkKniU0b-LbljKndXM7c",
    authDomain: "gdscactivity.firebaseapp.com",
    projectId: "gdscactivity",
    storageBucket: "gdscactivity.firebasestorage.app",
    messagingSenderId: "1064818545397",
    appId: "1:1064818545397:web:38e5bd5b2e4253b317abbc",
    measurementId: "G-WDNS22BMP1"
  };
  
// Initialize Firebase (Prevent multiple initializations)
if (!firebase.apps.length) {

// Ensure Firebase is loaded
document.addEventListener("DOMContentLoaded", function () {
    // Firebase Configuration
    const firebaseConfig = {
        apiKey: "AIzaSyCH3WhU8sZXerI0zz_Q2_dHQp4XFFAStpQ",
        authDomain: "gdsc-project-xu.firebaseapp.com",
        projectId: "gdsc-project-xu",
        storageBucket: "gdsc-project-xu.appspot.com",
        messagingSenderId: "603170953076",
        appId: "1:603170953076:web:9d8f560213101fd1373e21",
        measurementId: "G-HW4MXCHMLT"
    };

    // Initialize Firebase
f370a78307b5249cfa80f76aca3dfb43325ac4cc
    firebase.initializeApp(firebaseConfig);
    const auth = firebase.auth();

    // Login Function
    document.querySelector("#login-button")?.addEventListener("click", (e) => {
        e.preventDefault();
        
        const email = document.querySelector("#email").value;
        const password = document.querySelector("#password").value;
        const messageElement = document.querySelector("#login-message");

        if (!email || !password) {
            messageElement.textContent = "Please fill in both fields.";
            return;
        }

        auth.signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                console.log("User logged in:", userCredential.user.email);
                window.location.href = "dashboard.html"; 
            })
            .catch((error) => {
                console.error("Login Error:", error.message);
                messageElement.textContent = error.message;
            });
    });

    // Signup Function
    document.querySelector("#signup-button")?.addEventListener("click", (e) => {
        e.preventDefault();

        const email = document.querySelector("#signup-email").value;
        const password = document.querySelector("#signup-password").value;
        const confirmPassword = document.querySelector("#signup-confirm-password").value;
        const messageElement = document.querySelector("#signup-message");

        if (!email || !password || !confirmPassword) {
            messageElement.textContent = "Please fill in all fields.";
            return;
        }

        if (password !== confirmPassword) {
            messageElement.textContent = "Passwords do not match!";
            return;
        }

        auth.createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                console.log("User signed up:", userCredential.user.email);
                window.location.href = "login.html"; 
            })
            .catch((error) => {
                console.error("Signup Error:", error.message);
                messageElement.textContent = error.message;
            });
    });
});
