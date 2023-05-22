import React, {useEffect, useState} from "react";
import {Toast, ToastContainer} from "react-bootstrap";
import './ToastWarning.scss';
import {useTypedSelector} from "@hooks/useTypedSelector";
import {useActions} from "@hooks/useActions";

export const ToastWarning:React.FC = () => {
    const {warning} = useTypedSelector(state => state.toasts);
    const {hideWarning} = useActions();

    const [show, setShow] = useState(warning);

    useEffect(() => {
        if (!warning) {
            return;
        }
        setShow(true);
    }, [warning]);

    const onCloseFunc = () => {
        setShow(false);
        hideWarning();
    };

    return (
        <ToastContainer position="bottom-start" className="p-3">
            <Toast className='toast_warning' bg='danger' onClose={onCloseFunc} show={show} delay={2000} autohide>
                <Toast.Body>Ошибка!</Toast.Body>
            </Toast>
        </ToastContainer>
    );
};
