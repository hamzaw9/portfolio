document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.querySelector('#navbar');
  const menu = document.querySelector('.menu');
  const closeMenu = document.querySelector('.close-menu');
  const menuItems = document.querySelectorAll('.menu1, .menu2, .menu3');

  /** ********    Mobile-menu       ********* */

  function updateMenuVisibility() {
    const windowWidth = window.innerWidth;
    if (windowWidth >= 786) {
      menu.style.display = 'none';
    } else {
      menu.style.display = 'block';
    }
  }

  updateMenuVisibility();

  function openMenu() {
    navbar.classList.add('nav-mbl');
    navbar.classList.remove('nav-mbl-inactive');
    closeMenu.style.display = 'block';
    menu.style.display = 'none';
  }

  function closeMobileMenu() {
    navbar.classList.add('nav-mbl-inactive');
    navbar.classList.remove('nav-mbl');
    closeMenu.style.display = 'none';
    updateMenuVisibility();
  }

  menu.addEventListener('click', openMenu);
  closeMenu.addEventListener('click', closeMobileMenu);
  window.addEventListener('resize', updateMenuVisibility);

  menuItems.forEach((item) => {
    item.addEventListener('click', closeMobileMenu);
  });

  /** ********    Dynamic Cards       ********* */

  const projects = [
    {
      id: 'project-1',
      image: 'images/project-1.svg',
      name: 'project-1',
      roles: ['CANOPY', 'Back End Dev', '2015'],
      shortDescription:
        'A daily selection of privately personalized reads; no accounts or sign-ups required.',
      longDescription:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
      technologies: ['HTML', 'CSS', 'JavaScript'],
    },
    {
      id: 'project-2',
      image: 'images/project-2.svg',
      name: 'project-2',
      roles: ['CANOPY', 'Back End Dev', '2015'],
      shortDescription:
        'A daily selection of privately personalized reads; no accounts or sign-ups required.',
      longDescription:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
      technologies: ['HTML', 'CSS', 'JavaScript'],
    },
    {
      id: 'project-3',
      image: 'images/project-3.svg',
      name: 'project-3',
      roles: ['CANOPY', 'Back End Dev', '2015'],
      shortDescription:
        'A daily selection of privately personalized reads; no accounts or sign-ups required.',
      longDescription:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
      technologies: ['HTML', 'CSS', 'JavaScript'],
    },
    {
      id: 'project-4',
      image: 'images/project-4.svg',
      name: 'project-4',
      roles: ['CANOPY', 'Back End Dev', '2015'],
      shortDescription:
        'A daily selection of privately personalized reads; no accounts or sign-ups required.',
      longDescription:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
      technologies: ['HTML', 'CSS', 'JavaScript'],
    },
  ];

  for (let i = 0; i < projects.length; i += 1) {
    const projectsContainer = document.querySelector('#work-section');
    // Check if the current index is odd (i.e., not divisible by 2)
    const isOdd = i % 2 !== 0;

    projectsContainer.innerHTML += `<div class="card ${
      isOdd ? 'row-reverse' : ''
    }">
    <img src=${projects[i].image} alt="Project Screenshot" />
    <div class="card-inner">
      <div class="project-name">
        <h2>${projects[i].name}</h2>
      </div>
      <p>
        <strong>${projects[i].roles[0]}</strong>
        <i class="fa-solid fa-circle fa-2xs"></i>${projects[i].roles[1]}
        <i class="fa-solid fa-circle fa-2xs"></i>${projects[i].roles[2]}
      </p>
      <div class="description-container">
        <p class="short-description">
          ${projects[i].shortDescription}
        </p>
        <div class="tag-container">
          <ul>
            <li>${projects[i].technologies[0]}</li>
            <li>${projects[i].technologies[1]}</li>
            <li>${projects[i].technologies[2]}</li>
          </ul>
          <div class="project-details-btn">
            <button type="button" class="see-project">See Project</button>
          </div>
        </div>
      </div>
    </div>
  </div>`;
  }
});
