const skills = {
    languages: [
        { name: 'Java Script', iconName: 'js' },
        { name: 'Java' },
        { name: 'Python' },
        { name: 'Golang' },
        { name: 'C++', iconName: 'cpp' },
        { name: 'C Language', iconName: 'c' },
        { name: 'PHP' },
        { name: 'MATLAB' },
    ],
    frameworks: [
        { name: 'Tensorflow' },
        { name: 'PyTorch' },
        { name: 'NodeJS' },
        { name: 'Spring Boot' },
        { name: 'Flask' },
    ],
    tools: [
        { name: 'Git' },
        { name: 'Docker' },
        { name: 'SQL' },
        { name: 'Google Cloud Platform', iconName: 'gcp' },
        { name: 'Firebase' },
    ],
    other: [
        { name: 'REST API', iconName: 'rest' },
        { name: 'Android Studio' },
        { name: 'HTML' },
        { name: 'CSS' },
        { name: 'System Verilog', iconName: 'verilog'},
        { name: 'Assembly' },
    ],
}

loadSkillCards();

function getIcon(skill) {
    let iconName = skill.name.toLowerCase().replaceAll(" ", "-");
    let iconExtension = ".png";

    if (skill.iconName) {
        iconName = skill.iconName;
    }

    if (skill.iconExtension) {
        iconExtension = skill.iconExtension;
    }

    return "/res/icons/" + iconName + iconExtension;
}

function loadSkillCards() {
    for (let category in skills) {
        const skillCards = document.getElementById("skillCards-" + category);
        skillCards.innerHTML = "";

        skills[category].forEach((skill) => {
            skillCards.innerHTML = skillCards.innerHTML +
                "<div class=\"gridCard\">\n" +
                "    <img src=\"" + getIcon(skill) + "\" class=\"smaller-logo icon\" alt=\"" + skill.name + " icon\">\n" +
                "    <p class=\"text\"><b>" + skill.name + "</b></p>\n" +
                "</div>";
        })
    }
}