<template>
<div class="menu">
        <div class="menu-control" v-on:click="menuToggle">
          <div class="menu-title" id="menuTitle">About</div>
          <div id="menuIcon" class="fas fa-bars menu-icon"></div>
        </div>
        
        <ul class="menu-list" v-if="showMenu">
          <span class="menu-list-span">
              
            <router-link :to='item.to' v-for="item in menu" :key="item.title" >
                <li class="menu-list-item" v-if="item.display" :class="{'menu-list-selected':selectedLink == item.to}" v-on:click="selectLink(item.to)">
                    <i :class="item.icon" v-if="menuIconAllow"></i>{{ item.title }}
                </li>
            </router-link>
          </span>
        </ul>
</div>
</template>

<style scope>
</style>

<script>
export default {
  props: ['menu'],
    data: () => ({
    selectedLink: '',
    showMenu: true,
    menuIconAllow: false
  }),
  created: function(){
        this.selectedLink = this.$route.path
        console.log(this.$route.path)
  },
  methods: {
      menuToggle: function() {
          this.showMenu = !this.showMenu
      },
      selectLink: function(val) {
          this.selectedLink = val
      }
  }
}
</script>

