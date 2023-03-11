// Cookies: photoId, hunter
const TOTAL_THEME_COUNT = 7;
const SHOW_README = "Show Readme";
const HIDE_README = "Hide Readme";
const COOKIE_EX_DAYS = 30;

const themes = [
    {
        colorAccent: '#ff3b30',
        colorAccentDarkMode: '#ff453a',
        colorSelection: '#ff8f89',
        colorSelectionDarkMode: '#99231d',
        colorCanvas: 'rgb(25, 6, 5)',
        shadeAnimPercentage: 2,
        linkedSpirographId: 0
    },
    {
        colorAccent: '#ff9500',
        colorAccentDarkMode: '#ff9f0a',
        colorSelection: '#ffc56c',
        colorSelectionDarkMode: '#995900',
        colorCanvas: 'rgb(25, 15, 0)',
        shadeAnimPercentage: 3,
        linkedSpirographId: 1
    },
    {
        colorAccent: '#34c759',
        colorAccentDarkMode: '#30d158',
        colorSelection: '#83e39b',
        colorSelectionDarkMode: '#1f7735',
        colorCanvas: 'rgb(5, 20, 9)',
        shadeAnimPercentage: 2,
        linkedSpirographId: 2
    },
    {
        colorAccent: '#00c7be',
        colorAccentDarkMode: '#63e6e2',
        colorSelection: '#a1f0ee',
        colorSelectionDarkMode: '#007772',
        colorCanvas: 'rgb(0, 20, 19)',
        shadeAnimPercentage: 3,
        linkedSpirographId: 3
    },
    {
        colorAccent: '#32ade6',
        colorAccentDarkMode: '#64d2ff',
        colorSelection: '#a2e4ff',
        colorSelectionDarkMode: '#1e688a',
        colorCanvas: 'rgb(5, 17, 23)',
        shadeAnimPercentage: 2,
        linkedSpirographId: 4
    },
    {
        colorAccent: '#007bff',
        colorAccentDarkMode: '#0a84ff',
        colorSelection: '#6cb5ff',
        colorSelectionDarkMode: '#004a99',
        colorCanvas: 'rgb(0, 12, 25)',
        shadeAnimPercentage: 2.5,
        linkedSpirographId: 5
    },
    {
        colorAccent: '#a2845e',
        colorAccentDarkMode: '#ac8e68',
        colorSelection: '#cdbba4',
        colorSelectionDarkMode: '#614f38',
        colorCanvas: 'rgb(16, 13, 9)',
        shadeAnimPercentage: 2,
        linkedSpirographId: 6
    },
]

const spirographConfigs = [
    {R1: 100, R2: 160, r: 100, rotationCount: 0, sensitivity: 0.1, color: '#fafafa', lineWidth: 3},
    {R1: 250, R2: 30, r: 100, rotationCount: 0, sensitivity: 0.01, color: '#fafafa', lineWidth: 3},
    {R1: 350, R2: 122, r: 100, rotationCount: 23, sensitivity: 0.03, color: '#fafafa', lineWidth: 3},
    {R1: 358, R2: 100, r: 50, rotationCount: 7, sensitivity: 0.02, color: '#fafafa', lineWidth: 3},
    {R1: 310, R2: 20, r: 25, rotationCount: 0, sensitivity: 0.01, color: '#fafafa', lineWidth: 3},
    {R1: 357, R2: 247, r: 180, rotationCount: 50, sensitivity: 0.05, color: '#fafafa', lineWidth: 3},
    {R1: 100, R2: 2, r: 250, rotationCount: 0, sensitivity: 0.001, color: '#fafafa', lineWidth: 3},
    // {R1: 357, R2: 240, r: 180, rotationCount: 39, sensitivity: 0.05, color: '#fafafa', lineWidth: 3},
];

let badgeBoxShown = false;
let navbarTopView = true;
let navbarInitRequired = true;
let gate = $(window), edge;
let count = 0;

