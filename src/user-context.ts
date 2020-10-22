import { createContext } from 'react';

export type UserSession = {
    user: string | null,
    login: (name: string) => any,
    logout: () => any
}

export const UserContext= createContext<UserSession>({user: null, login: (s: string) => {}, logout: () => {}})