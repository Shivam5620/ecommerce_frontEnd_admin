import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoute = () => {
    const token = window.localStorage.getItem('token');
    return (

        token ? <Outlet /> : <Navigate to='/signin' />
    );
};






















// import React from "react"
// import { Route, Navigate } from "react-router-dom"

// export const PrivateRoute = ({ component: Component, ...rest }) => {
//     return <Route {...rest} component={(props) => {
//         const token = window.localStorage.getItem('token');
//         if (token) {
//             return <Component  {...props} />
//         } else {
//             return <Navigate to={'/signin'} />
//         }
//     }} />
// }