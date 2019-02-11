/*
* This is the main script to power the tempate
*
* Creator: Raman Tehlan <ramantehlan@gmail.com
* Date of Creation: 12/02/2019
*/

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

// Vue app lives in #view
var app = new Vue({
  el: '#view',
  data: {
    // To stop anything to render before data.json is loaded
    render: false
  },
  components: {
    card: card
  }
})

$(document).ready(function(){

  fetch('data.json')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log("Json Loaded");
      app.data = data;
      app.render = true;
      menuToggle();
      itemToggle();
    }).catch(function(error) {
      console.log(error);
  });

})



function itemToggle(){
    let hidden = c("hidden");
    let home = i("home");

    hideAll(hidden);
    show(home)
}


function menuToggle() {

  $("#menuIcon").click(function(){
    $("#menuList").slideToggle();
    $("#menuTitle").toggle();
  })

}
