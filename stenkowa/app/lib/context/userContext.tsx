'use client';
import { createContext, useState } from 'react';
import { UserType } from '../types/types';

type UserContextProviderProps = {
	children: React.ReactNode;
};

type UserContextType = {
	user: UserType | null;
	setUser: React.Dispatch<React.SetStateAction<UserType | null>>;
};

export const UserContext = createContext<UserContextType | null>(null);

export default function UserContextProvider({
	children,
}: UserContextProviderProps) {
	const [user, setUser] = useState<UserType | null>(null);

	return (
		<UserContext.Provider value={{ user, setUser }}>
			{children}
		</UserContext.Provider>
	);
}
