import React, { useState } from 'react';
import {
	Button,
	Checkbox,
	FormControlLabel,
	FormGroup,
	Grid,
	Typography,
} from '@mui/material';
import { useStyles } from './styles';
import { useAppDispatch } from '../../utils/hook';
import { useNavigate } from 'react-router-dom';
import { deleteUser } from '../../store/thunks/auth';

const DeleteUserComponent = () => {
	const [checked, setChecked] = useState(false);
	const { classes } = useStyles();
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const handleDelete = () => {
		dispatch(deleteUser());
		sessionStorage.removeItem('token');
		sessionStorage.removeItem('name');
		navigate('/login');
	};

	return (
		<Grid container className={classes.root}>
			<Grid item className={classes.tabHetting}>
				<Typography variant={'h2'}>Удаление аккаунта</Typography>
			</Grid>
			<Grid item className={classes.allertMassage}>
				<Typography variant={'body1'}>
					Уважаемый пользователь удаляя свой аккаунт, Вы удаляете всю
					персональную информацию. После удаления, вся сохраненная Вами
					информация будет не доступна.
				</Typography>
			</Grid>
			<Grid item className={classes.checkBoxBlock}>
				<FormGroup>
					<FormControlLabel
						checked={checked}
						onChange={() => setChecked(!checked)}
						className={classes.checkBoxBlockLabel}
						control={<Checkbox className={classes.checkBox} />}
						label="Я соглашаюсь"
					/>
				</FormGroup>
			</Grid>
			<Grid item className={classes.buttonBlock}>
				<Button
					onClick={handleDelete}
					color={'success'}
					variant={'outlined'}
					disabled={!checked}
				>
					Удалить аккаунт
				</Button>
			</Grid>
		</Grid>
	);
};

export default DeleteUserComponent;
