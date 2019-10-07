<template>
<div>
    <div class="break-heading">Achievements [{{ achievements.length }}]</div>
    <card v-for="info in achievements" v-bind:info="info" v-bind:key="info.key"></card>
</div>
</template>

<style scope>
</style>

<script>
import Card from '@/components/Card'

export default {
    props: ['achievements'],
    components: {
        Card
    }
}
</script>
