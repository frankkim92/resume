import './index.css';
import '@/lib/dark-mode';
import { HelmetProvider } from 'react-helmet-async';
import '@/lib/locales';
import { createRoot } from 'react-dom/client';
import 'nprogress/nprogress.css';
import '@/style/nprogress.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from '@/pages/_app';
// import Home from '@/pages/Home';

const router = createBrowserRouter([
  {
    path: '/resume',
    element: <App />,
    // children: [
    //   {
    //     path: '',
    //     element: <Home />,
    //   },
    // ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <HelmetProvider>
    <RouterProvider router={router} />
  </HelmetProvider>,

);
