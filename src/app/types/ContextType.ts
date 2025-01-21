import { UserDataType } from "./UserDataType";

export type ContextType = {
  user: any;
  login: (user: UserDataType) => void;
  logout: () => void;
  isAuthenticated: boolean;
  loading: boolean;
  userCredentials: any;
  isLogout: boolean;
};
