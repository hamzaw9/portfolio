document.addEventListener("DOMContentLoaded", () => {
  /** ****    Mobile-menu       ***** */

  document.querySelector(".menu").addEventListener("click", () => {
    document.querySelector("#navbar").classList.add("nav-mbl");
    document.querySelector("#navbar").classList.remove("nav-mbl-inactive");
    document.querySelector(".close-menu").style.display = "block";
    document.querySelector(".menu").style.display = "none";
  });
  document.querySelector(".close-menu").addEventListener("click", () => {
    document.querySelector("#navbar").classList.add("nav-mbl-inactive");
    document.querySelector("#navbar").classList.remove("nav-mbl");
    document.querySelector(".close-menu").style.display = "none";
    document.querySelector(".menu").style.display = "block";
  });

  function updateMenuVisibility() {
    const windowWidth = window.innerWidth;
    const menuElement = document.querySelector(".menu");
    if (windowWidth >= 786) {
      menuElement.style.display = "none";
    } else {
      menuElement.style.display = "block";
    }
  }

  updateMenuVisibility();

  window.addEventListener("resize", updateMenuVisibility);

  document.querySelector(".menu1").addEventListener("click", () => {
    document.querySelector("#navbar").classList.add("nav-mbl-inactive");
    document.querySelector("#navbar").classList.remove("nav-mbl");
    document.querySelector(".close-menu").style.display = "none";
    updateMenuVisibility();
  });
  document.querySelector(".menu2").addEventListener("click", () => {
    document.querySelector("#navbar").classList.add("nav-mbl-inactive");
    document.querySelector("#navbar").classList.remove("nav-mbl");
    document.querySelector(".close-menu").style.display = "none";
    updateMenuVisibility();
  });
  document.querySelector(".menu3").addEventListener("click", () => {
    document.querySelector("#navbar").classList.add("nav-mbl-inactive");
    document.querySelector("#navbar").classList.remove("nav-mbl");
    document.querySelector(".close-menu").style.display = "none";
    updateMenuVisibility();
  });

  /** ****    Form Validation       ***** */
  const form = document.querySelector("#form");
  const formSubmit = form.querySelector(".form-submit");
  const email = form.querySelector("#email");
  const showError = form.querySelector("span");
  function emailLowerCase() {
    const emailValue = email.value;
    if (emailValue.toLowerCase() === emailValue) {
      showError.innerText = "";
    } else {
      showError.classList.add("error");
      showError.innerText = "Email should be in lowercase";
      return false;
    }
  }
  formSubmit.addEventListener("click", function (event) {
    event.preventDefault();
    if (emailLowerCase()) {
      form.submit();
    }
  });
});
