import * as React from 'react';
import './Card.css';


export const Card = (props) => {
    return (
        <>
            <div className="git-profile">
                <img className="git-profile__image" src={props.avatar_url} alt="placeholder: User"/>
                <div className="git-profile__bio">
                    <div className="git-profile__name">{props.name}</div>
                    <div className="git-profile__company">{props.company}</div>
                </div>
            </div>
        </>
    );
};
