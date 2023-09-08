import App from 'App';
import { CacheProvider } from 'context/CacheContext';
import Home from 'page/Home';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: (
          <CacheProvider>
            <Home></Home>
          </CacheProvider>
        ),
      },
    ],
  },
]);

export default router;
