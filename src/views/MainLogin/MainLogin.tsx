import React, {useEffect} from 'react';
import './MainLogin.scss';
import { Header } from '@components/Header/Header';
import {Login} from '@components/Login/Login';
import {useTypedSelector} from '@hooks/useTypedSelector';
import {useActions} from '@hooks/useActions';
import {useNavigate} from 'react-router-dom';

export const MainLogin = () => {
    const {user} = useTypedSelector(state => state.user);
    const {authUser} = useActions();
    const navigate = useNavigate();

    useEffect(() => {
        authUser();
    }, []);

    useEffect(() => {
        if (!user) {
            return;
        }
        navigate('/');
    },[user]);

    return (
        <div className="main_page">
            <Header />
            <div className="main">
                <Login />
            </div>
        </div>
    );
};
