import { Layout } from '@/components'
import { MainPage, MarketPage, ProductPage, UserPage } from '@/pages'
import { createBrowserRouter } from 'react-router-dom'

const Router = createBrowserRouter([
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

export default Router
