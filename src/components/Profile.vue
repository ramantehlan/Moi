<template>
<div class="profile">
      <div class="profile-content">
        <div class="profile-pic">
          <img :src="profile.image" alt="User">
        </div>
        <div class="profile-name title">
          {{ profile.name }}
        </div>
        <div class="profile-designation subtitle">
          {{ profile.domains }}
        </div>
        <div class="profile-about body">
          {{ profile.vision }}
        </div>
        <ul class="profile-footer">
          <a v-for="link in profile.link" :href="link.url" :key="link.title">
            <li>
              <i :class="'profile-icon ' + link.icon"></i>
              {{ link.label }}
            </li>
          </a>
        </ul>
      </div>
</div>
</template>

<style scope>
</style>

<script>
export default {
  props: ['profile']
}
</script>
