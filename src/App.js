import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";

import RoutesIndex from "./routes/index"
import routes_page1 from "./routes/page1"
import routes_404 from "./routes/404"

import Header from "./components/header"
import Background from "./components/background"
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "p1/",
        element: routes_page1,
        errorElement: routes_404
      },
      {
        path: "/",
        element: <RoutesIndex></RoutesIndex>,
        errorElement: routes_404
      },
    ],
    errorElement: routes_404

  }
]);



function App() {
  return <RouterProvider router={router} />
}

function Root() {

  return <>
    <Header></Header>
    <Background></Background>
    <Outlet ></Outlet>
  </>
}





export default App;
