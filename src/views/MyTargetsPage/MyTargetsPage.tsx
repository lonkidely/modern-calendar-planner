import { Header } from '@components/Header/Header';
import { GoalsTable } from '@components/GoalsTable/GoalsTable';
import { useActions } from '@hooks/useActions';
import { useTypedSelector } from '@hooks/useTypedSelector';
import React, { useEffect } from 'react';
import './MyTargetsPage.scss';

export const MyTargetsPage = () => {
    const { user } = useTypedSelector((state) => state.user);
    const { authUser } = useActions();

    useEffect(() => {
        authUser();
    }, []);

    return (
        <div className="target_page">
            <Header />
            {user && (
                <div className="main__container">
                    <div className="page_content">
                        <GoalsTable />
                    </div>
                </div>
            )}
        </div>
    );
};
