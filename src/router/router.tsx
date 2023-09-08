import App from 'App';
import { CacheProvider } from 'context/CacheContext';
import { InputKeywordProvider } from 'context/useInputKeywordContext';
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
          <InputKeywordProvider>
            <CacheProvider>
              <Home></Home>
            </CacheProvider>
          </InputKeywordProvider>
        ),
      },
    ],
  },
]);

export default router;
