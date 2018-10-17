import Vue from 'vue'
import Router from 'vue-router'

const components = {
  layout:() => import('@/views/layout/layout'),
  index:() => import('@/views/index/index'),
  login:() => import('@/views/login/index'),
  notice: () => import('@/views/notice/notice'),
  person: () => import('@/views/person/person'),
  news:() => import('@/views/news/news'),
  newsDetail:() => import('@/views/news/newsDetail'),
  organizations:() => import('@/views/organization/index'),
  build:() => import('@/views/build/index'),
  showIdentity:() => import('@/views/showIdentity/index'),
  history: () => import('@/views/history/index'),
  learn: () => import('@/views/learn/index'),
  photo: () => import('@/views/photo/index'),
  system:() => import('@/views/system/index'),
  activity: () => import('@/views/activity/index')
}

Vue.use(Router)

let router = new Router({
  // base:'/',
  // redirect:'/index',
  routes: [
    {
      path: '/layout',
      name: 'layout',
      component: components.layout,
      redirect:'/layout/index',
      children: [
        {
          path:'index',
          name: 'index',
          meta: {
            title:'信工党建e家'
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
      path: '/login',
      name: 'login',
      meta: {
        title: '登录'
      },
      component: components.login
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
      component: components.newsDetail
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
      component: components.newsDetail
    },
    {
      path: '/noticeDetail/:id',
      name:'noticeDetail',
      meta: {
        title: '通知早知道'
      },
      component: components.newsDetail
    },
    {
      path: '/history',
      name: 'history',
      meta: {
        title: '党史上的今天'
      },
      component: components.history
    },
    {
      path: '/learn',
      name: 'learn',
      meta: {
        title: '随时随地学'
      },
      component: components.learn
    },
    {
      path: '/learnDetail',
      name: 'learnDetail',
      meta: {
        title: '随时随地学'
      },
      component: components.newsDetail
    },
    {
      path: '/photo',
      name: 'photo',
      meta: {
        title: '随时随地拍'
      },
      component: components.photo
    },
    {
      path: '/photoDetail',
      name: 'photoDetail',
      meta: {
        title: '随时随地拍'
      },
      component: components.newsDetail
    },
    {
      path: '/system',
      name: 'system',
      meta: {
        title: '制度建设'
      },
      component: components.system
    },
    {
      path: '/systemDetail',
      name: 'systemDetail',
      meta: {
        title: '制度建设'
      },
      component: components.newsDetail
    },
    {
      path: '/activity',
      name: 'activity',
      meta: {
        title: '特色活动'
      },
      component: components.activity
    },
    {
      path: '/activityDetail',
      name: 'activityDetail',
      meta: {
        title: '特色活动'
      },
      component: components.newsDetail
    },
  ]
})

router.beforeEach((to,from,next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }

  next()
})

export default router
