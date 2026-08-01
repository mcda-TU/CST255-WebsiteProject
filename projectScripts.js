/*
    CST255 Internet and Website Development
    Website Project: Index
    Career Interests and Goals
    Author: Austin McDonough
    Date: 08/01/26

    filename: projectScript.js
*/


let button = document.getElementById("darkLightPB");
let body = document.getElementById("siteBody");
let h1 = document.querySelectorAll("h1");
let h2 = document.querySelectorAll("h2");
let sidebar = document.getElementById("sidenote");
let darkMode = localStorage.getItem("darkMode");
const heading = document.getElementById('main-title');


function darkLightToggle() {
    body.classList.toggle("darkMode");
    body.classList.toggle("lightMode");

    h1.forEach((element) => {
        element.classList.toggle("h1Light");
        element.classList.toggle("hDark");
    });

    h2.forEach((element) => {
        element.classList.toggle("h2Light");
        element.classList.toggle("hDark");
    });

    try {
        sidebar.classList.toggle("sidebarLight");
        sidebar.classList.toggle("sidebarDark");
    } catch (error) {
        console.log("No sidebars on this page");
    }
    

    if (body.classList.contains("darkMode")) {
        button.textContent = 'Dark Mode';
        localStorage.setItem("darkMode", "true");
    } else {
        button.textContent = 'Light Mode';
        localStorage.setItem("darkMode", "false");
    }
};



function darkLightLoad() {
    darkMode = localStorage.getItem("darkMode");
    if (darkMode == "true") {
        body.classList.remove("lightMode");
        body.classList.add("darkMode");

        h1.forEach((element) => {
            element.classList.remove("h1Light");
            element.classList.add("hDark");
        });

        h2.forEach((element) => {
            element.classList.remove("h2Light");
            element.classList.add("hDark");
        });

        try {
            sidebar.classList.remove("sidebarLight");
            sidebar.classList.add("sidebarDark");
        } catch (error) {
            console.log("No sidebars on this page");
        }
 
    };


    if (body.classList.contains("darkMode")) {
        button.textContent = 'Dark Mode';
        localStorage.setItem("darkMode", true);
    } else {
        button.textContent = 'Light Mode';
        localStorage.setItem("darkMode", false);
    }

};


button.addEventListener('click', darkLightToggle);


document.addEventListener("DOMContentLoaded", function() {
    darkLightLoad();
});