const navbar = document.getElementById("navbar");
const logoL = document.getElementById("logoL");
const logoR = document.getElementById("logoR");
const logoLF = document.getElementById("logoLF");
const logoRF = document.getElementById("logoRF");
const logoContainer = document.getElementById("logoContainer");
const buttons = document.getElementById("buttons");
const btReadme = document.getElementById("btReadme");
const btEducation = document.getElementById("btEducation");
const btExperience = document.getElementById("btExperience");
const btProjects = document.getElementById("btProjects");
const btLanguages = document.getElementById("btLanguages");
const btActivities = document.getElementById("btActivities");
const btCv = document.getElementById("btCv");
const el = document.getElementById("content");
const root = document.querySelector(':root');
const canvas = document.getElementById('topCanvas');
const subTitle = document.getElementById('subTitle');
const style = getComputedStyle(document.body);

let theme;
let darkMode;
let spirograph;
window.onload = function () {
    // Set theme
    theme = getTheme();
    darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    updateTheme(theme, darkMode);

    // Start Spirograph (with extra animation)
    spirograph = new Spirograph(canvas, spirographConfigs[theme.linkedSpirographId], style);
    setTimeout(function () { // In case spirograph were not ready and could not be started on time
        if (spirograph.status === Spirograph.STATUS.LOCKED) {
            startSpirograph();
        }
    }, 3000);

    // Update navbar
    scrollFunction(true);
    window.onscroll = scrollFunction;

    // EE-related
    if (getCookie("hunter") !== "") {
        loadHunterProfile("restart");
    }
}

setTimeout(function () {
    if (spirograph.status === Spirograph.STATUS.LOCKED) {
        startSpirograph();
    }
}, 1875);

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    // Update theme on dark mode change
    darkMode = (event.matches === "dark");
    updateTheme(theme, darkMode);
});

// Set top-section height
updateTopSectionSize();
window.onresize = updateTopSectionSize;

function startSpirograph() {
    if (!isMobileBrowser()) {
        subTitle.style.borderRight = "0px";
        subTitle.style.paddingRight = ".15em";
    }

    let extraAnimConfig = {
        colorAccent: theme.colorAccent,
        shadeAnimPercentage: theme.shadeAnimPercentage,
        element: subTitle,
        isMobile: isMobileBrowser(),
    };
    spirograph.startAnimation(true, extraAnimConfig);
}

function getTheme() {
    let themeId;
    if (getCookie("theme") === "") {
        const favorites = [0];
        let index = Math.floor(Math.random() * favorites.length);
        themeId = favorites[index];
    } else {
        themeId = parseInt(getCookie("theme"));
        themeId++;
        if (themeId >= TOTAL_THEME_COUNT) {
            themeId = 0;
        }
    }
    setCookie("theme", themeId, COOKIE_EX_DAYS);
    return themes[themeId];
}

function updateTheme(theme, darkMode) {
    root.style.setProperty('--accent', darkMode ? theme.colorAccentDarkMode : theme.colorAccent);
    root.style.setProperty('--selection', darkMode ? theme.colorSelectionDarkMode : theme.colorSelection);
    root.style.setProperty('--canvas', theme.colorCanvas);
    root.style.setProperty('--canvas-alpha1', theme.colorCanvas.replace(')', ', 0.01)'));
    root.style.setProperty('--canvas-alpha3', theme.colorCanvas.replace(')', ', 0.03)'));
    root.style.setProperty('--canvas-clear', theme.colorCanvas.replace(')', ', 0.1)'));
}

function updateTopSectionSize() {
    const top = document.getElementById("top");
    const topCanvas = document.getElementById("topCanvas");

    const screenHeight = window.innerHeight;
    const screenWidth = window.innerWidth;
    const rootS = getComputedStyle(root);
    top.style.height = screenHeight + convertRemToPixels(2) + parseInt(rootS.getPropertyValue('--radius').replace("px", "")) + "px";
    topCanvas.setAttribute('height', screenHeight + "px");
    topCanvas.setAttribute('width', screenWidth + "px");
}

