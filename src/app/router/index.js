import VueRouter from 'vue-router'
import user from './user'
// import order from './order'
// import auth from './auth'

export default new VueRouter({
  routes: [
    ...user
  ]
})
