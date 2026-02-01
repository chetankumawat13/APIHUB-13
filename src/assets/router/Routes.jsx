import { createBrowserRouter } from "react-router-dom";
import React from 'react'
import App from "../../App";
import Navbar from "../../components/Navbar";
import Docs from "../../pages/Docs";
import AddNewApi from "../../pages/AddNewApi";
import About from "../../pages/About";
import Services from "../../pages/Services";
import Contact from "../../pages/Contact";

export const router = createBrowserRouter([
    {path: '/', element: <App /> , errorElement: <div>Error occurred!</div>},
    { path: "/about", element: 
        <>
            <Navbar />
            <About />
        </>
     },
     { path: "/services", element: <>
        <Navbar />
        <Services />
     </> },
    { path: "/contact", element: <>
        <Navbar />
        <Contact />
        </> },
    {path: "/:id", element: <Docs/>},
    {path: "/AddNewApi", element: <AddNewApi />}

]);
