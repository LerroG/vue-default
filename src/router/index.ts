import { createRouter, createWebHistory } from 'vue-router'
import { loadLayoutMiddleware } from '@/router/middleware/loadLayout.middleware'
import { RouteNamesEnum } from '@/router/router.types'
import { AppLayoutsEnum } from '@/layouts/layouts.types'

const routes = [
	{
		path: '/auth',
		name: RouteNamesEnum.auth,
		component: () => import('@/pages/auth.vue'),
		meta: {
			layout: AppLayoutsEnum.auth
		}
	},
	{
		path: '/questionnaires/:service',
		name: RouteNamesEnum.questionnaires,
		component: () => import('@/pages/questionnaires/service.vue')
	},
	{
		path: '/:catchAll(.*)', // Ловит все несуществующие маршруты
		component: () => import('@/pages/notFound.vue')
	}
]

const router = createRouter({
	history: createWebHistory(),
	routes
})

router.beforeEach(loadLayoutMiddleware)

export default router
