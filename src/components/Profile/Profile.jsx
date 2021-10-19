import React from "react";

import getUser from "../../services/getUser";
import "./Profile.scss";

const Profile = () => {
  const { f_name, l_name, avatar, description } = getUser();

  return (
    <div className="profile">
      <div className="container">
        <div className="profile__wrapper">
          <form className="profile__form">
            <div className="profile__form-avatar">
              <div className="profile__form-avatar__block">
                <img
                  className="profile__form-avatar__img"
                  src={avatar}
                  alt="user-avatar"
                />
                {avatar.includes("userPhoto") ? (
                  <>
                    <input
                      className="profile__form-avatar__input"
                      type="file"
                      id="file"
                      name="avatar"
                    />
                    <label
                      className="profile__form-avatar__label"
                      htmlFor="file"
                    >
                      Change photo
                    </label>
                  </>
                ) : (
                  <>
                    <input
                      className="profile__form-avatar__input"
                      type="file"
                      id="file"
                      name="avatar"
                    />
                    <label
                      className="profile__form-avatar__label"
                      htmlFor="file"
                    >
                      Upload photo
                    </label>
                  </>
                )}
                <p
                  className={`profile__form-avatar__btn ${
                    avatar.includes("userPhoto") ? " " : " not_visible"
                  }`}
                >
                  Delete photo
                </p>
              </div>
            </div>
            <div className="profile__form-info">
              <div className="profile__form-info__block">
                <p>
                  <label className="profile__form-info__label" htmlFor="f_name">
                    First name
                  </label>
                  <input
                    className="profile__form-info__input"
                    type="text"
                    name="f_name"
                    id="f_name"
                    value={f_name}
                  />
                </p>
                <p>
                  <label className="profile__form-info__label" htmlFor="l_name">
                    Last name
                  </label>
                  <input
                    className="profile__form-info__input"
                    type="text"
                    name="l_name"
                    id="l_name"
                    value={l_name}
                  />
                </p>
              </div>
              <div className="profile__form-info__block">
                <p>
                  <label
                    className="profile__form-info__label"
                    htmlFor="description"
                  >
                    Description
                  </label>
                  <textarea
                    className="profile__form-info__textarea"
                    name="description"
                    id="description"
                    value={description}
                  />
                </p>
              </div>
              <div className="profile__form-info__block">
                <button className="profile__form-info__btn" type="submit">
                  Save Changes
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
