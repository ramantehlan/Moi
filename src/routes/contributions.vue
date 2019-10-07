<template>
<div >
                <div class="break-heading">OpenSource Contributions [{{ contributions.length }}]</div>
                <div class="small-card-holder">
                  <SmallCard v-for="info in contributions" v-bind:info="info" v-bind:key="info.key"> </SmallCard>
                </div>

                <div class="break-heading">Communities [{{ communities.length }}]</div>
                <div class="small-card-holder">
                  <SmallCard v-for="info in communities" v-bind:info="info" v-bind:key="info.key"> </SmallCard>
                </div>
</div>
</template>

<style scope>
</style>

<script>
import SmallCard from '@/components/SmallCard'

export default {
    props: ['contributions','communities'],
    components: {
        SmallCard
    }
}
</script>
