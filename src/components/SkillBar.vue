<template>
<div class="skill-group">
    <span class="break-heading" :style="'color:' + color[index]">{{ title[index] }} [{{ value.length }}] </span>
    <div class="skill-group-body">
      <div v-for="data in value" :key="data.name" class="skill-name subtitle" :style="'background-color:' + color[index]" >
          {{ data.name }}
      </div>
    </div>
</div>
</template>


<style scope>
</style>

<script>
export default {
  props: ['value', 'index', 'color', 'title'],
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
