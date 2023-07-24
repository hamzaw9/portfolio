document.addEventListener("DOMContentLoaded", () => {
  /******    Mobile-menu       ******/

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
});
