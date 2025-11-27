"use client"
import { createContext, useContext, useState } from "react";
export type UserDataType = {
  PurposeOfUse: String;
  website: String;
  description: String;
  keywords: String[];
  competitors: String[];
  activePlan: String;
  isDemoProvided: Boolean;
  currentCredits: number;
};

type UserContextType = {
  userData: UserDataType | null;
  setUserData: (data: UserDataType | null) => void;
};

const UserContext = createContext<UserContextType | null>(null);

export const UserProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [userData, setUserData] = useState<UserDataType|null>(null);
  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};

export const clientContext = () => useContext(UserContext);
