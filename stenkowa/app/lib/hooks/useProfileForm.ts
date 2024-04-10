'use client';
import { ChangeEvent, useState } from 'react';
import { UserType } from '../types/types';

type UseProfileFormProps = {
	user: UserType;
};
export default function useProfileForm({ user }: UseProfileFormProps) {
	const [userName, setUserName] = useState(user.user_name);
	const [password, setPassword] = useState('');
	const [newPassword, setNewPassword] = useState('');
	const [email, setEmail] = useState(user.email);
	const [primaryColor, setPrimaryColor] = useState(user.primary_color);
	const [secondaryColor, setsecondaryColor] = useState(user.secondary_color);

	const handleuserNameChange = (e: ChangeEvent<HTMLInputElement>) => {
		setUserName(e.target.value);
	};
	const handleNewPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
		setNewPassword(e.target.value);
	};
	const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
		setPassword(e.target.value);
	};
	const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
		setEmail(e.target.value);
	};
	const handlePrimaryColorChange = (e: ChangeEvent<HTMLInputElement>) => {
		setPrimaryColor(e.target.value);
	};
	const handleSecondaryColorChange = (e: ChangeEvent<HTMLInputElement>) => {
		setsecondaryColor(e.target.value);
	};

	return {
		handleuserNameChange,
		handleNewPasswordChange,
		handlePasswordChange,
		handleEmailChange,
		handlePrimaryColorChange,
		handleSecondaryColorChange,
		userName,
		newPassword,
		password,
		email,
		primaryColor,
		secondaryColor,
	};
}
