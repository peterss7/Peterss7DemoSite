import { StrictMode } from 'react';
import App from './App'
import { HomeSection } from './features/home';
import { AboutSection } from './features/about';
import { ContactSection } from './features/contact';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./layout/styles/terminalNavbarStyles.css";
import "./layout/styles/footerStyles.css";
import "./layout/styles/terminalLayoutStyles.css";
import "./shared/styles/global.css";
import "./shared/styles/tStyles.css";
import "./shared/styles/terminalSharedStyles.css";
import "./features/home/styles/homeStyles.css";

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
