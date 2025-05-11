


//

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    
  });
}, { threshold: 0.2, rootMargin: "50px 0px" }); // Slight margin for smoother triggering


const projects = [
  {
    imgSrc: "irl2.png",
    imgTitle: "Initia Community Meetupe",
    imgAlt: "Initia Community Meetup",
    title: "' Interwoven with Nature ' -  Initia India Community Meetup ",
    description: " Organized and led a local IRL event to introduce new users to the Initia ecosystem, helped them  onboarding, and foster meaningful community connections through interactive sessions and discussions.  ",
    skills: ["span-svg-angular", "span-svg-ant-design", "span-svg-netlify"],
    liveLink: "https://x.com/Pranshu_rana_/status/1886674313115525222/video/1"
  },
  {
    imgSrc: "info.jpg",
    imgTitle: "Infographics",
    imgAlt: "Infographics",
    title: "Infographics on initia Ecosystem ",
    description: `Designed a beginner-friendly visual ghelping users understand the ecosystem at a glance.`,
    skills: ["span-svg-angular", "span-svg-netlify"],

    liveLink: "https://x.com/Pranshu_rana_/status/1891778669099745706"
  },
  {
    imgSrc: "bil.png",
    imgTitle: "Informative Video",
    imgAlt: "Informative Video",
    title: "An Informative Video on Billions Network",
    description: `Created a beginner-focused explainer video that breaks down the core ideas and  mission of Billions Network in a simple, engaging format.`,
    skills: ["span-svg-react", "span-svg-netlify"],
    liveLink: "https://x.com/Pranshu_rana_/status/1907517580832645424"
  }
];

// Get the parent element where project cards will be appended
const parentElement = document.getElementById("project-section");

projects.forEach(project => {
  // Create main project card container
  const projectCard = document.createElement("div");
  projectCard.classList.add("project-card");

  // Image container
  const imgBox = document.createElement("div");
  imgBox.classList.add("project-card-img-box");

  const img = document.createElement("img");
  img.src = project.imgSrc;
  img.title = project.imgTitle;
  img.alt = project.imgAlt;
  img.classList.add("project-card-img");
  imgBox.appendChild(img);

  // Body container
  const body = document.createElement("div");
  body.classList.add("project-card-body");

  const title = document.createElement("h3");
  title.classList.add("text-primary", 'project-name');
  title.textContent = project.title;
  title.title = project.title;

  const description = document.createElement("p");
  description.classList.add("text-secondary", 'project-desc');
  description.title = project.description
  description.textContent = project.description;

  body.appendChild(title);
  body.appendChild(description);

  // Footer container
  const footer = document.createElement("div");
  footer.classList.add("project-card-footer");

  // Skills container
  const skillsContainer = document.createElement("div");

  project.skills.forEach(skillClass => {
    const skillIcon = document.createElement("div");
    skillIcon.classList.add("skill-icon");

    const span = document.createElement("span");
    span.classList.add(skillClass);
    span.style.display = "flex";
    span.style.alignItems = "center";
    span.style.aspectRatio = "1";

    skillIcon.appendChild(span);
    skillsContainer.appendChild(skillIcon);
  });

  // Action container
  const actionContainer = document.createElement("div");
  actionContainer.classList.add("project-card-action");

  // const codeLink = document.createElement("a");
  // codeLink.href = project.codeLink;
  // codeLink.target = "_blank";
  // codeLink.classList.add("project-redirect-link", "project-redirect-link-left", "text-primary");
  // codeLink.innerHTML = `<span class="span-svg-code stroke-primary project-redirect-link-icon"></span>
  //                       <span>Code</span>`;

  const liveLink = document.createElement("a");
  liveLink.href = project.liveLink;
  liveLink.target = "_blank";
  liveLink.classList.add("project-redirect-link", "project-redirect-link-right", "text-primary");
  liveLink.innerHTML = `<span>X</span>
                          <span class="span-svg-direct-top-right stroke-primary project-redirect-link-icon"></span>`;

  // observe
  observer.observe(actionContainer);
  observer.observe(skillsContainer);

  //
  // actionContainer.appendChild(codeLink);
  actionContainer.appendChild(liveLink);

  // Append all sections
  footer.appendChild(skillsContainer);
  footer.appendChild(actionContainer);

  projectCard.appendChild(imgBox);
  projectCard.appendChild(body);
  projectCard.appendChild(footer);

  // Append project card to parent element
  parentElement.appendChild(projectCard);
});

/* 
  
               <!--
        <div class="project-card animate-company-container">
          <div class="project-card-img-box">

            <img src="assets/images/project-fylehq-homepage-clone.png"
                 title="project fylehq homepage clone"
                 alt="project fylehq homepage clone"
                 class="project-card-img" />
          </div>

          <div class="project-card-body">
            <h3 class="text-primary project-name"
                title="fylehq clone">fylehq clone</h3>
            <p class="text-secondary project-desc"
               title="This project is a front-end replication of the popular expense management platform, Fyle HQ, 
           designed to provide a sleek and responsive user experience. The clone was built using Ant Design 
           (ng-zorro), a powerful Angular UI library, to ensure modern and consistent styling throughout the application.">
              This project is a front-end replication
              of the popular expense management
              platform,
              Fyle
              HQ, designed to provide a sleek and responsive user experience. The clone was built using Ant Design
              (ng-zorro),
              a powerful Angular UI library, to ensure modern and consistent styling throughout the application.
            </p>
          </div>
         
            
          </div>
        </div>
      -->
*/