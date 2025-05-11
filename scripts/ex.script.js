// import { circleSvg } from "./svg.script";

const companies = [
    {
        name: "Refine Studio",
        img_src: "logos/ref.jpg",
        roles: [{
            name: "QA Engineer ", type: "Working towards mantaining the UI/UX Quality of the partner projects  ", length: '(Curvance,Symphony.Haiku)'
        }],
        skills: [
            {  },
            { },
            {  },
            { },
            {  },

        ]
    },
    {
        name: "Billions Network",
        img_src: "logos/billions.jpg",
        roles: [{
            name: "OG", type: "Early and active contributor, helping grow communities by leading engagement efforts across Web3 spaces.", length: ''
        }],
        skills: [
            { link: 'https://react.dev/', className: "span-svg-react" },
            { link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', className: "span-svg-js" },
            { link: 'https://www.typescriptlang.org/docs/', className: "span-svg-ts" },

        ]
    }
    
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
    //
    const joinCardCompanyContainer = document.createElement("div");
    joinCardCompanyContainer.className = "join-card-company-container"
    card.appendChild(joinCardCompanyContainer)
    //
    const companyContainer = document.createElement("div");
    companyContainer.className = "company-container";
    observer.observe(companyContainer);


    //
    const companyBox = document.createElement("div");
    companyBox.className = "company-box";
    //
    const img = document.createElement("img");
    img.className = "company-img";
    img.src = company.img_src
    companyBox.appendChild(img)
    //
    const companyName = document.createElement("h3");
    companyName.classList.add("company-name")
    const companyNameLink = document.createElement("a");
    companyNameLink.textContent = company.name;
    companyNameLink.href = company.link;
    companyName.appendChild(companyNameLink)
    //
    companyBox.appendChild(companyName);
    companyContainer.appendChild(companyBox);
    //
    //
    const companyRoleBox = document.createElement("div");
    companyRoleBox.className = "company-role-box";

    company.roles.forEach((role, p) => {
        const companyRole = document.createElement("div");
        companyRole.className = "company-role";

        const svgContainer = document.createElement("div");
        svgContainer.className = "svg-container";

        const spanSvgCircle = document.createElement("span");
        spanSvgCircle.classList.add('span-svg-circle')
        svgContainer.appendChild(spanSvgCircle)
        companyRole.appendChild(svgContainer)
        //
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


        //
        const roleBox = document.createElement("div");
        roleBox.classList.add("role-box")
        const roleName = document.createElement("h4");
        roleName.classList.add("role-name")
        roleName.textContent = role.name
        roleBox.appendChild(roleName)
        //

        const roleType = document.createElement("p");
        roleType.classList.add("role-type")
        roleType.textContent = role.type
        roleBox.appendChild(roleType)
        //
        const roleLength = document.createElement("p");
        roleLength.classList.add("role-length")

        roleLength.textContent = role.length
            ;
        roleBox.appendChild(roleLength)
        //

        companyRole.appendChild(roleBox);
        //
        companyRoleBox.appendChild(companyRole)
    });

    companyContainer.appendChild(companyRoleBox);
    //
    //
    const skillBox = document.createElement("div");
    skillBox.className = "company-accured-skill-box flex-wrap";

    const skillTitle = document.createElement("p");
    
   
    
    //
   
    

    //
    companyContainer.appendChild(skillBox);
    card.appendChild(companyContainer);
    exCards.appendChild(card);
});