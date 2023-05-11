import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Home from "./pages/Home";
import SuccessPage from "./pages/Success";

const Router = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/tem-kitkat-sample" element={<Home />}>
        <Route path="success" element={<SuccessPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default Router;
