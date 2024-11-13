import { createHashRouter } from "react-router-dom";
import About from "./components/About";
import Root from "./components/Root";
import App from "./App";
import SingleProject from "./components/SingleProject";
import { MoreProjects } from "./components/MoreProjects";

export const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "projects",
        element: <MoreProjects />,
      },
      {
        path: "projects/:id",
        element: <SingleProject />,
      },
    ],
  },
]);
