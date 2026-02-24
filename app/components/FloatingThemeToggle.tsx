"use client";

import { Flex, IconButton, useTheme } from "@once-ui-system/core";
import { useEffect, useMemo, useState } from "react";

export default function FloatingThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = resolvedTheme === "dark";
  const nextTheme = isDark ? "light" : "dark";

  const { icon, label } = useMemo(() => {
    return isDark
      ? { icon: "light", label: "Switch to light theme" }
      : { icon: "dark", label: "Switch to dark theme" };
  }, [isDark]);

  if (!mounted) {
    return null;
  }

  return (
    <Flex
      position="fixed"
      right="24"
      bottom="24"
      zIndex={10}
      padding="4"
      radius="full"
      background="surface"
      border="neutral-alpha-weak"
      shadow="m"
      style={{ backdropFilter: "blur(12px)" }}
    >
      <IconButton
        icon={icon}
        variant="secondary"
        tooltip={label}
        onClick={() => setTheme(nextTheme)}
        aria-label={label}
      />
    </Flex>
  );
}
