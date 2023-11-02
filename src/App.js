import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";

import RoutesIndex from "./routes/index"
import routes_plans from "./routes/plans"
import routes_404 from "./routes/404"
import routes_about from "./routes/about"
import routes_download from "./routes/download"
import routes_login from "./routes/signin"

import Header from "./components/header"
import Footer from "./components/footer"
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "plans/",
        element: routes_plans,
        errorElement: routes_404
      },
      {
        path: "download/",
        element: routes_download,
        errorElement: routes_404
      },
      {
        path: "about/",
        element: routes_about,
        errorElement: routes_404
      },
      {
        path: "login/",
        element: routes_login,
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
    <Outlet ></Outlet>
    <Footer></Footer>
  </>
}





export default App;
