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