import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
 import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, FacebookAuthProvider, GithubAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";

        // Your web app's Firebase configuration
        const firebaseConfig = {
            apiKey: "AIzaSyDGEGT3RedbpTtl8TdzZtoAG38BupTC8WI",
            authDomain: "127.0.0.1",
            projectId: "unighana-90249",
            appId: "YOUR_APP_ID"
        };

        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        const auth = getAuth(app);

        // Handle email and password sign in
        document.getElementById('signInForm').addEventListener('submit', function(event) {
            event.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    alert(`Hello, ${user.email}`);
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    alert(`Error: ${errorMessage}`);
                });
        });

        // Handle Google sign in
        document.getElementById('googleSignInBtn').addEventListener('click', function() {
            const provider = new GoogleAuthProvider();
            signInWithPopup(auth, provider)
                .then((result) => {
                    const user = result.user;
                    alert(`Hello, ${user.displayName}`);
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    alert(`Error: ${errorMessage}`);
                });
        });

        // Handle Facebook sign in
        document.getElementById('facebookSignInBtn').addEventListener('click', function() {
            const provider = new FacebookAuthProvider();
            signInWithPopup(auth, provider)
                .then((result) => {
                    const user = result.user;
                    alert(`Hello, ${user.displayName}`);
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    alert(`Error: ${errorMessage}`);
                });
        });

        // Handle GitHub sign in
        document.getElementById('githubSignInBtn').addEventListener('click', function() {
            const provider = new GithubAuthProvider();
            signInWithPopup(auth, provider)
                .then((result) => {
                    const user = result.user;
                    alert(`Hello, ${user.displayName}`);
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    alert(`Error: ${errorMessage}`);
                });
        });