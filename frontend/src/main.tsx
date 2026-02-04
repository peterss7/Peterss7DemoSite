import { StrictMode } from 'react';
import App from './App'
import { HomeSection } from './features/home';
import { AboutSection } from './features/about';
import { ContactSection } from './features/contact';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { createRoot } from 'react-dom/client';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <HomeSection /> },
      { path: "about", element: <AboutSection /> },
      { path: "contact", element: <ContactSection /> },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
