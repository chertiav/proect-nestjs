import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
//=====================================================
import Home from './pages/home';
import PrivateRoute from './utils/router/privateRoute';
import AuthRootPage from './pages/auth';
import { ColorModeContext, useMode } from './theme';
import LayoutComponent from './components/layout';
import WatchListPage from './pages/watchlist';
import NewsPage from './pages/news';
import SettingsPage from './pages/settings';
import SingleAssetPage from './pages/singleAsset';

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
							<Route path="/watchlist" element={<WatchListPage />} />
							<Route path="/news" element={<NewsPage />} />
							<Route path="/settings" element={<SettingsPage />} />
							<Route path="/single/:id" element={<SingleAssetPage />} />
						</Route>
						<Route path="login" element={<AuthRootPage />} />
						<Route path="register" element={<AuthRootPage />} />
					</Route>
				</Routes>
			</ThemeProvider>
		</ColorModeContext.Provider>
	);
}

export default App;
