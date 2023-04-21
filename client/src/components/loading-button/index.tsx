import { styled } from '@mui/material/styles/';
import LoadingButton from '@mui/lab/LoadingButton';

const AppLoadingButton = styled(LoadingButton)({
	borderRadius: '4px',
	backgroundColor: '#1900D5',
	boxShadow: '0px 1px 7px #332a76',
	padding: '10px 20px',
	maxWidth: '300px',
	'&:hover': {
		backgroundColor: '#4128FF',
	},
	color: '#fff',
});

export default AppLoadingButton;
