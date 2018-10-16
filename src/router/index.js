import Vue from 'vue'
import Router from 'vue-router'

const components = {
  layout:() => import('@/views/layout'),
  index:() => import('@/views/index'),
  notice: () => import('@/views/notice/notice'),
  person: () => import('@/views/person/person'),
  news:() => import('@/views/news/news'),
  newsDetail:() => import('@/views/news/newsDetail'),
  organizations:() => import('@/views/organization/index'),
  build:() => import('@/views/build/index'),
  buildDetail:() => import('@/views/build/buildDetail'),
  showIdentity:() => import('@/views/showIdentity/index'),
  showIdentityDetail: () => import('@/views/showIdentity/detail')
}

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/layout',
      name: 'layout',
      component: components.layout,
      redirect:'/index',
      children: [
        {
          path:'index',
          name: 'index',
          meta: {
            title:'首页'
          },
          component: components.index
        },
        {
          path: 'notice',
          name: 'notice',
          meta: {
            title: '通知早知道'
          },
          component: components.notice
        },
        {
          path: 'person',
          name: 'person',
          meta: {
            title: '我的党建'
          },
          component: components.person
        }
      ]
    },
    {
      path:'/news',
      name:'news',
      meta: {
        title: '信工新闻眼'
      },
      component: components.news
    },
    {
      path:'/newsDetail/:id',
      name:'newsDetail',
      meta: {
        title: '信工新闻眼'
      },
      component: components.newsDetail
    },
    {
      path: '/organizations',
      name: 'organizations',
      meta: {
        title: '掌上组织生活'
      },
      component: components.organizations
    },
    {
      path: '/build',
      name: 'build',
      meta: {
        title: '党建一点通'
      },
      component: components.build
    },
    {
      path: '/buildDetail/:id',
      name: 'buildDetail',
      meta: {
        title: '党建一点通'
      },
      component: components.buildDetail
    },
    {
      path: '/showIdentity',
      name: 'showIdentity',
      meta: {
        title: '党员亮身份'
      },
      component: components.showIdentity
    },
    {
      path: '/showIdentityDetail/:id',
      name: 'showIdentityDetail',
      meta: {
        title: '党员亮身份'
      },
      component: components.showIdentityDetail
    }
  ]
})

router.beforeEach((to,from,next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }

  next()
})

export default router
