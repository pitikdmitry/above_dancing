"use strict";

var myNav = document.getElementById('sectionsNav');
window.onscroll = function () {
    if (document.body.scrollTop >= 100 || document.documentElement.scrollTop >= 100 ) {
        myNav.classList.remove("navbar-transparent");
    }
    else {
        myNav.classList.add("navbar-transparent");
    }
};

document.getElementById("nav-open-button").onclick = function() {
    var bodyClick = document.getElementById("bodyClick");
    console.log(bodyClick)
    var htmlElement = document.querySelector("html");

    if (bodyClick === undefined || bodyClick === null) {
        var bodyElement = document.querySelector("body");
        htmlElement.classList.add("nav-open");
        var additionalDiv = document.createElement('div');
        additionalDiv.setAttribute("id", "bodyClick");
        bodyElement.appendChild(additionalDiv);
    } else {
        htmlElement.classList.remove("nav-open");
        bodyClick.remove();
    }
}
