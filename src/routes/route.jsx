import { createBrowserRouter } from 'react-router-dom'
import Layout from '@/layouts/layout'
import MainPage from '@/pages/main/Main'
import MarketPage from '@/pages/market/Market'
import UserPage from '@/pages/user/User'
import ProductPage from '@/pages/product/Product'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: '',
				element: <MainPage />,
			},
			{
				path: '/market',
				element: <MarketPage />,
			},
			{
				path: '/product/:productId',
				element: <ProductPage />,
			},
			{
				path: '/user/:userId',
				element: <UserPage />,
			},
		],
	},
])

export default router
