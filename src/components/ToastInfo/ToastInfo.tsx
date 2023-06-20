import React, {useEffect, useState} from 'react';
import {Toast, ToastContainer} from 'react-bootstrap';
import './ToastInfo.scss';
import {useTypedSelector} from '@hooks/useTypedSelector';
import {useActions} from '@hooks/useActions';

export const ToastInfo:React.FC = () => {
    const {info} = useTypedSelector(state => state.toasts);
    const {hideInfo} = useActions();

    const [show, setShow] = useState(info);

    useEffect(() => {
        if (!info) {
            return;
        }
        setShow(true);
    }, [info]);

    const onCloseFunc = () => {
        setShow(false);
        hideInfo();
    };

    return (
        <ToastContainer position="bottom-start" className="p-3">
            <Toast className='toast_info' bg='info' onClose={onCloseFunc} show={show} delay={2000} autohide>
                <Toast.Body>Информация</Toast.Body>
            </Toast>
        </ToastContainer>
    );
};
