"use client";

import { LayoutProvider, ThemeProvider } from "@once-ui-system/core";
import FloatingThemeToggle from "./components/FloatingThemeToggle";

type ProvidersProps = {
  children: React.ReactNode;
};

export default function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider>
      <LayoutProvider>
        {children}
        <FloatingThemeToggle />
      </LayoutProvider>
    </ThemeProvider>
  );
}
