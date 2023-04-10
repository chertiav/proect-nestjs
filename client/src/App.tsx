import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
//=====================================================
import Home from './pages/home';
import PrivateRoute from './utils/router/privateRoute';
import AuthRootComponent from './pages/auth';
import { ColorModeContext, useMode } from './theme';
import LayoutComponent from './components/layout';
import WatchListComponent from './pages/watchlist';
import NewsComponent from './pages/news';
import SettingsComponent from './pages/settings';

function App() {
	const [theme, colorMode] = useMode();
	return (
		<ColorModeContext.Provider value={colorMode}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Routes>
					<Route element={<LayoutComponent />}>
						<Route element={<PrivateRoute />}>
							<Route path="/" element={<Home />} />
							<Route path="/watchlist" element={<WatchListComponent />} />
							<Route path="/news" element={<NewsComponent />} />
							<Route path="/settings" element={<SettingsComponent />} />
						</Route>
						<Route path="login" element={<AuthRootComponent />} />
						<Route path="register" element={<AuthRootComponent />} />
					</Route>
				</Routes>
			</ThemeProvider>
		</ColorModeContext.Provider>
	);
}

export default App;
