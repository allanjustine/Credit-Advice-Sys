"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import Cookies from "js-cookie";
import { Credentials } from "../lib/Credentials";
import { ContextType } from "../types/ContextType";
import { UserDataType } from "../types/UserDataType";
import { usePathname } from "next/navigation";

const AuthContext = createContext<ContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [user, setUser] = useState(null);
  const [isLogout, setIsLogout] = useState<boolean>(false);
  const userCredentials = Credentials;
  const pathName = usePathname();

  useEffect(() => {
    const fetchUser = () => {
      try {
        const user = Cookies.get("user");

        const parsedUser = user ? JSON.parse(user) : null;

        const isAuth =
          parsedUser?.username === userCredentials?.username &&
          parsedUser?.token === userCredentials?.token;

        if (isAuth) {
          setIsAuthenticated(true);
          setUser(parsedUser);
        } else {
          setIsAuthenticated(false);
          setUser(null);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();

    if (pathName !== "/print") {
      localStorage.removeItem("printing");
      localStorage.removeItem("printToken");
    }
  }, [pathName]);

  const login = (user: UserDataType) => {
    setIsAuthenticated(true);
    const { password, ...rest } = user;
    Cookies.set("user", JSON.stringify(rest));
    setIsLogout(false);
  };

  const logout = () => {
    setIsAuthenticated(false);
    setIsLogout(true);
    Cookies.remove("user");
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        userCredentials,
        login,
        user,
        loading,
        logout,
        isLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
