import VueRouter from 'vue-router'

//引入组件
import Index from '../pages'
import Home from '../pages/home/home'
import Login from '../pages/login/login'
import Register from '../pages/register/register'
import Center from '../pages/center/center'
import Storeup from '../pages/storeup/list'
import News from '../pages/news/news-list'
import NewsDetail from '../pages/news/news-detail'
import caipanyuanList from '../pages/caipanyuan/list'
import caipanyuanDetail from '../pages/caipanyuan/detail'
import caipanyuanAdd from '../pages/caipanyuan/add'
import yonghuList from '../pages/yonghu/list'
import yonghuDetail from '../pages/yonghu/detail'
import yonghuAdd from '../pages/yonghu/add'
import shipinfenleiList from '../pages/shipinfenlei/list'
import shipinfenleiDetail from '../pages/shipinfenlei/detail'
import shipinfenleiAdd from '../pages/shipinfenlei/add'
import jianmeicaoList from '../pages/jianmeicao/list'
import jianmeicaoDetail from '../pages/jianmeicao/detail'
import jianmeicaoAdd from '../pages/jianmeicao/add'
import pingfenList from '../pages/pingfen/list'
import pingfenDetail from '../pages/pingfen/detail'
import pingfenAdd from '../pages/pingfen/add'
import systemintroList from '../pages/systemintro/list'
import systemintroDetail from '../pages/systemintro/detail'
import systemintroAdd from '../pages/systemintro/add'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}

//配置路由
export default new VueRouter({
	routes:[
		{
      path: '/',
      redirect: '/index/home'
    },
		{
			path: '/index',
			component: Index,
			children:[
				{
					path: 'home',
					component: Home
				},
				{
					path: 'center',
					component: Center,
				},
				{
					path: 'storeup',
					component: Storeup
				},
				{
					path: 'news',
					component: News
				},
				{
					path: 'newsDetail',
					component: NewsDetail
				},
				{
					path: 'caipanyuan',
					component: caipanyuanList
				},
				{
					path: 'caipanyuanDetail',
					component: caipanyuanDetail
				},
				{
					path: 'caipanyuanAdd',
					component: caipanyuanAdd
				},
				{
					path: 'yonghu',
					component: yonghuList
				},
				{
					path: 'yonghuDetail',
					component: yonghuDetail
				},
				{
					path: 'yonghuAdd',
					component: yonghuAdd
				},
				{
					path: 'shipinfenlei',
					component: shipinfenleiList
				},
				{
					path: 'shipinfenleiDetail',
					component: shipinfenleiDetail
				},
				{
					path: 'shipinfenleiAdd',
					component: shipinfenleiAdd
				},
				{
					path: 'jianmeicao',
					component: jianmeicaoList
				},
				{
					path: 'jianmeicaoDetail',
					component: jianmeicaoDetail
				},
				{
					path: 'jianmeicaoAdd',
					component: jianmeicaoAdd
				},
				{
					path: 'pingfen',
					component: pingfenList
				},
				{
					path: 'pingfenDetail',
					component: pingfenDetail
				},
				{
					path: 'pingfenAdd',
					component: pingfenAdd
				},
				{
					path: 'systemintro',
					component: systemintroList
				},
				{
					path: 'systemintroDetail',
					component: systemintroDetail
				},
				{
					path: 'systemintroAdd',
					component: systemintroAdd
				},
			]
		},
		{
			path: '/login',
			component: Login
		},
		{
			path: '/register',
			component: Register
		},
	]
})
