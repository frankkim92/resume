import './index.css';
import '@/lib/dark-mode';
import { HelmetProvider } from 'react-helmet-async';
import '@/lib/locales';
import { createRoot } from 'react-dom/client';
import { Routes } from '@generouted/react-router';
import 'nprogress/nprogress.css';
import '@/style/nprogress.css';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter basename="/resume">
    <HelmetProvider>
      <Routes />
    </HelmetProvider>,
  </BrowserRouter>,

);
