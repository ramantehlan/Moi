/*
 * This is the main script to power the tempate
 *
 * Creator: Raman Tehlan <ramantehlan@gmail.com
 * Date of Creation: 12/02/2019
 */

var maxBreakPoint = 1200;

//
// Card Tempate
//

var skillbar = Vue.component('skillbar', {
  props: ['value', 'index', 'color', 'title'],
  template: `
  <div class="skill-group">
    <span class="break-heading subtitle" :style="'color:' + color[index] ">{{ title[index] }}</span>
    <div class="skill-group-body">
      <div v-for="data in value" class="skill-name subtitle" :style="'background-color:' + color[index] ">
          {{ data.name }}
      </div>
    </div>
  </div>
  `
});

var card = Vue.component('card', {
  props: ['info'],
  template: `
<div class="card">
  <div class="card-header">

    <div class="title" v-if="info.title">
      <a :href="info.url" >
      {{ info.title }}
      </a>
    </div>

    <div class="title" v-if="info.companyName">
      <a :href="info.companyUrl" >
      {{ info.companyName }}
      </a>
    </div>

    <div class="title" v-if="info.institute">
      <a :href="info.url" >
      {{ info.institute }}
      </a>
    </div>

    <div class="subtitle" v-if="info.level">
      <i class="fas fa-user-graduate icon"></i>
      {{ info.level }}
    </div>

    <div class="subtitle" v-if="info.from">
      <i class="fa fa-university icon"></i>
      {{ info.from }}
    </div>

    <div class="subtitle" v-if="info.role">
      <i class="fas fa-user icon"></i>
        {{ info.role }}
    </div>

    <div class="subtitle" v-if="info.location">
      <i class="fas fa-map-marker icon"></i>
        {{ info.location }}
    </div>

    <div class="subtitle" v-if="info.event">
      <i class="fas fa-location-arrow icon"></i>
      <a :href="info.eventUrl">
        {{ info.event }}
      </a>
    </div>

    <div class="subtitle" v-if="info.productType">
      <i class="fas fa-tools icon"></i>
        {{ info.productType }}
    </div>

    <div class="subtitle ">
      <i class="fas fa-clock icon"></i>
      {{ info.timeline }}
    </div>

    <div class="subtitle badge-container" v-if="info.tag">
      <i class="fas fa-tags icon"></i>
      <div class="badge" v-for="tag in info.tag">{{tag}}</div>
    </div>
  </div>
  <div class="card-body body" >
      <p v-if="info.about" v-html="info.about"></p>
      <p v-if="info.coursework">
      <div class="card-body-grid">
          <div class="card-body-grid-box" v-for="(value, key) in info.coursework">
              <b>{{ key }}</b>
              <ul>
                <li v-for="item in value">- {{item}}</li>
              </ul>
          </div>
      </div>
      </p>
  </div>
  <div class="card-footer">
    <div class="card-number">
        #{{info.id}}
    </div>
  </div>
</div>
`
});

// Vue app lives in #view
var app = new Vue({
  el: '#view',
  data: {
    // To stop anything to render before data.json is loaded
    render: false,
    menuIconAllow: true
  },
  components: {
    card: card,
    skillbar: skillbar
  }
})

function init() {
  $(".hidden").hide();
  $("#homeBtn").addClass("menu-list-selected");
  $("#contributions").show();
  $("#menuIcon").click(menuToggle);
}

function menuToggle() {
  if ($(document).width() <= maxBreakPoint) {
    $("#menuList").slideToggle();
    $("#menuTitle").toggle();
  }
}

function showSection(section) {
  $(".hidden").hide();
  $("#" + section).show();
  $(".menu-list-item").removeClass("menu-list-selected");
  $("#" + section + "Btn").addClass("menu-list-selected");
  $("#menuTitle").html(section);
  menuToggle();
}

$(document).ready(function() {

  // Fetch the user data
  fetch('data.json').then((response) => {
    return response.json();
  }).then((data) => {
    console.log("Json Loaded");
    app.data = data;
    app.render = true;

    // Update the document details.
    $(document).attr("title", app.data.document.title);
    $("meta[name='author']").attr("content", app.data.document.author);
    $("meta[name='title']").attr("content", app.data.document.title);
    $("meta[name='keywords']").attr("content", app.data.document.keywords);
    $("meta[name='description']").attr("content", app.data.document.description);
    $("meta[name='language']").attr("content", app.data.document.language);
    $("meta[name='charset']").attr("content", app.data.document.charset);
    $("meta[name='robots']").attr("content", app.data.document.robots);
    $("meta[name='google-site-verification']").attr("content", app.data.document.google_site_verificatin);

    init();
  }).catch(function(error) {
    console.log(error);
  });


  // To allow menu icon only when screen size is small
  if ($(document).width() >= maxBreakPoint) {
    app.menuIconAllow = false
    $("#menuList").show();
  } else {
    app.menuIconAllow = true;
  }

  window.onresize = function(event) {
    if ($(document).width() >= maxBreakPoint) {
      app.menuIconAllow = false
      $("#menuList").show();
    } else {
      app.menuIconAllow = true;
    }
  };



})
