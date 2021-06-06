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

var btnMenu = document.querySelector('#nav-open-button');
var htmlElement = document.querySelector("html");
var menu = document.querySelector('.navbar-collapse');

var toggleMenu = function() {
    htmlElement.classList.toggle("nav-open");
    myNav.classList.toggle("dark-background");
}

btnMenu.addEventListener('click', function(e) {
    e.stopPropagation();
    toggleMenu();
});

document.addEventListener('click', function(e) {
    var target = e.target;
    var its_menu = target == menu;
    var its_btnMenu = target == btnMenu;
    var menu_is_active = htmlElement.classList.contains("nav-open");

    if (!its_menu && !its_btnMenu && menu_is_active) {
        toggleMenu();
    }
});
