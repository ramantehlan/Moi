"use strict";

var menu = document.getElementById("menu");
var menuIcon = document.getElementById("menuIcon");
var menuList = document.getElementById("menuList");

menuIcon.addEventListener('click', function() {
if (menuList.className === "menu-list") {
  menuList.className += " menu-list-responsive";
  menuIcon.className += " menu-icon-clicked";
  menu.className += " menu-down";
} else {
  menuList.className = "menu-list";
  menuIcon.className = "fas fa-bars menu-icon";
  menu.className = "menu";
}
}, false);
