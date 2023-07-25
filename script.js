document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector("#navbar");
  const menu = document.querySelector(".menu");
  const closeMenu = document.querySelector(".close-menu");
  const menuItems = document.querySelectorAll(".menu1, .menu2, .menu3");

  /**********    Mobile-menu       **********/

  function openMenu() {
    navbar.classList.add("nav-mbl");
    navbar.classList.remove("nav-mbl-inactive");
    closeMenu.style.display = "block";
    menu.style.display = "none";
  }

  function closeMobileMenu() {
    navbar.classList.add("nav-mbl-inactive");
    navbar.classList.remove("nav-mbl");
    closeMenu.style.display = "none";
    updateMenuVisibility();
  }

  function updateMenuVisibility() {
    const windowWidth = window.innerWidth;
    if (windowWidth >= 786) {
      menu.style.display = "none";
    } else {
      menu.style.display = "block";
    }
  }

  updateMenuVisibility();

  menu.addEventListener("click", openMenu);
  closeMenu.addEventListener("click", closeMobileMenu);
  window.addEventListener("resize", updateMenuVisibility);

  menuItems.forEach((item) => {
    item.addEventListener("click", closeMobileMenu);
  });
});

/**********    Popup Window       **********/

const projects = [
  {
    id: "project-1",
    image: "images/project-1.svg",
    name: "project-1",
    roles: ["CANOPY", "Back End Dev", "2015"],
    shortDescription:
      "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    longDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: "project-2",
    image: "images/project-2.svg",
    name: "project-2",
    roles: ["CANOPY", "Back End Dev", "2015"],
    shortDescription:
      "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    longDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: "project-3",
    image: "images/project-3.svg",
    name: "project-3",
    roles: ["CANOPY", "Back End Dev", "2015"],
    shortDescription:
      "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    longDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: "project-4",
    image: "images/project-4.svg",
    name: "project-4",
    roles: ["CANOPY", "Back End Dev", "2015"],
    shortDescription:
      "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    longDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
];

