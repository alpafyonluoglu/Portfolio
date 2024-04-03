const projects = [
    {
        id: "portfolio",
        name: "Portfolio",
        desc: "Home for my projects",
        date: "(Feb 2022 - Present)",
        readme: false,
        github: "https://github.com/alpafyonluoglu/Portfolio",
        details: "This website, a cozy home for all the colorful projects I have developed.\n" +
            "An interactive place for my projects to tell their life stories and showcase their capabilities.\n" +
            "The website itself is written in pure JS, HTML, and CSS."
    },
    {
        id: "glass",
        name: "AlpGlass",
        desc: "Smart glass prototype",
        date: "(Sep 2017 – May 2018)",
        readme: false,
        details: "A smart glass prototype, made with Arduino, communicating with its Android app over Bluetooth.\n" +
            "Converts speech to text, translates recognized text to preferred language instantly, and reflects the result to a transparent material in front of the eye.\n" +
            "Mainly developed for instant translations and people having difficulty with hearing.\n" +
            "Android side written in Java, Arduino side written in C++ and used HC-06 Bluetooth module for communication.\n" +
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
        details: "Simple time management and to-do list app for students, allowing users to create profiles and share entries with one another.\n" +
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
            "Android application written in Java and uses SQL.\n" +
            "Synced data with Firebase Realtime Database.\n" +
            "Group project (4 people), related to Bilkent University."
    },
    {
        id: "ada",
        name: "Ada Assistant",
        desc: "SMS chatbot for missed calls",
        date: "(Jun 2018 – Dec 2020)",
        readme: true,
        details: "Personal assistant app analyzing and responding to SMS messages when a missed call is received, or someone sends an SMS message that mentions Ada.\n" +
            "Depending on the access level of the person sending messages, the app performs actions and makes changes on the device while considering coarse device location and what is on device owner's calendar.\n" +
            "Android app developed in Java.\n" +
            "Personal project."
    },
    {
        id: "ibevi",
        name: "Student Registry App",
        desc: "Encrypted cloud-based database",
        date: "(Jun 2020 – Jul 2020)",
        readme: true,
        details: "A database app developed for \"IB Evi\" to register and query information about students.\n" +
            "Android app written in Java and uses SQL.\n" +
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
        details: "Simple browser extension allowing users to log into the same website with two different accounts.\n" +
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
        date: "(Aug 2021 - Dec 2023)",
        readme: true,
        details: "Personal time management application, analyzing calendar events, given activities and user actions to create personalized time plans.\n" +
            "Android application written in Java.\n" +
            "Personal project."
    },
    {
        id: "beagle",
        name: "Beagle",
        desc: "Website content monitoring",
        date: "(Feb 2023 - Dec 2023)",
        readme: false,
        details: "Web app monitoring given websites and notifying users when change detected. Provides a list of changes to users since the last time they logged in.\n" +
            "Backend written in NodeJS and uses MySQL.\n" +
            "Personal project."
    },
    {
        id: "linkedout",
        name: "LinkedOut",
        desc: "Social media platform",
        date: "(Feb 2023 - Jun 2023)",
        readme: false,
        // url: "https://www.linkedout.app/",
        github: "https://github.com/alpafyonluoglu/Linkedout",
        details: "LinkedIn-like career-focused social media platform that brings people together based on their interest areas.\n" +
            "Wrote raw advanced SQL queries.\n" +
            "Backend written in SpringBoot, containerised with Docker, data stored in PostgreSQL.\n" +
            "Worked on backend development.\n" +
            "Group project (4 people), related to Bilkent University."
    },
    {
        id: "filechain",
        name: "FileChain",
        desc: "Blockchain for file storage",
        date: "(Jul 2023 - Aug 2023)",
        readme: false,
        details: "Blockchain system for file storage, implemented without using any of the existing blockchain networks or libraries.\n" +
            "Created a given number of Dockerized node instances dynamically with a bash script.\n" +
            "Setup Docker network and ensured communication over HTTP via REST.\n" +
            "Implemented a built-in DNS server in each node, and ensured automated node discovery, linking, and data broadcasting (flood fill algorithm).\n" +
            "Uploaded files over HTTP, and downloaded by hash or found and downloaded the latest version by name, independent from the connected node.\n" +
            "Signed and verified files with the user’s private-public key pair, and verified blocks with their hash values.\n" +
            "Implemented a chain management system to hold multiple chains and choose the one that is the most trustworthy.\n" +
            "Implemented backend in JavaScript using NodeJS & Express, database using MySQL; used Docker to containerise the node algorithm."
    },
    {
        id: "dogclassifier",
        name: "Dog Breed Classifier",
        desc: "ML image processing",
        date: "(Sep 2023 - Dec 2023)",
        readme: false,
        details: "Classified breeds from given dog photos via custom CNN, EfficientNet, and ResNet implementations.\n" +
            "Implemented and fine-tuned the ResNet model.\n" +
            "Used Tensorflow and Keras on Python.\n" +
            "120 dog breeds classified.\n" +
            "Group project (5 people), related to Bilkent University."
    },
    {
        id: "spotlite",
        name: "Spotlite",
        desc: "P2P music streaming",
        date: "(Sep 2023 - Dec 2023)",
        readme: false,
        details: "Peer-to-peer distributed music streaming platform.\n" +
            "Implemented communication of main server over TCP socket.\n" +
            "Main server written in GoLang, clients written in Python, communication via TCP sockets.\n" +
            "Group project (4 people), related to Bilkent University."
    },
    {
        id: "wfe",
        name: "Workflowy Encrypter",
        desc: "Seamless client-side encryption",
        date: "(Nov 2023 - Present)",
        readme: true,
        url: "https://chromewebstore.google.com/detail/workflowy-encrypter/fohbpcookddpmmhpmgoogodlanhikeib",
        github: "https://github.com/alpafyonluoglu/WorkflowyEncrypter",
        details: "A browser extension providing seamless client-side encryption for Workflowy.\n" +
            "Injects custom script to monitor and modify all incoming and outgoing network requests.\n" +
            "Open-sourced on GitHub and published on Chrome WebStore.\n" +
            "Personal project."
    },
    {
        id: "wizzy",
        name: "Wizzy",
        desc: "Integrated AI web assistant",
        date: "(Feb 2024 - Present)",
        readme: false,
        details: "LLM-powered assistant for the web in the form of a browser extension.\n" +
            "Converts texts, mails, messages to either to-do items and sends to Todoist or to calendar events and sends to Google Calendar. Working on further integration with third party apps.\n" +
            "Uses Gemini API for text processing.\n" +
            "Personal project, developed for personal use."
    },
    {
        id: "coview",
        name: "Coview",
        desc: "Code reviewer",
        date: "(Feb 2024 - Present)",
        readme: false,
        details: "Multi-agent LLM powered code review assistant.\n" +
            "Aims to provide accurate code reviews via code indexing, multi-agent conversation framework, ChatGPT API, and Gemini API.\n" +
            "Integrates with GitHub for automated code reviews.\n" +
            "Group project (4 people), related to Bilkent University."
    },
    {
        id: "capsule",
        name: "Capsule",
        desc: "Outfit recommendations",
        date: "(Sep 2023 - Present)",
        readme: false,
        url: "https://www.capsule.style/",
        details: "ML-powered wardrobe tracking and outfit recommendation app for iOS.\n" +
            "Aims to follow the 'capsule wardrobe' approach to provide as many outfit recommendations from few clothing items as possible while ensuring recommended outfits are stylish.\n" +
            "Provides a platform for users to manage their outfit combinations and access analytics about their wardrobe.\n" +
            "Structured U-net-based multi-layered segmentation model for extracting clothing items from selfies.\n" +
            "Implemented custom fine-grained classification model for labelling clothing items.\n" +
            "Implemented matching model to match clothing items with the ones already existing on a user's wardrobe.\n" +
            "Group project (5 people), related to Bilkent University."
    },
]

let stack = [];
const maxStackLength = 1;
let animIndex = projects.length - 1;
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