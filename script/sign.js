document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    const signupForm = document.getElementById("signupForm");
    const loginLink = document.getElementById("loginLink");
    const signupLink = document.getElementById("signupLink");
    const title = document.getElementById("title");
    const signupTitle = document.getElementById("signupTitle");
    const loginFooter = document.getElementById("login-footer");
    const signFooter = document.getElementById("sign-footer");


    signFooter.style.display ="none";
    loginLink.addEventListener("click", function (e) {
      e.preventDefault();
      loginForm.style.display = "block";
      signupForm.style.display = "none";
      title.style.display = "block";
      signupTitle.style.display = "none";
      
      signFooter.style.display ="none";
      loginFooter.style.display = "block";

    });
  
    signupLink.addEventListener("click", function (e) {
      e.preventDefault();
      loginForm.style.display = "none";
      signupForm.style.display = "block";
      title.style.display = "none";
      signupTitle.style.display = "block";
      loginFooter.style.display = "none";
      signFooter.style.display ="block";
    });
  });
  