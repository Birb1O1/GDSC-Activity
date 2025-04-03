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
    firebase.initializeApp(firebaseConfig);
}
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
            const user = userCredential.user;
            console.log("User logged in: ", user.email);
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
            const user = userCredential.user;
            console.log("User signed up: ", user.email);
            window.location.href = "login.html"; 
        })
        .catch((error) => {
            console.error("Signup Error:", error.message);
            messageElement.textContent = error.message;
        });
});
