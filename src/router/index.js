import Vue from 'vue'
import Router from 'vue-router'
import 'muse-ui-progress/dist/muse-ui-progress.css'
import MuseUIProgress from 'muse-ui-progress'
Vue.use(MuseUIProgress, {
  top: 0,                // position fixed top
  speed: 200,            // progress speed
  color: 'primary',      // color
  size: 2,               // progress size
  className: ''          // progress custom class
})

const components = {
  layout:() => import('@/views/layout/layout'),
  index:() => import('@/views/index/index'),
  login:() => import('@/views/login/index'),
  person: () => import('@/views/person/person'),
  news:() => import('@/views/news/news'),
  newsDetail:() => import('@/views/news/newsDetail'),
  organizations:() => import('@/views/organization/index'),
  history: () => import('@/views/history/index'),
  photo: () => import('@/views/photo/index'),
  interactive: () => import('@/views/interactive/index'),
  infomation: () => import('@/views/person/infomation'),
  findorg: () => import('@/views/organization/findorg'),
  thinkReport: () => import('@/views/organization/thinkReport'),
  discuss: () => import('@/views/organization/discuss'),
  personalSummary: () => import('@/views/organization/personalSummary'),
  score: () => import('@/views/person/score'),
  scoreDetail: () => import('@/views/person/scoreDetail'),
  fee: () => import('@/views/person/fee'),
  updatePass: () => import('@/views/person/updatePass'),
  
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
            title: '通知早知道',
            type: 2
          },
          component: components.news
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
        title: '信工新闻眼',
        type:0
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
        title: '党建一点通',
        type: 3
      },
      component: components.news
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
        title: '党员亮身份',
        type: 5
      },
      component: components.news
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
        title: '随时随地学',
        type: 6
      },
      component: components.news
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
        title: '制度建设',
        type: 4
      },
      component: components.news
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
        title: '特色活动',
        type: 1
      },
      component: components.news
    },
    {
      path: '/activityDetail',
      name: 'activityDetail',
      meta: {
        title: '特色活动'
      },
      component: components.newsDetail
    },
    {
      path: '/politicsStudy',
      name: 'politics',
      meta: {
        title: '政治学习',
        type: 8
      },
      component: components.news
    },
    {
      path: '/politicsDetail',
      name: 'politicsDetail',
      meta: {
        title: '政治学习'
      },
      component: components.newsDetail
    },
    {
      path: '/interactive',
      name: 'interactive',
      meta: {
        title: '党员云互动',
        type: 9
      },
      component: components.interactive
    },
    {
      path: '/findorg',
      name: 'findorg',
      meta: {
        title: '流动党员找组织'
      },
      component: components.findorg
    },
    {
      path: '/thinkReport',
      name: 'thinkReport',
      meta: {
        title: '思想汇报'
      },
      component: components.thinkReport
    },
    {
      path: '/summary',
      name: 'summary',
      meta: {
        title: '心得总结'
      },
      component: components.thinkReport
    },
    {
      path: '/discuss',
      name: 'discuss',
      meta: {
        title: '掌上组织生活'
      },
      component: components.discuss
    },
    {
      path: '/personalSummary',
      name: 'personalSummary',
      meta: {
        title: '个人总结'
      },
      component: components.personalSummary
    },
    {
      path: '/infomation',
      name: 'infomation',
      meta: {
        title: '个人信息'
      },
      component: components.infomation
    },
    {
      path: '/updateInfo',
      name: 'updateInfo',
      meta: {
        title: '修改个人信息'
      },
      component: components.infomation
    },
    {
      path: '/score',
      name: 'score',
      meta: {
        title: '个人量化积分'
      },
      component: components.score
    },
    {
      path: '/scoreDetail',
      name: 'scoreDetail',
      meta: {
        title: '积分明细'
      },
      component: components.scoreDetail
    },
    {
      path: '/updatePass',
      name: 'updatePass',
      meta: {
        title: '修改密码'
      },
      component: components.updatePass
    },
    {
      path:"/interactiveReply",
      name:"interactiveReply",
      meta: {
        title: '党员云互动'
      },
      component:() => import('@/views/interactive/reply')
    },
    {
      path: '/fee',
      name: 'fee',
      meta: {
        title: '党费缴纳'
      },
      component: components.fee
    }
    
  ]
})

router.beforeEach((to,from,next) => {
  MuseUIProgress.start()

  if (to.meta.title) {
    document.title = to.meta.title
  }

  next()
})

router.afterEach((to,from) => {
  MuseUIProgress.done()
})

export default router
