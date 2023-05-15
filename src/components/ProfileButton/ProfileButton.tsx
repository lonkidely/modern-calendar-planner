import {Link} from "react-router-dom";
import React from "react";
import './ProfileButton.scss';

type ProfileButtonProps = {
    address: string;
    text: string;
};

export const ProfileButton: React.FC<ProfileButtonProps> = (props) => {
    return (
        <Link className="profile__btn__text" to={props.address}>
            <div className="profile__btn">{props.text}</div>
        </Link>
    );
};
