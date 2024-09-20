import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from '@mui/material/styles';

import theme from './theme'; // Import your theme
import AppRouter from './Router.tsx';
import store from './reducer/store'; // .ts extension is optional

import './index.css';

// Ensure that the root element is non-null
const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Root element not found");
}

// Create the root and render the app
createRoot(rootElement).render(
  <BrowserRouter>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <AppRouter />
        <Toaster />
      </ThemeProvider>
    </Provider>
  </BrowserRouter>
);
