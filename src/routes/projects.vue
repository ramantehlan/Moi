<template>
<div >
      <div class="break-heading">Projects [{{ projects.length }}]</div>
      <card v-for="info in projects" v-bind:info="info" v-bind:key="info.key"></card>
</div>
</template>

<style scope>
</style>

<script>
import Card from '@/components/Card'

export default {
    props: ['projects'],
    components: {
        Card
    }
}
</script>
