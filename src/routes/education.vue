<template>
<div >
    <span v-if="education">
                <div class="break-heading">Education [{{ education.length }}]</div>
                <card v-for="info in education" v-bind:info="info" v-bind:key="info.key"></card>
    </span>
    <span v-if="courses">
                <div class="break-heading">Online Cources [{{ courses.length }}]</div>
                <card v-for="info in courses" v-bind:info="info" v-bind:key="info.key" ></card>
    </span>
</div>
</template>

<style scope>
</style>

<script>
import Card from '@/components/Card'

export default {
    props: ['education','courses'],
    components: {
        Card
    }
}
</script>
