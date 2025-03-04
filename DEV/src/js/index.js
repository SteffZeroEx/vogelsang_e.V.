document.addEventListener("DOMContentLoaded", () => {
  //? FONTS LOADING
  document.fonts.ready.then(() => {
    document.documentElement.classList.add("wf-active");
  });

  //? LOGIN AND OPEN MODAL
  const logins = document.querySelectorAll(".login");
  for (const login of logins) {
    login.addEventListener("click", openLogin);
    login.addEventListener("touchstart", openLogin);
  }

  const loginForm = document.querySelector(".loginForm");
  const closeLogin = document.querySelector(".login-close");
  const usernameInput = document.getElementById("usernameInput");
  const passwordInput = document.getElementById("passwordInput");
  const togglePassword = document.getElementById("togglePassword");
  const loginBtn = document.getElementById("loginBtn");

  function openLogin(e) {
    console.log("Login-Modal öffnet sich");
    const loginSctn = document.querySelector(".login-sctn");
    e.preventDefault();
    loginSctn.classList.add("login-flex");
    loginSctn.classList.remove("login-none");

    closeLogin.addEventListener("click", closeLoginModal);
    loginSctn.addEventListener("click", (e)=> {
      if (!loginForm.contains(e.target)) {
        closeLoginModal(e);
      }
    });



    //? PASSWORD CHECK
    loginBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const errorUser = document.querySelector(".error-user");
      const errorPw = document.querySelector(".error-pw");

      let isUsernameCorrect = false;
      let isPasswordCorrect = false;

      if (usernameInput.value === atob("Vm9yc3RhbmRWb2dlbHNhbmdTYXc=")) {
        errorUser.classList.remove("error");
        errorUser.innerText = "Der Name war richtig! (Ab hier erfolgen demnächst weitere Aktionen)";
        isUsernameCorrect = true;
      } else {
        errorUser.innerText = "Der Benutzername ist ungültig";
        errorUser.classList.add("error");
      }

      if (passwordInput.value === atob("Vm9yc3RhbmRTYXc")) {
        errorPw.classList.remove("error");
        errorPw.innerText = "Das Passwort war richtig! (Hier folgen demnächst weitere Aktionen)";
        isPasswordCorrect = true;
      } else {
        errorPw.innerText = "Das Passwort ist ungültig!";
        errorPw.classList.add("error");
      }

      if (isUsernameCorrect && isPasswordCorrect) {
        alert(
          "Ab hier erfolgen demnächst die Bereitstellungen von Buttons und weiteren Interaktionen zum Hinzufügen von Artikeln und zum Ändern der jeweiligen Nutzerdaten des Vereins"
        );
      }
    });

    //? SHOW LOGINPASSWORD
    togglePassword.addEventListener("click", () => {
      if (passwordInput.type === "password") {
        passwordInput.type = "text";
      } else {
        passwordInput.type = "password";
      }
    });
  }
  function closeLoginModal(e) {
    const loginSctn = document.querySelector(".login-sctn");
    e.preventDefault();
    loginSctn.classList.remove("login-flex");
    loginSctn.classList.add("login-none");
  }

  //? NAVIGATION MENUE
  const menueBtn = document.querySelector(".menue-btn");
  menueBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const menueList = document.querySelector(".menue-list");
    menueList.classList.toggle("menue-list-visible");

    window.addEventListener("click", (e) => {
      if (!menueList.contains(e.target) && e.target !== menueBtn) {
        menueList.classList.remove("menue-list-visible");
      }
    });
  });
});
