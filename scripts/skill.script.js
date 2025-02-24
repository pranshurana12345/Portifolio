const root = document.documentElement

const my = getComputedStyle(root).getPropertyValue('--skill-padding-y');

let frontendSkillsElement = document.getElementById('frontend-skills');
let backendSkillsElement = document.getElementById('backend-skills');
let testingSkillsElement = document.getElementById('testing-skills');
let frontendSkills = [
  { title: "Next.js", color: "snow" },
  { title: "React", color: "#0081A3" ,
    link: "https://react.dev/",
    icon: `
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="vscode-icons:file-type-reactjs">
        <path id="Vector" d="M8 9.237C8.69036 9.237 9.25 8.67736 9.25 7.987C9.25 7.29664 8.69036 6.737 8 6.737C7.30964 6.737 6.75 7.29664 6.75 7.987C6.75 8.67736 7.30964 9.237 8 9.237Z" fill="#00D8FF"/>
        <path id="Vector_2" d="M8 10.853C6.49757 10.8892 4.99892 10.6867 3.56 10.253C2.89531 10.0423 2.27537 9.71037 1.7315 9.274C1.52389 9.125 1.35101 8.93281 1.22474 8.71065C1.09847 8.48848 1.0218 8.24161 1 7.987C1 7.1605 1.908 6.3505 3.429 5.8205C4.90646 5.35126 6.44999 5.12366 8 5.1465C9.52934 5.12536 11.0522 5.34884 12.511 5.8085C13.151 6.01281 13.7499 6.32867 14.28 6.7415C14.4838 6.88384 14.6538 7.06914 14.7782 7.28433C14.9026 7.49953 14.9783 7.73938 15 7.987C15 8.846 13.985 9.7165 12.35 10.2575C10.939 10.6772 9.47192 10.878 8 10.853ZM8 5.7445C6.51709 5.72512 5.04051 5.94148 3.6255 6.3855C2.2255 6.874 1.598 7.542 1.598 7.9855C1.598 8.4495 2.2725 9.179 3.7535 9.6855C5.13002 10.0985 6.5633 10.2907 8 10.255C9.4082 10.2802 10.812 10.0896 12.1625 9.69C13.7 9.1805 14.4 8.45 14.4 7.987C14.3747 7.82814 14.3167 7.67625 14.2298 7.54089C14.1429 7.40552 14.0289 7.28963 13.895 7.2005C13.4208 6.83413 12.8858 6.55418 12.3145 6.3735C10.9189 5.9357 9.46247 5.72336 8 5.7445Z" fill="#00D8FF"/>
        <path id="Vector_3" d="M5.15999 14.2215C4.92674 14.2268 4.69625 14.1702 4.49199 14.0575C3.77599 13.6445 3.52799 12.4535 3.82849 10.871C4.16019 9.35666 4.73424 7.90582 5.52849 6.5745C6.27402 5.23917 7.22823 4.0316 8.35499 2.9975C8.85172 2.54506 9.42454 2.184 10.047 1.931C10.2723 1.82577 10.5179 1.77123 10.7665 1.77123C11.0151 1.77123 11.2607 1.82577 11.486 1.931C12.2305 2.36 12.477 3.674 12.1295 5.3605C11.788 6.7928 11.2288 8.16424 10.4715 9.427C9.75225 10.7466 8.82808 11.9437 7.73349 12.9735C7.21888 13.4439 6.62166 13.815 5.97199 14.068C5.71197 14.1648 5.43739 14.2167 5.15999 14.2215ZM6.04649 6.8715C5.28893 8.14636 4.73874 9.53348 4.41649 10.981C4.13999 12.4385 4.40549 13.315 4.79149 13.538C5.19149 13.7695 6.16249 13.55 7.34149 12.52C8.38656 11.5335 9.26867 10.3876 9.95499 9.125C10.6805 7.91776 11.2168 6.60657 11.5455 5.237C11.8725 3.6495 11.59 2.6775 11.189 2.4465C11.0387 2.389 10.8781 2.36327 10.7173 2.37093C10.5566 2.37859 10.3992 2.41947 10.255 2.491C9.70086 2.71973 9.19139 3.04437 8.74999 3.45C7.67355 4.4406 6.76209 5.59664 6.04999 6.8745L6.04649 6.8715Z" fill="#00D8FF"/>
        <path id="Vector_4" d="M10.8385 14.228C10.161 14.228 9.30049 13.818 8.40449 13.0475C7.25813 12.0039 6.28781 10.782 5.53099 9.429C4.74655 8.11609 4.17703 6.68621 3.84399 5.1935C3.6999 4.53671 3.67316 3.85961 3.76499 3.1935C3.78659 2.94648 3.86196 2.70718 3.98581 2.49236C4.10967 2.27755 4.27903 2.09244 4.48199 1.95C5.22549 1.5195 6.48699 1.962 7.77449 3.105C8.84479 4.11609 9.75369 5.28535 10.4695 6.572C11.2535 7.85424 11.829 9.25281 12.1745 10.7155C12.3251 11.3964 12.3483 12.0992 12.243 12.7885C12.218 13.0427 12.1384 13.2885 12.0094 13.5091C11.8805 13.7296 11.7053 13.9196 11.496 14.066C11.295 14.1771 11.0681 14.233 10.8385 14.228ZM6.04849 9.128C6.77457 10.421 7.70146 11.5904 8.7945 12.5925C9.919 13.56 10.811 13.768 11.1945 13.5425C11.5945 13.31 11.8895 12.361 11.5855 10.8255C11.2525 9.42894 10.7005 8.09391 9.94999 6.87C9.26691 5.63856 8.39937 4.51893 7.37749 3.55C6.16549 2.474 5.18249 2.2335 4.78199 2.4655C4.65724 2.567 4.55484 2.69324 4.48127 2.83626C4.40769 2.97928 4.36453 3.13598 4.35449 3.2965C4.27506 3.89055 4.30096 4.49394 4.43099 5.079C4.75143 6.50648 5.29764 7.87368 6.04899 9.129L6.04849 9.128Z" fill="#00D8FF"/>
        </g>
      </svg>    
    `
  },
  { breakSkill: true },
  { title: "RxJS", color: "#B7178C" },
  { title: "Redux", color: "#764ABC" },
  { breakSkill: true },
  { title: "Tailwind CSS", color: "#06B6D4" },
  { title: "Bootstrap", color: "#7952B3" },
  { breakSkill: true },
  { title: "HTML", color: "#E44D26" },
  { title: "CSS", color: "#264DE4" }
];

