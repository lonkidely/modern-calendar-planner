import React, {useEffect} from 'react';
import './MainSignup.scss';
import { Header } from '@components/Header/Header';
import {Signup} from '@components/Signup/Signup';
import {useTypedSelector} from '@hooks/useTypedSelector';
import {useActions} from '@hooks/useActions';
import {useNavigate} from 'react-router-dom';

export const MainSignup = () => {
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
                <Signup />
            </div>
        </div>
    );
};
