import './index.css';
import '@/lib/dark-mode';
import { HelmetProvider } from 'react-helmet-async';
import '@/lib/locales';
import { createRoot } from 'react-dom/client';
import { Routes } from '@generouted/react-router';
import 'nprogress/nprogress.css';
import '@/style/nprogress.css';
import Index from '@/pages/index';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/resume',
    element: <Index />,
    children: [
      {
        path: '',
        element: <Index />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <HelmetProvider>
    <RouterProvider router={router} />
  </HelmetProvider>,

);
