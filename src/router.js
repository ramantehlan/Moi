import Vue from 'vue'
import Router from 'vue-router'

// Page content
// import app from '@/routes/app'
import about from '@/routes/about'
import achievements from '@/routes/achievements'
import blog from '@/routes/blog'
import contributions from '@/routes/contributions'
import education from '@/routes/education'
import links from '@/routes/links'
import projects from '@/routes/projects'
import skills from '@/routes/skills'
import talks from '@/routes/talks'
import work from '@/routes/work'

// Fallback page
import PageNotFound from '@/routes/errorPages/404'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'About',
    component: about
  },
  {
    path: '/achievements',
    name: 'Achievements',
    component: achievements
  },
  {
    path: '/blog',
    name: 'Blog',
    component: blog
  },
  {
    path: '/contributions',
    name: 'Contributions',
    component: contributions
  },
  {
    path: '/education',
    name: 'Education',
    component: education
  },
  {
    path: '/links',
    name: 'Links',
    component: links
  },
  {
    path: '/projects',
    name: 'Projects',
    component: projects
  },
  {
    path: '/skills',
    name: 'Skills',
    component: skills
  },
  {
    path: '/talks',
    name: 'Talks',
    component: talks
  },
  {
    path: '/work',
    name: 'Work',
    component: work
  },
  {
    path: '**',
    name: 'PageNotFound',
    component: PageNotFound
  }
]

export default new Router({
  routes
})
