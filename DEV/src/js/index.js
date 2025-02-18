document.addEventListener("DOMContentLoaded", () => {
  document.fonts.ready.then(() => {
    document.documentElement.classList.add("wf-active");
  });

  const logins = document.querySelectorAll(".login")
  for (const login of logins) {
    login.addEventListener("click", openLogin); 
    login.addEventListener("touchstart", openLogin);
  }
  
  const loginForm = document.querySelector(".loginForm");
  const closeLogin = document.querySelector(".login-close");
  
  function openLogin(e) {
    console.log("Login-Modal öffnet sich");
    const loginSctn = document.querySelector(".login-sctn");
  e.preventDefault();
    loginSctn.classList.add("login-flex");
    loginSctn.classList.remove("login-none");

    
    closeLogin.addEventListener("click", closeLoginModal)
      
}
function closeLoginModal(e) {
    const loginSctn = document.querySelector(".login-sctn");
    e.preventDefault();
      loginSctn.classList.remove("login-flex");
      loginSctn.classList.add("login-none");
  
}
  

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
