import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import AppLayout from "../layouts/AppLayout";
import PageTransition from "../layouts/PageTransition";

export const myRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: (
          <PageTransition>
            <Home />
          </PageTransition>
        ),
      },
      {
        path: "about",
        element: (
          <PageTransition>
            <About />
          </PageTransition>
        ),
      },
      {
        path: "contact",
        element: (
          <PageTransition>
            <Contact />
          </PageTransition>
        ),
      },
    ],
  },
]);
