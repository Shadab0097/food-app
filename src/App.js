import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestMenu from "./components/RestMenu";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
// import Grocery from "./components/Grocery";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";


const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
  const [showUser, setShowUser] = useState()
  useEffect(() => {

    const user = {
      name: "shadab"
    }
    setShowUser(user.name)
  }, [])
  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedIn: showUser , setShowUser}}>
        <div className="app">

          <Header />
          <Outlet />
          <Footer />

        </div>
      </UserContext.Provider>
      </Provider>
    
  )
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [

      {
        path: "/",
        element: <Body />
      },
      {
        path: "/about",
        element: <About />

      },
      {
        path: "/contact",
        element: <Contact />

      },
      {
        path: "/grocery",
        element: <Suspense fallback={<h1>Loading...</h1>}><Grocery /></Suspense>

      },
      {
        path: "/restmenu/:restid",
        element: <RestMenu />

      },
      
  {
    path:"/cart",
    element:<Cart/>
  }
    ],
    errorElement: <Error />

  }

])

let root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<  RouterProvider router={appRouter} />);

