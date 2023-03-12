import React from "react";
import {Route,} from "react-router-dom"
import { LandingPage } from "../pages/Landing/landing-page";

export const routes = {
    root:'/',
    home:'/home',
};

export const Routes = () => {
    return (
        <>
    <Route path={routes.home}>
        <LandingPage/>
    </Route>
    </>
    );
};