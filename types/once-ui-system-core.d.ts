declare module "@once-ui-system/core" {
  import * as React from "react";

  export const Background: React.ComponentType<any>;
  export const Badge: React.ComponentType<any>;
  export const Button: React.ComponentType<any>;
  export const Carousel: React.ComponentType<any>;
  export const Card: React.ComponentType<any>;
  export const Flex: React.ComponentType<any>;
  export const Grid: React.ComponentType<any>;
  export const Heading: React.ComponentType<any>;
  export const Icon: React.ComponentType<any>;
  export const IconButton: React.ComponentType<any>;
  export const Line: React.ComponentType<any>;
  export const List: React.ComponentType<any>;
  export const ListItem: React.ComponentType<any>;
  export const Particle: React.ComponentType<any>;
  export const RevealFx: React.ComponentType<any>;
  export const Scroller: React.ComponentType<any>;
  export const Tag: React.ComponentType<any>;
  export const Text: React.ComponentType<any>;
  export const Timeline: React.ComponentType<any>;
  export const LayoutProvider: React.ComponentType<any>;
  export const ThemeProvider: React.ComponentType<any>;

  export function useTheme(): {
    resolvedTheme?: string;
    setTheme: (theme: string) => void;
  };
}
