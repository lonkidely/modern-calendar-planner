import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";

import './index.css';
import {MainPage} from "./views/MainPage/mainPage";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={ <MainPage /> }/>
    )
);

root.render(
    <RouterProvider router={router}/>
);
