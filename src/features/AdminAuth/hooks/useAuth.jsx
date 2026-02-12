import { useState, useEffect, createContext, useContext } from 'react';
import Cookies from 'js-cookie';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const token = Cookies.get('authToken');
        if (token) {
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }
    }, []);

    const login = (userData) => {
        setIsLoggedIn(true);
        setUser(userData);
    };

    const logout = () => {
        Cookies.remove('authToken');
        setIsLoggedIn(false);
        setUser(null);
    };

    const value = {
        isLoggedIn,
        user,
        login,
        logout
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);