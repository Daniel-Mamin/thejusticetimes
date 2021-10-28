import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

import views from "../../../../assets/img/views.svg";

const PopularArticles = ({ articles }) => {
  const { date, tag, title, description, count, image, _id, user } =
    articles[0];

  return (
    <Link to={`/article/${_id}`}>
      <div className="main__views">
        <div className="main__views__img">
          <img src={image} alt="Image" />
        </div>
        <div className="main__views__content">
          <div>
            <span className="tag">{tag}</span>
          </div>
          <h2>{title}</h2>
          <p
            dangerouslySetInnerHTML={{
              __html: description.substr(0, 300) + "...",
            }}
          />
          <div className="main__views__user-content">
            {/*<img className="user-avatar" src={user.avatar} alt="user-avatar" />*/}
            {/*<span className="user-name">{`${user.f_name} ${user.l_name}`}</span>*/}
            <div className="user-info">
              <span>{moment(date).format("MMM DD")} · 5 min read</span>
            </div>
            <div className="user-views">
              <img src={views} alt="ViewsLogo" />
              <span>{count}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PopularArticles;
