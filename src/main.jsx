import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Bio from './pages/Bio';
import Skills from './pages/Skills'

const router = createBrowserRouter(
  [
    { path: "/", element: <Home /> },
    { path: "/bio", element: <Bio /> },
    { path: "/skills", element: <Skills /> }
  ],
  {
    basename: "/AmanProtofolio/"
  }
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);