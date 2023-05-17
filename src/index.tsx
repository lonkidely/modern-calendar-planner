import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";

import './styles/index.scss';
import { MainPage } from "@views/MainPage/MainPage";
import {MainLogin} from "@views/MainLogin/MainLogin";
import {MainSignup} from "@views/MainSignup/MainSignup";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/login" element={<MainLogin />} />
            <Route path="/signup" element={<MainSignup />} />
        </Routes>
    </BrowserRouter>
);
