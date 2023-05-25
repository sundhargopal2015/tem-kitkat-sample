import { RouterProvider } from "react-router-dom";
import { appRouter } from "./Router/appRouter";

function App() {
  return <RouterProvider router={appRouter}></RouterProvider>;
}
export default App;
