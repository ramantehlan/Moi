<template>
<div>
    <SkillBar v-for="(value, index) in skills.data" v-bind:color="skills.color" v-bind:title="skills.title" v-bind:value="value" v-bind:index="index" v-bind:key="value.name"> </SkillBar>
</div>
</template>

<style scope>
</style>

<script>
import SkillBar from '@/components/SkillBar'

export default {
    props: ['skills'],
    components: {
        SkillBar
    }
}
</script>
