<template>
  <div  class="card">
    <div class="card-header" >
      <i :id="info.key" class="fa fa-arrow-down card-arrow" @click="cardDown"></i>

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
      <div v-if="showCard" class='card-section'>
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
          <div class="badge" v-for="tag in info.tag" :key="tag">{{tag}}</div>
        </div>



      <div class="card-body body" v-if="info.about" v-html="info.about"></div>

      <div class="card-body body" v-if="info.coursework">
        <div class="card-body-grid">
          <div class="card-body-grid-box" v-for="(value, key) in info.coursework" :key="key">
            <b>{{ key }}</b>
            <ul>
              <li v-for="item in value" :key="item">- {{item}}</li>
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
</template>

<style scope>
</style>

<script>
export default {
  props: ['info'],
  data: () => ({
      showCard: false
  }),
  methods: {
      cardDown: function(){
          this.showCard = !this.showCard
      }
  }
}
</script>
