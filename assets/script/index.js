"use strict";

var menuIcon = document.getElementById("menuIcon");
var menuList = document.getElementById("menuList");

menuIcon.addEventListener('click', function() {
if (menuList.className === "menu-list") {
  menuList.className += " menu-list-responsive";
} else {
  menuList.className = "menu-list";
}
}, false);
