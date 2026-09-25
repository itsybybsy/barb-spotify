import "../styles/nav.css";

import NavAlbums from "./Navigation-albums.js";

import prev from "../images/icons/previous-arrow.png";
import next from "../images/icons/next-arrow.png";
import install from "../images/icons/install.png";
import news from "../images/icons/whats-new.png";

function Nav({ openDisplay }) {
  var avatarURL = "https://i.pravatar.cc/" + Math.round(Math.random() * 500);

  return (
    <>
      <div className="wrapper-nav">
        <div className="nav block-section">
          <div className="nav-left-controls">
            <a href="#">
              <img src={prev} className="icon icon-s icon-r" />
            </a>
            <a href="#">
              <img src={next} className="icon icon-s icon-r" />
            </a>
          </div>

          <div className="nav-right-controls">
            <button className="nav-button">
              <a href="#">
                <img src={install} className="icon icon-s" />
                Install App
              </a>
            </button>
            <a href="#">
              <img src={news} className="icon icon-s icon-r" />
            </a>

            <div className="profile-btn" onClick={openDisplay}>
              <div className="icon-profile">
                <img
                  className="profile-img icon icon-m icon-r"
                  src={avatarURL}
                  alt="avatar"
                />
              </div>
            </div>
          </div>

          <NavAlbums />
        </div>
      </div>
    </>
  );
}

export default Nav;
