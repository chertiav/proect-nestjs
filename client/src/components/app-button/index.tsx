import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';

const AppButton = styled(Button)({
	borderRadius: '4px',
	backgroundColor: '#1900D5',
	boxShadow: '0px 1px 7px #332a76',
	padding: '10px 20px',
	maxWidth: '300px',
	'&:hover': {
		backgroundColor: '#4128FF',
	},
});

export default AppButton;
