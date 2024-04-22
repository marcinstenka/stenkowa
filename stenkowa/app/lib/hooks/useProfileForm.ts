'use client';
import { ChangeEvent, SetStateAction, useState } from 'react';
import { UserType } from '../types/types';

type UseProfileFormProps = {
	user: UserType;
};
type UseProfileFormReturn = {
	handleuserNameChange: (e: ChangeEvent<HTMLInputElement>) => void;
	handleNewPasswordChange: (e: ChangeEvent<HTMLInputElement>) => void;
	handlePasswordChange: (e: ChangeEvent<HTMLInputElement>) => void;
	handleEmailChange: (e: ChangeEvent<HTMLInputElement>) => void;
	handlePrimaryColorChange: (e: ChangeEvent<HTMLInputElement>) => void;
	handleSecondaryColorChange: (e: ChangeEvent<HTMLInputElement>) => void;
	userName: string;
	newPassword: string;
	password: string;
	email: string;
	primaryColor: string;
	secondaryColor: string;
	setNewPassword: (value: SetStateAction<string>) => void;
	setPassword: (value: SetStateAction<string>) => void;
};
export default function useProfileForm({
	user,
}: UseProfileFormProps): UseProfileFormReturn {
	const [userName, setUserName] = useState<string>(user.user_name);
	const [password, setPassword] = useState<string>('');
	const [newPassword, setNewPassword] = useState<string>('');
	const [email, setEmail] = useState<string>(user.email);
	const [primaryColor, setPrimaryColor] = useState<string>(user.primary_color);
	const [secondaryColor, setsecondaryColor] = useState<string>(
		user.secondary_color
	);

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
		setNewPassword,
		setPassword,
	};
}
