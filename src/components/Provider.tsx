import React, { ReactNode } from "react";

import { SessionProvider, SessionProviderProps } from "next-auth/react";

type ProviderProps = {
  children: ReactNode;
  session: SessionProviderProps["session"];
};

export const Provider = ({ children, session }: ProviderProps) => {
  return <SessionProvider session={session}>{children}</SessionProvider>;
};
