const projects = [
    {
        id: "portfolio",
        name: "Portfolio",
        desc: "Home for my projects",
        date: "(Feb 2022 - Present)",
        readme: false,
        github: "https://github.com/alpafyonluoglu/Portfolio",
        details: "This website, used as a portfolio to present my projects.\n" +
            "Written in JS, HTML, and CSS."
    },
    {
        id: "glass",
        name: "AlpGlass",
        desc: "Smart glass prototype",
        date: "(Sep 2017 – May 2018)",
        readme: false,
        details: "A smart glass prototype, made with Arduino, communicating with its Android app over Bluetooth to convert speech to text, and translate recognized text to preferred language instantly and reflect the result text to a transparent material in front of the eye. It was mainly developed for instant translations and people having difficulty with hearing.\n" +
            "Android side written in Java, and Arduino side written in C++ and used HC-06 Bluetooth module for communication.\n" +
            "Attended 12th International MoE Robot Competition and got into the 10th place.\n" +
            "Hardware project.\n" +
            "Personal project."
    },
    {
        id: "eda",
        name: "Eda Assistant",
        desc: "To-do list for students",
        date: "(Dec 2018 – Mar 2020)",
        readme: false,
        url: "http://alp.afyonluoglu.org/eda-asistan/",
        details: "Time management and to-do list app for students, allowing users to create profiles and share entries with one another.\n" +
            "Android application written in Java and used SQL.\n" +
            "Synced data with Firebase Realtime Database.\n" +
            "Individual project, related to Private Bilkent High School."
    },
    {
        id: "trainly",
        name: "Trainly",
        desc: "Ticket management platform",
        date: "(Jan 2021 – June 2021)",
        readme: false,
        github: "https://github.com/alpafyonluoglu/Trainly",
        details: "A mobile app for creating profiles, managing train data, and ticket entries to buy/sell tickets.\n" +
            "Android application written in Java and used SQL.\n" +
            "Synced data with Firebase Realtime Database.\n" +
            "Group project (4 people), related to Bilkent University."
    },
    {
        id: "ada",
        name: "Ada Assistant",
        desc: "SMS chatbot for missed calls",
        date: "(Jun 2018 – Dec 2020)",
        readme: true,
        details: "SMS chatbot. Personal assistant app analyzing and responding to SMS messages when a missed call is received, or someone sends an SMS message that mentions Ada. Depending on the access level of the person sending messages, the app performs actions and makes changes on the device while considering coarse device location and what is on device owner's calendar.\n" +
            "Android application developed in Java.\n" +
            "Personal project."
    },
    {
        id: "ibevi",
        name: "Student Registry App",
        desc: "Encrypted cloud-based database",
        date: "(Jun 2020 – Jul 2020)",
        readme: true,
        details: "A database app developed for \"IB Evi\" to register and query information about students.\n" +
            "Android application written in Java and used SQL.\n" +
            "Synced data with Firebase Realtime Database.\n" +
            "Individual project."
    },
    {
        id: "dualweb",
        name: "Dual Web",
        desc: "Multiple profiles for the web",
        date: "(Oct 2021 – Oct 2021)",
        readme: true,
        github: "https://github.com/alpafyonluoglu/DualWeb",
        details: "A simple browser extension allowing users to log into the same website with two different accounts.\n" +
            "My first open-source project.\n" +
            "Written in JS, HTML, CSS.\n" +
            "Personal project."
    },
    {
        id: "bilasmus",
        name: "Bilasmus",
        desc: "Erasmus students management platform",
        date: "(Sep 2022 - Dec 2022)",
        readme: false,
        github: "https://github.com/alpafyonluoglu/Bilasmus",
        details: "Web app prototype for managing university-accepted Erasmus students.\n" +
            "Developed the backend, which used NodeJS, PostgreSQL, MVC pattern, and design patterns.\n" +
            "Group project (5 people), related to Bilkent University."
    },
    {
        id: "bhmun",
        name: "Bhmun Website",
        desc: "Cloud-based secure drive",
        date: "(Apr 2019 - Jan 2023)",
        readme: true,
        url: "https://www.bhmun.org/",
        github: "https://github.com/alpafyonluoglu/Bhmun",
        details: "Website of Private Bilkent High School's MUN club. Developed a drive subdomain for creating user profiles and accessing cloud storage via login.\n" +
            "Backend written in NodeJS (and Express), and frontend written in JS, HTML, CSS.\n" +
            "Used Firebase Realtime Database.\n" +
            "Individual project, related to Private Bilkent High School."
    },
    {
        id: "planner",
        name: "Planner",
        desc: "Personalized time management",
        date: "(Aug 2021 - Present)",
        readme: true,
        details: "Personal time management application, analyzing calendar events, given activities and user actions to create personalized time plans.\n" +
            "Android application written in Java.\n" +
            "Personal project."
    },
    {
        id: "beagle",
        name: "Beagle",
        desc: "Website content monitoring",
        date: "(Feb 2023 - Present)",
        readme: false,
        details: "Web app monitoring given websites and notifying users when change detected. Provides a list of changes to users since the last time they logged in.\n" +
            "Backend written in NodeJS and uses MySQL.\n" +
            "Personal project."
    },
]

