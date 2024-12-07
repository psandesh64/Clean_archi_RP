import React from "react";
import AuthRepository from "../../infrastructure/repositories/AuthRepository";

// Create a context with a default value or null
export const AuthRepositoryContext = React.createContext<AuthRepository>(new AuthRepository());

// Define the props for the provider component
type ProviderProps = {
  children: React.ReactNode;
};

export const AuthRepositoryProvider = ({ children }: ProviderProps) => {
  const authRepository = new AuthRepository();

  return <AuthRepositoryContext.Provider value={authRepository}>{children}</AuthRepositoryContext.Provider>;
};
