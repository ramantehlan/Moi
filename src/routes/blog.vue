<template>
<div >
        <div class="break-heading">Blog [{{ blog.length }}]</div>
        <card v-for="info in blog" v-bind:info="info" v-bind:key="info.key"></card>
</div>
</template>

<style scope>
</style>

<script>
import Card from '@/components/Card'

export default {
    props: ['blog'],
    components: {
        Card
    }
}
</script>
