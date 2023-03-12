const projects = [
    {
        id: "glass",
        name: "AlpGlass",
        date: "(Sep 2017 – May 2018)",
        readme: false,
        desc: "A smart glass prototype, made with Arduino, communicating with its Android app over Bluetooth to convert speech to text, and translate recognized text to preferred language instantly and reflect the result text to a transparent material in front of the eye. It was mainly developed for instant translations and people having difficulty with hearing.\n" +
            "Android side written in Java, and Arduino side written in C++ and used HC-06 Bluetooth module for communication.\n" +
            "Attended 12th International MoE Robot Competition and got into the 10th place.\n" +
            "Hardware project.\n" +
            "Personal project."
    },
    {
        id: "eda",
        name: "Eda Assistant",
        date: "(Dec 2018 – Mar 2020)",
        readme: false,
        url: "http://alp.afyonluoglu.org/eda-asistan/",
        desc: "Time management and to-do list app for students, allowing users to create profiles and share entries with one another.\n" +
            "Android application written in Java and used SQL.\n" +
            "Synced data with Firebase Realtime Database.\n" +
            "Individual project, related to Private Bilkent High School."
    },
    {
        id: "trainly",
        name: "Trainly",
        date: "(Jan 2021 – June 2021)",
        readme: false,
        github: "https://github.com/alpafyonluoglu/Trainly",
        desc: "Time management and to-do list app for students, allowing users to create profiles and share entries with one another.\n" +
            "Android application written in Java and used SQL.\n" +
            "Synced data with Firebase Realtime Database.\n" +
            "Individual project, related to Private Bilkent High School."
    },
    {
        id: "ada",
        name: "Ada Assistant",
        date: "(Jun 2018 – Dec 2020)",
        readme: true,
        desc: "SMS chatbot. Personal assistant app analyzing and responding to SMS messages when a missed call is received, or someone sends an SMS message that mentions Ada. Depending on the access level of the person sending messages, the app performs actions and makes changes on the device while considering coarse device location and what is on device owner's calendar.\n" +
            "Android application developed in Java.\n" +
            "Personal project."
    },
    {
        id: "ibevi",
        name: "Student Registry App",
        date: "(Jun 2020 – Jul 2020)",
        readme: true,
        desc: "A database app developed for \"IB Evi\" to register and query information about students.\n" +
            "Android application written in Java and used SQL.\n" +
            "Synced data with Firebase Realtime Database.\n" +
            "Individual project."
    },
    {
        id: "dualweb",
        name: "Dual Web",
        date: "(Oct 2021 – Oct 2021)",
        readme: true,
        github: "https://github.com/alpafyonluoglu/DualWeb",
        desc: "A simple browser extension allowing users to log into the same website with two different accounts.\n" +
            "My first open-source project.\n" +
            "Written in JS, HTML, CSS.\n" +
            "Personal project."
    },
    {
        id: "bilasmus",
        name: "Bilasmus",
        date: "(Sep 2022 - Dec 2022)",
        readme: false,
        github: "https://github.com/alpafyonluoglu/Bilasmus",
        desc: "Web app prototype for managing university-accepted Erasmus students.\n" +
            "Developed the backend, which used NodeJS, PostgreSQL, MVC pattern, and design patterns.\n" +
            "Group project (5 people), related to Bilkent University."
    },
    {
        id: "bhmun",
        name: "Bhmun Website",
        date: "(Apr 2019 - Jan 2023)",
        readme: true,
        url: "https://www.bhmun.org/",
        github: "https://github.com/alpafyonluoglu/Bhmun",
        desc: "Website of Private Bilkent High School's MUN club. Developed a drive subdomain for creating user profiles and accessing cloud storage via login.\n" +
            "Backend written in NodeJS (and Express), and frontend written in JS, HTML, CSS.\n" +
            "Used Firebase Realtime Database.\n" +
            "Individual project, related to Private Bilkent High School."
    },
    {
        id: "planner",
        name: "Planner",
        date: "(Aug 2021 - Present)",
        readme: true,
        desc: "Personal time management application, analyzing calendar events, given activities and user actions to create personalized time plans.\n" +
            "Android application written in Java.\n" +
            "Personal project."
    },
    {
        id: "beagle",
        name: "Beagle",
        date: "(Feb 2023 - Present)",
        readme: false,
        desc: "Web app monitoring given websites and notifying users when change detected. Provides a list of changes to users since the last time they logged in.\n" +
            "Backend written in NodeJS and uses MySQL.\n" +
            "Personal project."
    },
    {
        id: "portfolio",
        name: "Portfolio",
        date: "(Feb 2022 - Present)",
        readme: false,
        github: "https://github.com/alpafyonluoglu/Portfolio",
        desc: "This website, used as a portfolio to present my projects.\n" +
            "Written in JS, HTML, and CSS."
    },
]

let stack = [];
