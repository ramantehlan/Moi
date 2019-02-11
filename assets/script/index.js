"use strict";

var card = Vue.component('card', {
  props: ['info'],
  template: `
<div class="card">
  <div class="card-header">
  <!--  <div class="decoration">
      {{ info.title }}
    </div> -->
    <div class="title">
      <a :href="info.url">{{ info.title }}</a>
    </div>
    <div class="subtitle-2">
      <div class="fas fa-location-arrow icon"></div>
      <a :href="info.projectUrl">
        {{ info.projectTitle }}
      </a>,
      {{ info.location }}
    </div>
    <div class="subtitle-2 date">
      <div class="fas fa-clock icon"></div>
      {{ info.timeline }}
    </div>
    <div class="subtitle-2 badge-container">
      <div class="fas fa-tags icon"></div>
      <div class="badge" v-for="tag in info.tag">{{tag}}</div>
    </div>

  </div>
  <div class="card-body body-2">
      {{ info.about }}
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