function scrollFunction() {
    let stopSpirographWhenHidden = false;
    let updateOnScroll = [
        {propName: "navbarTransparent", mainAction: "add", elements: [navbar]},
        {propName: "logoLetterL", mainAction: "add", elements: [logoL]},
        {propName: "logoLetterR", mainAction: "add", elements: [logoR]},
        {propName: "logoFirstLetterMargin", mainAction: "add", elements: [logoLF, logoRF]},
        {propName: "logoContainerTransparent", mainAction: "add", elements: [logoContainer]},
        {
            propName: "buttonTransparent",
            mainAction: "add",
            elements: [btReadme, btEducation, btExperience, btProjects, btLanguages, btCv]
        },
        {propName: "buttonsTransparent", mainAction: "add", elements: [buttons]},
        {propName: "accentColor", mainAction: "remove", elements: [logoRF, logoLF]},
    ]

    let viewportOffset = el.getBoundingClientRect();
    let top = viewportOffset.top;

    if (top > 0) {
        // Navbar top view
        if (!navbarTopView || navbarInitRequired) {
            updateOnScroll.forEach((obj) => {
                obj.elements.forEach((element) => {
                    if (obj.mainAction === "add") {
                        element.classList.add(obj.propName);
                    } else {
                        element.classList.remove(obj.propName);
                    }
                });
            });

            if (stopSpirographWhenHidden) {
                spirograph.startAnimation();
            }
            navbarTopView = true;
            navbarInitRequired = false;
        }
    } else {
        // Navbar default view
        if (navbarTopView || navbarInitRequired) {
            updateOnScroll.forEach((obj) => {
                obj.elements.forEach((element) => {
                    if (obj.mainAction !== "add") {
                        element.classList.add(obj.propName);
                    } else {
                        element.classList.remove(obj.propName);
                    }
                });
            });

            if (stopSpirographWhenHidden) {
                spirograph.stopAnimation();
            }
            navbarTopView = false;
            navbarInitRequired = false;
        }
    }
}

function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({behavior: "smooth", block: "start", inline: "start"});
}

function toggleDetails(element) {
    let project = element.dataset.project;
    let div = document.getElementById("details_" + project);
    let card = document.getElementById("card_" + project);

    if (element.innerText === SHOW_README) {
        // Show readme
        if (element.dataset.loaded === "false") {
            div.innerHTML += "<zero-md src=\"docs/projects/" + project + "/README.md\"><template>" +
                "   <style>" +
                "       h1, h2, h3 {" +
                "           color: var(--text);" +
                // "           border-bottom: 1px solid var(--line);" +
                "       }" +
                "       p {" +
                "           color: var(--text-secondary);" +
                "       }" +
                "       hr {" +
                "           height: 4px;" +
                "           background-color: #EF6C00;" +
                "       }" +
                "   </style>" +
                "</template></zero-md>";
            element.dataset.loaded = "true";
        }

        element.innerText = HIDE_README;
        card.classList.add("detailedCard");
        card.classList.remove("nonDetailedCard");
        div.style.maxHeight = "600rem";
        div.style.paddingBottom = "2rem";
    } else {
        // Hide readme
        element.innerText = SHOW_README;
        card.classList.remove("detailedCard");
        card.classList.add("nonDetailedCard");
        div.style.maxHeight = "0";
        div.style.paddingBottom = "0";
    }
}

// ========== DEBUGGING ==========
function plotSpirograph(config) {
    const canvas = document.getElementById('topCanvas');
    const context = canvas.getContext('2d');
    const x0 = canvas.width / 2;
    const y0 = canvas.height / 2;
    if (config.rotationCount === 0) {
        config.rotationCount = 10;
    }

    context.beginPath();
    context.strokeStyle = '#444444';
    context.lineWidth = config.lineWidth;
    context.moveTo(x0 + (config.R1 - config.R2) + config.r, y0);

    let x, y, theta2;
    for (let theta1 = 0; theta1 <= Math.PI * 2 * config.rotationCount; theta1 += config.sensitivity) {
        theta2 = -(theta1 * (config.R1 - config.R2) / config.R2);
        x = x0 + (config.R1 - config.R2) * Math.cos(theta1) + config.r * Math.cos(theta2);
        y = y0 + (config.R1 - config.R2) * Math.sin(theta1) + config.r * Math.sin(theta2);

        context.lineTo(x, y);
    }

    context.stroke();
}
