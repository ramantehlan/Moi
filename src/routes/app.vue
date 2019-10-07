<template>
<div id="view" >
  
  <!-- Profile Box  -->
  <div v-if="render">
    <Profile :profile='data.profile' ></Profile>
  </div>
  
  <div v-else>
    Loading...
  </div>
  
  <!-- Body Box -->
  <div class="view-body" v-if="render">
    <!-- Menu Box -->
    <Menu :menu='data.menu'></Menu>
    <!-- Content Box -->
    <div class="content">
        <div class="content-body">
            <router-view
                  :about='data.about' 
                  :profile='data.profile' 
                  :document='data.document' 
                  :work='data.work' 
                  :projects='data.projects'
                  :skills='data.skills'
                  :achievements='data.achievements'
                  :contributions='data.contributions'
                  :communities='data.communities'
                  :education='data.education'
                  :courses='data.courses'
                  :blog='data.blog'
                  :talks='data.talks'
                  :links='data.links'
                  :to="routerView.to"/>
        </div>
        <!-- Footer -->
        <div class="footer">
            Designed and Developed by <a href="https://ramantehlan.github.io">Raman Tehlan</a> | <a href="https://github.com/ramantehlan/Moi">Open Source</a>
        </div>
    </div>
  </div>

</div>
</template>

<script>
import Profile from '@/components/Profile'
import Menu from '@/components/Menu'

export default {
  props: ['data'],
  components:{
    Profile,
    Menu
  },
  data: () => ({
     render: false,
     routerView: {
                  name: 'About',
                  to: '/about'
                }
  }),
  watch: {
    data: function(){
      this.render = true
    }
  }
}
</script>

<style  src='@/style/index.scss' scope>
</style>