let backendSkills = [
  { title: "Node.js", color: "#83CD29" },
  { title: "Django", color: "#092E20" },
  // { title: "Express.js", color: "#444" },
  // { title: "Flask", color: "#000" }
];


let testingSkills = [
  { title: "Jasmine", color: "#8A4182" },
  { title: "Cypress", color: "#17202C" },
  { title: "Karma", color: "#D32F2F" }
];

let addSkill = ({ 
  title, 
  color, 
  icon,
  link,
  breakSkill,
  skillsElement, 
  removeAfter }) => {
  let skill = document.createElement('a');

  if (link) {
    skill.href = link
    skill.target = "_blank"
  }
  skill.classList.add("skill");

  skill.addEventListener('mouseover', function() {
    skill.style.background = `linear-gradient(var(--skill-bg-color) 0 0) padding-box, 
                              linear-gradient(to right, ${color}, var(--skill-border-color)) border-box`;
  });

  skill.addEventListener('mouseout', function() {
    skill.style.background = `linear-gradient(var(--skill-bg-color) 0 0) padding-box, 
                              linear-gradient(to right, var(--skill-border-color), var(--skill-border-color)) border-box`;
  });


  //// Add icon
  if (icon) {
    const svgSpan = document.createElement('span')
    svgSpan.style.display = "flex"
    svgSpan.style.alignItems = "center"
    svgSpan.style.marginRight = my
    svgSpan.innerHTML = icon
    skill.appendChild(svgSpan)
  }
  if (title) {
    const titleSpan = document.createElement('span')
    titleSpan.innerText = title
    skill.appendChild(titleSpan)
  }
 
  //// 
  if(breakSkill){
    let breakSkillElement = document.createElement('div')
    breakSkillElement.classList.add('break-skill')
     skillsElement.appendChild(breakSkillElement);
  }else{
      skillsElement.appendChild(skill);
  }

  setTimeout(() => {
    skill.style.animation = "none";
  }, removeAfter);
};

let observeSkills = (skills, skillsElement) => {
  if(skillsElement && skills){
  let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        skills.forEach((skill, index) => {
          let delay = 500 * (index + 1); // Adjust delay for animation
          setTimeout(() => {
            addSkill({
              title: skill.title,

icon:  skill.icon,             color: skill.color,
link: skill.link,
              breakSkill: skill.breakSkill,
              skillsElement: skillsElement,
              removeAfter: delay
            });
          }, delay);
        });

        observer.disconnect();
      
    }
    });
  }, { threshold: 0.2 });
  observer.observe(skillsElement);
  }
};

observeSkills(frontendSkills, frontendSkillsElement);
observeSkills(backendSkills, backendSkillsElement);
observeSkills(testingSkills, testingSkillsElement);
