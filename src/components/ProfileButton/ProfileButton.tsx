import {Link, useNavigate} from "react-router-dom";
import React from "react";
import './ProfileButton.scss';
import {useActions} from "@hooks/useActions";

type ProfileButtonProps = {
    address: string;
    text: string;
};

export const ProfileButton: React.FC<ProfileButtonProps> = (props) => {
    const {logoutUser} = useActions();
    const navigate = useNavigate();
    const logoutFunc = (event) => {
        event.preventDefault();
        if (props.address !== '/logout') {
            navigate('/Login');
            return;
        }
        logoutUser();
        navigate('/');
    };

    return (
        <Link className="profile__btn__text" to={props.address} onClick={logoutFunc}>
            <div className="profile__btn">{props.text}</div>
        </Link>
    );
};