let stack = [];
const maxStackLength = 1;
let animIndex = 10;
let continueAnim = true;

loadProjectCards();
loadProjectCardsDetailed();
animate();

function animate() {
    viewProjectCardDetailed(animIndex, false);

    setTimeout(function () {
        if (continueAnim) {
            animIndex = animIndex !== 0 ? animIndex - 1 : projects.length - 1;
            animate();
        }
    }, 3500);
}

function viewProjectCardDetailed(element, isElement = true, highlightProject = true) {
    // Get id
    let newProjectId = element;
    if (isElement) {
        newProjectId = parseInt(element.dataset.orderId);
        continueAnim = false;
    }

    // Hide previous project
    if (highlightProject) {
        projects.forEach((project) => {
            document.getElementById("mini_card_" + project.id).classList.remove("activeGridCardProject");
        })
    }

    // Update stack
    stack = stack.filter(projectId => projectId !== newProjectId);
    stack = stack.slice(0, maxStackLength - 1);
    stack.unshift(newProjectId);

    // Show next project
    if (highlightProject) {
        document.getElementById("mini_card_" + projects[newProjectId].id).classList.add("activeGridCardProject");
    }

    loadProjectCardsDetailed();
    if (isElement) {
        document.getElementById("card_" + projects[newProjectId].id).scrollIntoView({behavior: "smooth", block: "nearest", inline: "center"});
    }
}

function loadProjectCards() {
    const projectCards = document.getElementById("projectCards");
    projectCards.innerHTML = "";

    let orderId = 0;
    projects.forEach((project) => {
        projectCards.innerHTML =
            "<div class=\"gridCardProject\" id='mini_card_" + project.id + "' onclick=\"viewProjectCardDetailed(this)\" data-order-id=\"" + orderId + "\">\n" +
            "    <div class=\"floatingAlways\">\n" +
            "        <img src=\"docs/projects/" + project.id + "/logo.png\" class=\"small-logo-project\" alt=\"" + project.name + "\">\n" +
            "    </div>\n" +
            "    <div class='gridCardProjectTextBox'>\n" +
            "        <p class=\"gridCardProjectText\"><b>" + project.name + "</b></p>\n" +
            "        <p class=\"gridCardProjectSubText\">" + project.desc + "</p>\n" +
            "    </div>" +
            "</div>"
        + projectCards.innerHTML;
        orderId++;
    })
}

function loadProjectCardsDetailed() {
    const projectCardsDetailed = document.getElementById("projectCardsDetailed");
    projectCardsDetailed.innerHTML = "";

    stack.forEach((projectId) => {
        let project = projects[projectId];

        projectCardsDetailed.innerHTML +=
            "<div class=\"card projectCard\" id=\"card_" + project.id + "\" style='transition: .3s ease-in-out'>\n" +
            "    <div class=\"floating\">\n" +
            "        <img src=\"docs/projects/" + project.id + "/logo.png\" class=\"small-logo\" alt=\"" + project.name + "\">\n" +
            "    </div>\n" +
            "    <div class=\"top\">\n" +
            "        <p class=\"text\"><b>" + project.name + "</b></p>\n" +
            "        <p class=\"subText\">" + project.date + "</p>\n" +
            "        <div class=\"more\">\n" +
                         (project.github ? "<a href=\"" + project.github + "\" class=\"projectLinkContainer unselectable\">\n" +
                         "    <img src=\"res/icons/github.png\" class=\"projectLink\" alt=\"GitHub Link\"></a>\n" : "") +
                         (project.url ? "<a href=\"" + project.url + "\" class=\"projectLinkContainer unselectable\">\n" +
                         "    <img src=\"/res/icons/link.png\" class=\"projectLink\" alt=\"Link\"></a>\n" : "") +
                         (project.readme ? "<a onclick=\"toggleDetails(this)\" data-project=\"" + project.id + "\" data-loaded=\"false\"\n" +
                         "    class=\"details unselectable\" id=\"details_toggle_planner\">Show Readme</a>\n" : "") +
            "        </div>\n" +
            "    </div>\n" +
            "    <div class=\"briefInfo\">\n" +
            "        <ul class=\"text\">\n" +
                         project.details.split("\n").map(line => "<li>" + line + "</li>").join("") +
            "        </ul>\n" +
            "    </div>\n" +
            "    <div class=\"detailedInfo\" id=\"details_" + project.id + "\">\n" +
            "        <hr class=\"line\">\n" +
            "    </div>\n" +
            "</div>";

        let element = document.getElementById("card_" + project.id);
        element.style.opacity = 0;
        element.style.transition='opacity .250s';
        setInterval(() => element.style.opacity = 1, 50);
    })
}