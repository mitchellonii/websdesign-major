import './App.css';
import icon_mono_1428p from './auralis-icon-1428p-mono.png'


import {
  createBrowserRouter,
  RouterProvider,
  Link,
  Outlet
} from "react-router-dom";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "p1/",
        element: <p>p1</p>,
      },
      {
        path: "/",
        element: <p>home</p>,
      },
    ],

  }
]);



function App() {
  return <RouterProvider router={router} />
}

function Root() {
  return <>
    <Header></Header>
    <Background></Background>
    <Outlet></Outlet>
  </>
}

const Header = () => {
  return <div className="headerContainer">
    <div className="headerFlex">
      <img alt={'auralis icon'} className="icon" src={icon_mono_1428p}></img>
      <Link className="Link" to={"/"}>Home</Link>
      <Link className="Link" to={"/p1"}>p1</Link>

    </div>
  </div>
}

function Background() {
  return <div className="background">

  </div>
}


export default App;
