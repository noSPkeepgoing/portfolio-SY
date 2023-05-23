import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './pages/Root';
import Error from './pages/Error';
import About from './pages/About';
import Concerts from './pages/Concerts';
import Listen from './pages/Listen';
import Contact from './pages/Contact';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      errorElement: <Error />,
      children: [
        { index: true, element: <About /> },
        { path: '/about', element: <About /> },
        { path: '/concerts', element: <Concerts /> },
        { path: '/listen', element: <Listen /> },
        { path: '/contact', element: <Contact /> },
      ],
    },
  ]);
  return <RouterProvider router={router}>sunyoul's portfoilo</RouterProvider>;
}

export default App;
