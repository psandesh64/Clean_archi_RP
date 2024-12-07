import React from "react";
import AccountRepository from "../../infrastructure/repositories/AccountRepository";

// Create a context with a default value or null
// export const AccountRepositoryContext = React.createContext<AccountRepository | undefined>(undefined);
export const AccountRepositoryContext = React.createContext<AccountRepository>(new AccountRepository());

// Define the props for the provider component
type ProviderProps = {
  children: React.ReactNode;
};

export const AccountRepositoryProvider = ({ children }: ProviderProps) => {
  const accountRepository = new AccountRepository();

  return <AccountRepositoryContext.Provider value={accountRepository}>{children}</AccountRepositoryContext.Provider>;
};
