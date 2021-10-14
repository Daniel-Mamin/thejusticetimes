import React from "react";

import getSortedArray from "../../services/getSortedArray";
import views from "../../assets/img/views.svg";

const PopularArticles = () => {
    const {date, author, avatar, tag, title, description, count, image} = getSortedArray()[0];

    return (
        <div className="main__views">
            <div className="main__views__img">
                <img src={image} alt="Image"/>
            </div>
            <div className="main__views__content">
                <span className="tag">{tag}</span>
                <h2>{title}</h2>
                <p>{description.substr(0, 380)}</p>
                <div className="main__views__user-content">
                    <img className="user-avatar" src={avatar} alt="user-avatar"/>
                    <span className="user-name">{author}</span>
                    <div className="user-info">
                        <span>{date} · 5 min read</span>
                    </div>
                    <div className="user-views">
                        <img src={views} alt="ViewsLogo"/>
                        <span>{count}</span>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default PopularArticles;