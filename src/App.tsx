import { ThemeProvider } from './components/DarkMode/theme-provider';
import { TransactionsProvider } from './contexts/TransactionsContext';

import { Home } from './pages/Home';

export function App() {
  return (
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <TransactionsProvider>
        <Home />
      </TransactionsProvider>
    </ThemeProvider>
  );
}
