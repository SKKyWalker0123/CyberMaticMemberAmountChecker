import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Student from './views/Student.vue'
import AddStudent from './views/Addstudent.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/student',
      name: 'studnet',
      component: Student
    },
    {
      path: '/student/add',
      name: 'addstudent',
      component: AddStudent
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
