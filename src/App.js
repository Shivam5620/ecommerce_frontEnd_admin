import React, { useEffect } from "react";
import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from "./containers/Home";
import Signup from "./containers/Signup";
import Signin from "./containers/Signin";
import { PrivateRoute } from "./components/HOC/PrivateRoute";
import { getInitialData, isUserLoggedIn } from "./actions";
import { useDispatch, useSelector } from "react-redux";
import Products from "./containers/Products";
import Orders from "./containers/Orders";
import Category from "./containers/Category";
import NewPage from "./containers/NewPage";

function App() {

  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth)

  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn());
    }
    if (auth.authenticate) {
      dispatch(getInitialData());
    }


  }, [auth.authenticate,dispatch]);



  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/page" element={<PrivateRoute />}>
          <Route path="/page" element={<NewPage />} />
        </Route>
        <Route path="/products" element={<PrivateRoute />}>
          <Route path="/products" element={<Products />} />
        </Route>
        <Route path="/orders" element={<PrivateRoute />}>
          <Route path="/orders" element={<Orders />} />
        </Route>
        <Route path="/category" element={<PrivateRoute />}>
          <Route path="/category" element={<Category />} />
        </Route>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </div>
  );
}

export default App;
