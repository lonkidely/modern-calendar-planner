import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";

import './styles/index.scss';
import { MainPage } from "@views/MainPage/MainPage";
import {MainLogin} from "@views/MainLogin/MainLogin";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/kek" element={<MainPage />} />
            <Route path="/" element={<MainLogin />} />
        </Routes>
    </BrowserRouter>
);
