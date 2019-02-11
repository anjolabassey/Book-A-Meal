const loginModal = document.getElementById("loginmodal");
const signupModal = document.getElementById("signupmodal");
const submitLogin = document.getElementById("submitlogin");
const loginButton = document.getElementById("login-button");
const loginTrigger = document.getElementById("login-trigger");
const signupTrigger = document.getElementById("signup-trigger");
const closeLogin = document.getElementById("close-login");
const closeSignup = document.getElementById("close-signup");

loginTrigger.addEventListener("click", () => {
    loginModal.classList.toggle("show");
});

signupTrigger.addEventListener("click", () => {
    signupModal.classList.toggle("show");
});

//close log in modal when user clicks close button
closeLogin.addEventListener("click", event => {
    loginModal.style.display = "none";
    

});

//close sign up modal when user clicks close button 
closeSignup.addEventListener("click", event => {
    signupModal.style.display = "none";
});

//close log in/sign up modal when user clicks outside of it 
window.onclick = event => {
    if (event.target === loginModal) {
        loginModal.style.display = "none";
    }
    if (event.target === signupModal) {
        signupModal.style.display = "none";
    }
}
