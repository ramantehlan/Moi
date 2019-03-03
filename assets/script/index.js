/*
 * This is the main script to power the tempate
 *
 * Creator: Raman Tehlan <ramantehlan@gmail.com
 * Date of Creation: 12/02/2019
 */

var maxBreakPoint = 1200;

//
// Templates
//

var smallCard = Vue.component('smallCard', {
  props: ['info'],
  template: `
  <a :href="info.url" >
    <div class="small-card subtitle">
      <div class="subtitle" v-if="info.title">
        <i :class="info.icon + ' link-logo'" v-if="info.icon"></i>
        {{ info.title }}
      </div>
      <div class="subtitle light" v-if="info.timeline">
          {{ info.timeline }}
      </div>
    </div>
  </a>
  `
})

var skillbar = Vue.component('skillbar', {
  props: ['value', 'index', 'color', 'title'],
  template: `
  <div class="skill-group">
    <span class="break-heading subtitle" :style="'color:' + color[index] ">{{ title[index] }} [{{ value.length }}] </span>
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
    <div class="card-header" >
      <i :id="info.key" class="fa fa-arrow-down card-arrow" onclick="cardDown(this.id)"></i>

      <div class="title" v-if="info.title">
        <a :href="info.url">
          {{ info.title }}
        </a>
      </div>

      <div class="title" v-if="info.companyName">
        <a :href="info.companyUrl">
          {{ info.companyName }}
        </a>
      </div>

      <div class="title" v-if="info.institute">
        <a :href="info.url">
          {{ info.institute }}
        </a>
      </div>
      <div class="card-hidden-section" :id="info.key + 'Details'">
        <div class="subtitle" v-if="info.subtitle">
          {{ info.subtitle }}
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



      <div class="card-body body" v-if="info.about" v-html="info.about"></div>

      <div class="card-body body" v-if="info.coursework">
        <div class="card-body-grid">
          <div class="card-body-grid-box" v-for="(value, key) in info.coursework">
            <b>{{ key }}</b>
            <ul>
              <li v-for="item in value">- {{item}}</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="card-footer">
        <div class="card-number">
          #{{info.id}}
        </div>
      </div>
    </div>
  </div>
  </div>
`
});

  // Step-1: Fetch the user data 
  fetch('data.json').then((response) => {
    return response.json();
  }).then((data) => {
    // Assign data to view
    app.data = data;
    // Allow data to render
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

    let themeNumber = app.data.document.theme ;

    for(var key in app.data.themes[themeNumber]){
       document.documentElement.style.setProperty('--' + key, app.data.themes[themeNumber][key]); 
    }

    // To select the section from GET page
    // var url = new URL(window.location.href);
    // showSection(url.searchParams.get("page"));

    Vue.nextTick(function () {
      // Step-3
      init();
    })

  }).catch(function(error) {
    console.log(error);
  });

// Step-2: Create a view, Vue app lives in #view
var app = new Vue({
  el: '#view',
  data: {
    // To stop anything to render before data.json is loaded
    render: false,
    menuIconAllow: true
  },
  components: {
    card: card,
    skillbar: skillbar,
    smallcard: smallCard
  }
})


// First function to run when document is loaded
function init() {
  // To hide all the sections
  $(".hidden").hide();
  // To allow menu icon only when screen size is small
  $("#aboutBtn").addClass("menu-list-selected");
  $("#about").show();
  // To add the toggle function to menu
  $("#menuIcon").click(menuToggle);
  // Display menu on the basis of display size
  menuDisplay();

}

// To display menu when on mobile
function menuToggle() {
  if ($(document).width() <= maxBreakPoint) {
    $("#menuList").slideToggle();
  }
}

// To display any section
function showSection(section) {
  menuToggle();
  $(".menu-list-item").removeClass("menu-list-selected");
  $("#" + section + "Btn").addClass("menu-list-selected");
  $(".hidden").hide();
  $("#" + section).show();
  $("#menuTitle").html(section);
  
}

// To display card details
function cardDown(id) {
    $("#" + id + "Details").slideToggle();
    $("#" + id).toggleClass("fa-arrow-down");
    $("#" + id).toggleClass("fa-arrow-up");
}

// To check things on resize
function menuDisplay(){
  if ($(document).width() >= maxBreakPoint) {
    app.menuIconAllow = false
    $("#menuList").show();
  } else {
    app.menuIconAllow = true;
    $("#menuList").hide();
  }
}


window.onresize = function(event) {
  menuDisplay()
};

