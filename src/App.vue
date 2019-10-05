<template>
<div>
  <router-view :to="routerView.to"/>
</div>
</template>

<script>
export default {
  data: () => ({
     routerView: {
                  name: 'Home',
                  to: '/'
                }
  })
}
</script>

<style  src='@/style/index.scss' scope>
</style>
