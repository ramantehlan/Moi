<template>
<div>
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
</div>
</template>

<style scope>
</style>

<script>
export default {
  props: ['info'],
  data: () => ({

  })
}
</script>
