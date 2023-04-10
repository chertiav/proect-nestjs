import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AutoGraphOutlinedIcon from '@mui/icons-material/AutoGraphOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

export const navMenu = [
	{
		name: 'Главная',
		icon: <HomeOutlinedIcon />,
		path: '/',
		id: 1,
	},
	{
		name: 'Избранное',
		icon: <AutoGraphOutlinedIcon />,
		path: '/watchList',
		id: 2,
	},
	{
		name: 'Новости',
		icon: <MenuBookOutlinedIcon />,
		path: '/news',
		id: 3,
	},
	{
		name: 'Настройки',
		icon: <SettingsOutlinedIcon />,
		path: '/settings',
		id: 4,
	},
];
