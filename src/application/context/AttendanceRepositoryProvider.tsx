import React from "react";
import AttendanceRepository from "../../infrastructure/repositories/AttendanceRepository";

// Create a context with a default value or null
export const AttendanceRepositoryContext = React.createContext<AttendanceRepository | undefined>(undefined);

// Define the props for the provider component
type ProviderProps = {
  children: React.ReactNode;
};

export const AttendanceRepositoryProvider = ({ children }: ProviderProps) => {
  const attendanceRepository = new AttendanceRepository();

  return <AttendanceRepositoryContext.Provider value={attendanceRepository}>{children}</AttendanceRepositoryContext.Provider>;
};
