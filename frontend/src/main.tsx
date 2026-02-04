import { StrictMode } from 'react';
import App from './App'
import { HomeSection } from './features/home';
import { AboutSection } from './features/about';
import { ContactSection } from './features/contact';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

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
