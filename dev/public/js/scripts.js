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

// ========== Generic functions ==========
function convertRemToPixels(rem) {
    return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}

function isMobileBrowser() {
    var check = false;
    (function (a) {
        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
    })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
}

// Cookie functions from W3Schools
// https://www.w3schools.com/js/js_cookies.asp
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

// ========== EE-Related ==========
function loadHunterProfile(flag) {
    // Load badges box
    if (parseInt(getCookie("hunter")) >= 0) {
        // Badge box & EE1
        if (!isMobileBrowser() && !badgeBoxShown) {
            badgeBoxShown = true;
            const MAX_SCROLL = 50;
            setLength();
            gate.resize(setLength);
            const ee1I = document.getElementById("ee1");

            gate.mousewheel(function (event, delta) {
                outset = gate.scrollTop();
                if (delta === 1 && outset === 0 && count <= MAX_SCROLL) {
                    let top = MAX_SCROLL - count;
                    ee1I.style.marginTop = "-" + top + "rem";
                    count += 3;
                }
                if (count > MAX_SCROLL - 5) {
                    ee1I.style.marginTop = "0";
                    count = MAX_SCROLL + 1;

                    ee1();
                }
            });
        }
    }

    if (parseInt(getCookie("hunter")) > 1) {
        const eeMainBoxTitle = document.getElementById("eeMainBoxTitle");
        const eeMainBoxText = document.getElementById("eeMainBoxText");
        const eeMainHint = document.getElementById("eeMainHint");
        const eeBadgeGrid = document.getElementById("eeBadgeGrid");
        const ee1 = document.getElementById("ee1");

        const hunterLevel = parseInt(getCookie("hunter"));
        const ee0Badge = document.getElementById("ee0Badge");
        const ee1Badge = document.getElementById("ee1Badge");

        const greetings = ["Hello again!", "Nice to see you again!"];
        eeMainBoxTitle.innerText = greetings[Math.floor(Math.random() * greetings.length)];
        eeMainBoxText.innerText = "Hope you are enjoying the egg hunt. Here are your badges from the eggs you have already found:";
        eeMainHint.style.display = "none";
        ee1.classList.remove("eeBoxMin");
        eeBadgeGrid.classList.remove("hidden");

        if (hunterLevel > 1) {
            ee0Badge.classList.remove("hidden");
            ee1Badge.classList.remove("hidden");
        }
    }

    if (parseInt(getCookie("hunter")) > 0) {
        // Hide EE0
        const eeStarter = document.getElementById("eeStarter");
        eeStarter.classList.add("accentColor");
        eeStarter.classList.remove("clkOnMe");
    }

    // Load EE2
    if (getCookie("hunter") === "1") {
        if (theme.linkedSpirographId === 2 && flag === "restart") {
            const subTitle = document.getElementById("subTitle");
            subTitle.innerText = "Scroll down, or view the page source code...";
        }
        const closeFooter = document.getElementById("closeFooter");
        closeFooter.style.display = "block";
    }
}

function ee0() {
    if (getCookie("hunter") === "") {
        if (!isMobileBrowser()) {
            const ee0 = document.getElementById("ee0");
            ee0.style.display = "block";

            setCookie("hunter", "0", COOKIE_EX_DAYS);
            loadHunterProfile();
        } else {
            alert("Seems like you found something! Unfortunately, what you found cannot be viewed on mobile. Check it out on your PC.");
        }
    }
}

function ee1() {
    if (getCookie("hunter") === "0") {
        setCookie("hunter", "1", COOKIE_EX_DAYS);
        loadHunterProfile();
    }
}

function ee2() {
    if (getCookie("hunter") === "1") {
        const footer = document.getElementById("footer");
        const closeFooter = document.getElementById("closeFooter");
        const footerText = document.getElementById("footerText");
        footer.classList.add("transparentFooter");
        closeFooter.style.display = "none";
        footerText.classList.add("textColor");
        footerText.innerText = "Congrats! Other eggs are not implemented in the live version yet. Come back later " +
            "when more eggs are planted."

        setCookie("hunter", "2", COOKIE_EX_DAYS);
        loadHunterProfile();
    }
}

function setLength() {
    edge = $(document).height() - gate.height();
}

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
