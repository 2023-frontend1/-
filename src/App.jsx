import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import theme from './styles/themes/theme'

import router from './router/Router'

function App() {
	return (
		<ThemeProvider theme={theme}>
			<RouterProvider router={router} />
		</ThemeProvider>
	)
}
export default App
