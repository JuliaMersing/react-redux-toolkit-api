import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { newUser } from '../../redux/registerSlice';
import { verifyEmail, verifyPassword } from '../../utils/validations';
import { Button } from '../Button/Button';
import { Header } from '../Header/Header';
import { Input } from '../Input/Input';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { existingUser } from '../../redux/signUpSlice';

export interface FormProps {
	isSignUp?: boolean;
}

export const Form: FC<FormProps> = ({ isSignUp = false }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [emailError, setEmailError] = useState('');
	const [passwordError, setPasswordError] = useState('');
	const validLogin = passwordError === '' && emailError === '';

	const dispatch = useDispatch();

	const handleEmail = (event: any): void => {
		setEmail(event.target.value);
	};

	const handlePassword = (event: any): void => {
		setPassword(event.target.value);
	};

	const handleEmailOnBlur = (event: any): void => {
		const error = verifyEmail(event.target.value);
		setEmailError(error);
	};

	const handlePasswordOnBlur = (event: any): void => {
		const error = verifyPassword(event.target.value);
		setPasswordError(error);
	};

	const onFormSubmit = (event: any): void => {
		event.preventDefault();

		const emailError = verifyEmail(email);
		const passwordError = verifyPassword(password);
		setEmailError(emailError);
		setPasswordError(passwordError);

		if (!validLogin) {
			toast.error('Please fill in all the required fields.', {
				position: toast.POSITION.TOP_CENTER,
			});
			return;
		}

		if (isSignUp && emailError !== '') {
			toast.error('Invalid email provided.', {
				position: toast.POSITION.TOP_CENTER,
			});
			return;
		}

		if (isSignUp && passwordError !== '') {
			toast.error('Invalid password provided.', {
				position: toast.POSITION.TOP_CENTER,
			});
			return;
		}

		if (isSignUp) {
			dispatch(
				newUser({
					email,
					password,
				})
			);
		} else {
			dispatch(existingUser({ email }));
		}
	};

	return (
		<div className="container-form">
			<div className="container-header">
				<ToastContainer />
				{isSignUp ? (
					<Header
						heading="Let's get started!"
						paragraph="Already have an account?"
						href="/"
						linkParagraph="Login"
					/>
				) : (
					<Header
						heading="Welcome back!"
						paragraph="Don't have an account?"
						href="/signUp"
						linkParagraph="SignUp"
					/>
				)}

				<form
					className="mt-8 space-y-6"
					action="#"
					method="POST"
					onSubmit={onFormSubmit}
				>
					<input type="hidden" name="remember" value="true" />
					<div className="rounded-md shadow-sm -space-y-px">
						<Input
							id="email"
							type="email"
							value={email}
							placeholder="Email"
							onChange={handleEmail}
							onBlur={handleEmailOnBlur}
							error={emailError}
							className={emailError !== '' ? 'input-error' : 'input'}
						/>
						{isSignUp && (
							<Input
								id="password"
								type="password"
								value={password}
								placeholder="Confirm password"
								onChange={handlePassword}
								onBlur={handlePasswordOnBlur}
								error={passwordError}
								className={passwordError !== '' ? 'input-error' : 'input'}
							/>
						)}
					</div>

					{isSignUp ? <Button> Sign in </Button> : <Button> Login </Button>}
				</form>
			</div>
		</div>
	);
};
