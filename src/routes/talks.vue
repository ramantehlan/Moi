<template>
<div >
        <div class="break-heading">Talks [{{ talks.length }}]</div>
        <card v-for="info in talks" v-bind:info="info" v-bind:key="info.key"></card>
</div>
</template>

<style scope>
</style>

<script>
import Card from '@/components/Card'

export default {
    props: ['talks'],
    components: {
        Card
    }
}
</script>
