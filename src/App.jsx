import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import LayoutOne from "./Layouts/LayoutOne";
import HomePage from "./Pages/HomePage";

function App() {
  const route = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<LayoutOne />}>
          <Route path="" element={<HomePage />} />
        </Route>
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={route} />
    </>
  );
}

export default App;
