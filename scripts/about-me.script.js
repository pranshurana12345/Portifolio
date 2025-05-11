//
let aboutMe = `
    I’m Pranshu—a community builder with over 3 years in the crypto space
    and 1+ year of full-time experience in  growing Web3 communities.
    I’m passionate about helping innovative projects connect with real people, 
    both online and on the ground. 
    Outside of work, I love traveling, trekking, running, and getting lost in a good book.
    Whether it’s climbing mountains or building ecosystems, I’m all about meaningful journeys.`
let aboutMeSection = document.getElementById('about-me-section')

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {

            fadeTypingAnimation(aboutMeSection,
                aboutMe
                , 50);
            observer.unobserve(entry.target); // Stop observing once animated
        }
    });
}, { threshold: 0.2, rootMargin: "50px 0px" }); // Slight margin for smoother triggering





observer.observe(aboutMeSection);
