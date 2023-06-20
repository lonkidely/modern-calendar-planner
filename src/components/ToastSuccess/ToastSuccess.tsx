import React, {useEffect, useState} from 'react';
import {Toast, ToastContainer} from 'react-bootstrap';
import './ToastSuccess.scss';
import {useTypedSelector} from '@hooks/useTypedSelector';
import {useActions} from '@hooks/useActions';

export const ToastSuccess:React.FC = () => {
    const {success} = useTypedSelector(state => state.toasts);
    const {hideSuccess} = useActions();

    const [show, setShow] = useState(success);

    useEffect(() => {
        if (!success) {
            return;
        }
        setShow(true);
    }, [success]);

    const onCloseFunc = () => {
        setShow(false);
        hideSuccess();
    };

    return (
        <ToastContainer position="bottom-start" className="p-3">
            <Toast className='toast_success' bg='success' onClose={onCloseFunc} show={show} delay={2000} autohide>
                <Toast.Body>Успех!</Toast.Body>
            </Toast>
        </ToastContainer>
    );
};
