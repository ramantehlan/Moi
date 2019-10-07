<template>
<div>
    <div class="break-heading">Links [{{ links.length }}]</div>
        <div class="small-card-holder">
        <SmallCard v-for="info in links" v-bind:info="info" v-bind:key="info.key"> </SmallCard>
    </div>    
</div>
</template>

<style scope>
</style>

<script>
import SmallCard from '@/components/SmallCard'

export default {
    props: ['links'],
    components: {
        SmallCard
    }
}
</script>
