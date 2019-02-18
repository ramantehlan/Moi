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

var card = Vue.component('card', {
  props: ['info'],
  template: `
<div class="card">
  <div class="card-header">

    <div class="decoration" v-if="info.decoration">
      {{ info.title }}
    </div>

    <div class="card-title title" v-if="info.title">
      <a :href="info.url" >
      {{ info.title }}
      </a>
    </div>

    <div class="card-title title" v-if="info.companyName">
      <a :href="info.companyUrl" >
      {{ info.companyName }}
      </a>
    </div>

    <div class="card-title title" v-if="info.institute">
      <a :href="info.url" >
      {{ info.institute }}
      </a>
    </div>

    <div class="subtitle-2" v-if="info.level">
      <div class="fas fa-user-graduate icon"></div>
      {{ info.level }}
    </div>

    <div class="subtitle-2" v-if="info.role">
      <div class="fas fa-user icon"></div>
        {{ info.role }}
    </div>

    <div class="subtitle-2" v-if="info.location">
      <div class="fas fa-map-marker icon"></div>
        {{ info.location }}
    </div>

    <div class="subtitle-2" v-if="info.event">
      <div class="fas fa-location-arrow icon"></div>
      <a :href="info.eventUrl">
        {{ info.event }}
      </a>
    </div>

    <div class="subtitle-2" v-if="info.productType">
      <div class="fas fa-tools icon"></div>
        {{ info.productType }}
    </div>

    <div class="subtitle-2 ">
      <div class="fas fa-clock icon"></div>
      {{ info.timeline }}
    </div>

    <div class="subtitle-2 badge-container" v-if="info.tag">
      <div class="fas fa-tags icon"></div>
      <div class="badge" v-for="tag in info.tag">{{tag}}</div>
    </div>
  </div>
  <div class="card-body body-2" >
      <p v-html="info.about"></p>
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
})

// Vue app lives in #view
var app = new Vue({
  el: '#view',
  data: {
    // To stop anything to render before data.json is loaded
    render: false,
    menuIconAllow: true
  },
  components: {
    card: card
  }
})

function init() {
  $(".hidden").hide();
  $("#education").show();
  $("#menuIcon").click(menuToggle);
}

function menuToggle(){
  if($(document).width() <= maxBreakPoint) {
    $("#menuList").slideToggle();
    $("#menuTitle").toggle();
  }
}

function showSection(section){
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
  } else {
    app.menuIconAllow = true;
  }

  window.onresize = function(event) {
    if ($(document).width() >= maxBreakPoint) {
      app.menuIconAllow = false
    } else {
      app.menuIconAllow = true;
    }
  };



})
