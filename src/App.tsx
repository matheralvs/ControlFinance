import { ThemeProvider } from "./components/DarkMode/theme-provider";

import { Home } from "./pages/Home";

export function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Home />
    </ThemeProvider>
  );
}
