"use strict";

var app = new Vue({
  el: '#view',
  data: {
    render: false
  }
})

fetch('data.json')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log("Json Loaded");
    app.data = data;
    app.render = true;
    menuToggle();
  }).catch(function(error) {
    console.log(error);
  });

function menuToggle() {
  var menu = _("menu");
  var menuIcon = _("menuIcon");
  var menuList = _("menuList");
  var menuTitle = _('menuTitle');

  menuIcon.addEventListener('click', function() {
    if (menuList.className === "menu-list") {
      menuList.className += " menu-list-responsive";
      menuIcon.className += " menu-icon-clicked";
      menu.className += " menu-down";
      menuTitle.style = "display:none";
    } else {
      menuList.className = "menu-list";
      menuIcon.className = "fas fa-bars menu-icon";
      menu.className = "menu";
      menuTitle.style = "display:block";
    }
  }, false);
}

function _(div){
  return document.getElementById(div);
}
