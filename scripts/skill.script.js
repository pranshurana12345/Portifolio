let frontendSkillsElement = document.getElementById('frontend-skills');
let backendSkillsElement = document.getElementById('backend-skills');
let testingSkillsElement = document.getElementById('testing-skills');

let frontendSkills = [
  { title: "Next.js", color: "snow" },
  { title: "React", color: "#0081A3" },
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
  breakSkill,
  skillsElement, 
  removeAfter }) => {
  let skill = document.createElement('div');
  skill.classList.add("skill");
  skill.textContent = title;

  skill.addEventListener('mouseover', function() {
    skill.style.background = `linear-gradient(var(--skill-bg-color) 0 0) padding-box, 
                              linear-gradient(to right, ${color}, var(--skill-border-color)) border-box`;
  });

  skill.addEventListener('mouseout', function() {
    skill.style.background = `linear-gradient(var(--skill-bg-color) 0 0) padding-box, 
                              linear-gradient(to right, var(--skill-border-color), var(--skill-border-color)) border-box`;
  });
  
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
              color: skill.color,
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
