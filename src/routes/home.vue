<template>
<div class="small-content-body">
              <h1> {{ home.title }} </h1>
              <p v-html="home.body" class="home-p"> </p>
              <p v-html="home.signature" class="home-signature"></p>
              <p class="social-media-box">
                 <a :href="'https://twitter.com/intent/tweet?&text=Hey!%20Check%20this%20profile%20out.&tw_p=tweetbutton&url=' + profile.url" target="_blank" class="btn"><i class="fab fa-twitter"></i> Tweet</a>

                 <a :href="'https://www.facebook.com/sharer/sharer.php?u=' + profile.url " target="_blank" class="btn"><i class="fab fa-facebook-f"></i> Share </a>

                 <a :href="'http://www.reddit.com/submit?url=' + profile.url + '&title=' + document.title" class="btn" target="_blank"><i class="fab fa-reddit-alien"> </i> Post</a>

              </p>
</div>
</template>

<style scope>
</style>

<script>
export default {
  props: ['home','profile','document']
}
</script>
