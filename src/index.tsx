import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";

import './styles/index.scss';
import { MainPage } from "@views/MainPage/MainPage";
import {MainLogin} from "@views/MainLogin/MainLogin";
import {MainSignup} from "@views/MainSignup/MainSignup";
import {Provider} from "react-redux";
import {store} from "./store";
import {MyTargetsPage} from "@views/MyTargetsPage/MyTargetsPage";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/login" element={<MainLogin />} />
                <Route path="/signup" element={<MainSignup />} />
                <Route path="/goals" element={<MyTargetsPage />} />
            </Routes>
        </BrowserRouter>
    </Provider>
);
