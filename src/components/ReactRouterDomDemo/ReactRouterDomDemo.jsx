import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Contact from "./AuthRouts/Contact";
import Users from "./AuthRouts/Users";
import Login from "./Login";
import { useAuth } from "../../hooks/useAuth";
import AuthWrapper from "./AuthWrapper";
import ContactDetail from "./AuthRouts/ContactDetail";

const authRoute = createBrowserRouter([
  {
    path: "/",
    element: <AuthWrapper />,
    children: [
      {
        path: "/",
        element: (
          <div>
            <h1>Home Page</h1>
            <p>Welcome to our website!</p>
          </div>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/contact/:id",
        element: <ContactDetail />,
      },
      {
        path: "/users",
        element: <Users />,
      },
    ],
  },
]);

const nonAuthRoute = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
]);

const ReactRouterDomDemo = () => {
  const { currentUser } = useAuth();
  return <RouterProvider router={currentUser ? authRoute : nonAuthRoute} />;
};

export default ReactRouterDomDemo;
