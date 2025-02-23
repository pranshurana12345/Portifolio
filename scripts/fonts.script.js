  function loadFonts() {
    const fontLinks = [
      "https://fonts.googleapis.com",
      "https://fonts.gstatic.com",
      "https://fonts.googleapis.com/css2?family=Delius&display=swap"
    ];

    fontLinks.forEach((href) => {
      let link = document.createElement("link");
      link.rel = href.includes("fonts.googleapis.com") ? "stylesheet" : "preconnect";
      link.href = href;
      if (href.includes("fonts.gstatic.com")) link.crossOrigin = "anonymous"; // Only needed for gstatic
      document.head.appendChild(link);
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    // Call loadFonts() when needed (e.g., after some delay, on user interaction, or when visible)
    setTimeout(loadFonts, 2000); // Example: Load after 2 seconds
  });
