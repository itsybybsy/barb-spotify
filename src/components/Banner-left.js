import "../styles/banner.css";

import Card from "./Card";

import firebase from "../firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";

import logo from "../images/icons/home.png";
import search from "../images/icons/search.png";
import library from "../images/icons/library.png";
import create from "../images/icons/plus.png";
import more from "../images/icons/more-arrow.png";
import list from "../images/icons/list.png";

function Banner() {
  const savedAlbRef = firebase.firestore().collection("saved_albums");
  const [saved_albums] = useCollectionData(savedAlbRef, { idField: "id" });

  return (
    <>
      <div className="wrapper-banner">
        <div className="nav-banner block-section">
          <div className="list-icon mb-m">
            <a href="/home">
              <img src={logo} className="icon" />
              Home
            </a>
          </div>
          <div className="list-icon mb-m">
            <a href="#">
              <img src={search} className="icon" />
              Search
            </a>
          </div>
        </div>

        <div className="sub-list-banner block-section">
          <div className="list-icon mb-m">
            <div className="flex-row">
              <a href="#">
                <img src={library} className="icon icon-b icon-lc" /> Your
                Library
              </a>
            </div>
            <div className="flex-row">
              <a href="#">
                <img src={create} className="icon icon-s" />
              </a>
              <a href="#">
                <img src={more} className="icon" />
              </a>
            </div>
          </div>
          <div className="flex-row buttons-group">
            <button className="banner-button">Playlist</button>
            <button className="banner-button">Albums</button>
          </div>
          <div className="flex-row links-group">
            <a href="#">
              <img src={search} className="icon icon-s" />
            </a>
            <a href="#">
              Recent
              <img src={list} className="icon icon-s icon-bc ml-s mr-0" />
            </a>
          </div>

          <div className="album-banner-wrapper">
            <div className="album-banner-list">
              {saved_albums &&
                saved_albums.map((saved_albums) => (
                  <Card
                    image={saved_albums.img}
                    name={saved_albums.name}
                    info={saved_albums.info}
                    key={saved_albums.id}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
