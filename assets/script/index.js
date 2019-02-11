"use strict";

var card = Vue.component('card', {
  props: ['info'],
  template: `
<div class="card">
  <div class="card-header">

    <div class="title">
      <a href="#">{{ info.title }}</a>
    </div>
    <div class="subtitle-2">
      <div class="fas fa-location-arrow icon"></div>
      NASA International Space App Challenge - 2018, Rohini, Delhi
    </div>
    <div class="subtitle-2 date">
      <div class="fas fa-clock icon"></div>
      07/09/2018 - 09/09/2018
    </div>
    <div class="subtitle-2 badge-container">
      <div class="fas fa-tags icon"></div>
      <div class="badge">C++</div>
      <div class="badge">Start Up</div>
      <div class="badge">Design Thinking</div>
      <div class="badge">New Life</div>
    </div>

  </div>
  <div class="card-body body-2">
    Smart AI to keep people safe on beaches from all the dangers. It uses ML
    and real time data to inform people about UV Index, Weather forecasts,
    Tsunamis, Harmful Algal Blooms (HABs), Animal Attacks and RIP currents
    (Using Optical Flow Analysis) etc, all through just one app.

    <ul>
      <li>Using current location fetch all the environmental factors, like
        UV Index, Pressure, Air Quality.</li>
      <li>Camera can take a short video of ocean to do Optical Flow Analysis
        , to detect RIP Currents.</li>
    </ul>
  </div>
</div>
`
})

var app = new Vue({
  el: '#view',
  data: {
    render: false
  },
  components: {
    card: card
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

function _(div) {
  return document.getElementById(div);
}
