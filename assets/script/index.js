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
    <div class="decoration" v-if="decoration">
      {{ info.title }}
    </div>
    <div class="card-title title">
      <a :href="info.url">
      {{ info.title }}
      </a>

    </div>
    <div class="subtitle-2">
      <div class="fas fa-location-arrow icon"></div>
      <a :href="info.subTitleUrl">
        {{ info.subTitle }}
      </a>
    </div>
    <div class="subtitle-2 ">
      <div class="fas fa-clock icon"></div>
      {{ info.timeline }}
    </div>
    <div class="subtitle-2 badge-container">
      <div class="fas fa-tags icon"></div>
      <div class="badge" v-for="tag in info.tag">{{tag}}</div>
    </div>
  </div>
  <div class="card-body body-2" >
      <p v-html="info.about"></p>
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
  $("#home").show();
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
