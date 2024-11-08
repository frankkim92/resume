import './index.css';
import '@/lib/dark-mode';
import { HelmetProvider } from 'react-helmet-async';
import '@/lib/locales';
import { createRoot } from 'react-dom/client';
import 'nprogress/nprogress.css';
import '@/style/nprogress.css';
import Index from '@/pages';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from '@/pages/_app';

const router = createBrowserRouter([
  {
    path: '/resume',
    element: <App />,
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
