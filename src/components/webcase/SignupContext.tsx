import { createContext, useCallback, useContext, useState, type ReactNode } from "react";

type SignupContextValue = {
  open: boolean;
  setOpen: (v: boolean) => void;
  openModal: () => void;
};

const SignupContext = createContext<SignupContextValue | null>(null);

export function SignupProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const openModal = useCallback(() => setOpen(true), []);
  return (
    <SignupContext.Provider value={{ open, setOpen, openModal }}>
      {children}
    </SignupContext.Provider>
  );
}

export function useSignup() {
  const ctx = useContext(SignupContext);
  if (!ctx) throw new Error("useSignup must be used within SignupProvider");
  return ctx;
}
