document.addEventListener("DOMContentLoaded", () => {
  document.fonts.ready.then(() => {
    document.documentElement.classList.add("wf-active");
  });

  const login = document.querySelector(".login");
  const loginForm = document.querySelector(".loginForm");
  login.addEventListener("click", (e) => {
    const loginSctn = document.querySelector(".login-sctn");
    e.preventDefault();
    loginSctn.classList.add("login-flex");
    loginSctn.classList.remove("login-none");
    const closeLogin = document.querySelector(".login-close");
    closeLogin.addEventListener("click", (e) => {
      e.preventDefault();
      loginSctn.classList.remove("login-flex");
      loginSctn.classList.add("login-none");
    });
    window.addEventListener("click", (e) => {
      if (!loginForm.contains(e.target) && e.target !== login && e.target !== closeLogin) {
        loginSctn.classList.remove("login-flex");
        loginSctn.classList.add("login-none");
      }
    });
  });

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
