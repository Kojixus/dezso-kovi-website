"use client";

import { LayoutProvider, ThemeProvider } from "@once-ui-system/core";

type ProvidersProps = {
  children: React.ReactNode;
};

export default function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider>
      <LayoutProvider>
        {children}
      </LayoutProvider>
    </ThemeProvider>
  );
}
