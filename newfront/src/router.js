import Vue from 'vue'
import Router from 'vue-router'
import Admin from '@/views/Admin.vue'
import AccountBase from '@/views/_AccountBase.vue'
import AccountProjects from '@/views/AccountProjects.vue'
import AccountPagesHierarchy from '@/views/AccountPagesHierarchy.vue'
import AccountPageLayouts from '@/views/AccountPageLayouts.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'account',
      redirect: {name: 'projects'},
      component: AccountBase,
      children: [
        {path: '/', name: 'projects', component: AccountProjects, meta: {title: "Projects"}},
        {path: '/pages-hierarchy', name: 'pagesHierarchy', component: AccountPagesHierarchy, meta: {title: "Page Hierarchy"}},
        {path: '/page-layouts', name: 'pageLayouts', component: AccountPageLayouts, meta: {title: "Page Layouts"}},
      ]
    },
    {
      path: '/project/:id',
      props: true,
      name: 'project',
      component: () => import(/* webpackChunkName: "acc" */ '@/views/Project.vue')
    },
    {
      path: '/project-view',
      props: true,
      name: 'projectView',
      component: () => import(/* webpackChunkName: "acc" */ '@/views/ProjectView.vue')
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin
    },
  ]
})
