import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";

const HomePage = lazy(() => import("./pages/home"));
const RootLayout = lazy(() => import("./components/layout"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
]);

function App() {
  return (
    <Suspense fallback={"loading ..."}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
