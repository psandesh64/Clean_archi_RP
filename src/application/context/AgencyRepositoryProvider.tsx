import React from "react";
import AgencyRepository from "../../infrastructure/repositories/AgencyRepository";

// Create a context with a default value or null
export const AgencyRepositoryContext = React.createContext<AgencyRepository>(new AgencyRepository());

// Define the props for the provider component
type ProviderProps = {
  children: React.ReactNode;
};

export const AgencyRepositoryProvider = ({ children }: ProviderProps) => {
  const agencyRepository = new AgencyRepository();

  return <AgencyRepositoryContext.Provider value={agencyRepository}>{children}</AgencyRepositoryContext.Provider>;
};
