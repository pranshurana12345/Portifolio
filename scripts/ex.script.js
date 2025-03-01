const companies = [
    { name: "Company A", roles: ["Developer", "Designer"], skills: ["React", "Angular"] },
    { name: "Company B", roles: ["Manager"], skills: ["Vue", "Node.js"] }
];


const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("animate-company-container"); // Add animation class
            observer.unobserve(entry.target); // Stop observing once animated
        }
    });
}, { threshold: 0.2, rootMargin: "50px 0px" }); // Slight margin for smoother triggering


const exCards = document.getElementById("ex-cards");

companies.forEach(company => {
    const card = document.createElement("div");
    card.className = "ex-card";

    const companyContainer = document.createElement("div");
    companyContainer.className = "company-container";
    observer.observe(companyContainer);

    const joinCardCompanyContainer = document.createElement("div");
    joinCardCompanyContainer.className = "join-card-company-container"

    const companyBox = document.createElement("div");
    companyBox.className = "company-box";

    const img = document.createElement("img");
    img.className = "company-img";
    img.src = "./images/pri.jpg";

    const companyName = document.createElement("p");
    companyName.textContent = company.name;

    companyBox.appendChild(img);
    companyBox.appendChild(companyName);
    companyContainer.appendChild(companyBox);

    const roleBox = document.createElement("div");
    roleBox.className = "company-role-box";

    company.roles.forEach((role, p) => {
        const roleDiv = document.createElement("div");
        roleDiv.className = "company-role";

        const svgContainer = document.createElement("div");
        svgContainer.className = "svg-container";

        const svg = document.createElement("svg");
        svg.innerHTML = `
            <svg id="circle"
                     xmlns="http://www.w3.org/2000/svg"
                     width="16"
                     height="16"
                     viewBox="0 0 6 7"
                     fill="none">
                  <circle cx="3"
                          cy="3.5"
                          r="3"
                          fill="red" />
            </svg>
        `

        svgContainer.appendChild(svg)

        if (company.roles.length > 1) {


            const roleVerticalLine = document.createElement("span");
            roleVerticalLine.classList.add(
                "role-vertical-line")
            if (p == 0) {
                roleVerticalLine.classList.add("first-role-vertical-line")

            } else if (p == company.roles.length - 1) {
                roleVerticalLine.classList.add("last-role-vertical-line")

            }
            svgContainer.appendChild(roleVerticalLine)

        }



        const roleText = document.createElement("p");
        roleText.textContent = role;

        roleDiv.appendChild(svgContainer);
        roleDiv.appendChild(roleText);
        roleBox.appendChild(roleDiv);
    });

    companyContainer.appendChild(roleBox);

    const skillBox = document.createElement("div");
    skillBox.className = "company-accured-skill-box";

    const skillTitle = document.createElement("p");
    skillTitle.textContent = "Accrued tech skills";
    skillBox.appendChild(skillTitle);

    company.skills.forEach(skill => {
        const skillButton = document.createElement("button");
        skillButton.textContent = skill;
        skillButton.disabled = true;
        skillBox.appendChild(skillButton);
    });

    // append
    companyContainer.appendChild(skillBox);
    card.appendChild(companyContainer);
    card.appendChild(joinCardCompanyContainer);
    exCards.appendChild(card);
});