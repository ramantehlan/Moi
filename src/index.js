import Vue from 'vue'
import app from './routes/app'
import router from './router'

// False while in development
Vue.config.productionTip = false

// eslint-disable-next-line no-unused-vars
var application = new Vue({
  el: '#app',
  router,
  data: () => ({
    data: {}
  }),
  components: { app },
  template: '<app :data="data"/>'
})

// Fetch the data.json
fetch('data.json').then((response) => {
  return response.json()
}).then((data) => {
  application.data = data
  const items = data.document
  const profile = data.profile

  // update title
  document.querySelector('head title').textContent = items['title']

  // Update Meta Tags
  document.head.querySelector('meta[name="author"]').setAttribute('content', items['author'])
  document.head.querySelector('meta[name="title"]').setAttribute('content', items['title'])
  document.head.querySelector('meta[name="keywords"]').setAttribute('content', items['keywords'])
  document.head.querySelector('meta[name="description"]').setAttribute('content', items['description'])
  document.head.querySelector('meta[name="language"]').setAttribute('content', items['language'])
  document.head.querySelector('meta[name="charset"]').setAttribute('content', items['charset'])
  document.head.querySelector('meta[name="robots"]').setAttribute('content', items['robots'])
  document.head.querySelector('meta[name="google-site-verification"]').setAttribute('content', items['googleSiteVerificatin'])

  // Complete list can be found here
  // https://schema.org/Person
  // https://search.google.com/structured-data/testing-tool/u/0/
  // This is just the most important of all

  window.dataLayer = window.dataLayer || []
  function gtag () { window.dataLayer.push(arguments) }
  gtag('js', new Date())
  gtag('config', items.googleAnalyticsId);

  (function () {
    var data = {
      '@context': 'http://schema.org',
      '@type': 'Person',
      address: profile.address,
      email: profile.email,
      image: profile.image,
      jobTitle: profile.domains,
      name: profile.name,
      alumniOf: profile.alumniOf,
      birthPlace: profile.birthPlace,
      birthDate: profile.birthDate,
      height: profile.height,
      weight: profile.weight,
      gender: profile.gender,
      nationality: profile.nationality,
      url: profile.url,
      sameAs: profile.sameAs
    }
    console.log(data)
    var script = document.createElement('script')
    script.type = 'application/ld+json'
    script.innerHTML = JSON.stringify(data)
    document.getElementsByTagName('head')[0].appendChild(script)
  })(document)
})
