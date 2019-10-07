<template>
<div >
    <div class="break-heading">Work Experience [{{ work.length }}]</div>
    <card v-for="info in work" v-bind:info="info" v-bind:key="info.key"></card>
</div>
</template>

<style scope>
</style>

<script>
import Card from '@/components/Card'

export default {
    props: ['work'],
    components: {
        Card
    }
}
</script>
