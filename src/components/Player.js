import "../styles/player.css";
import Card from "./Card";

import firebase from "firebase/compat/app";
import { useCollectionData } from "react-firebase-hooks/firestore";

import play from "../images/icons/player/play.png";
import prev from "../images/icons/player/prev.png";
import next from "../images/icons/player/next.png";
import shuffle from "../images/icons/player/shuffle.png";
import repeat from "../images/icons/player/again.png";
import queue from "../images/icons/player/queue.png";
import microphone from "../images/icons/player/microphone.png";
import list from "../images/icons/player/list.png";
import device from "../images/icons/player/device.png";
import volume from "../images/icons/player/volume.png";
import window from "../images/icons/player/new-window.png";
import expand from "../images/icons/player/expand.png";

function Player() {
  const savedAlbRef = firebase.firestore().collection("saved_albums");
  const [saved_albums] = useCollectionData(savedAlbRef, { idField: "id" });
  //for player only one album
  const singleAlbum = saved_albums && saved_albums[2];

  return (
    <div className="player-container">
      <div className="player-content">
        <div className="current-album">
          {singleAlbum && (
            <Card
              image={singleAlbum.img}
              name={singleAlbum.name}
              info={singleAlbum.info}
              key={singleAlbum.id}
            />
          )}
        </div>

        <div className="player-wrapper">
          <div className="">
            <div className="top-player">
              <div className="settings-player">
                <img className="icon icon-s" src={shuffle} />
                <img className="icon icon-s" src={prev} />
                <img className="icon icon-b" src={play} />
                <img className="icon icon-s" src={next} />
                <img className="icon icon-s icon-bc" src={repeat} />
              </div>
            </div>
            <div className="bottom-player">
              <div className="timeline-player">
                <span className="time-start">0:44</span>
                <div className="timeline"></div>
                <span className="time-start">3:19</span>
              </div>
            </div>
          </div>
        </div>

        <div className="player-icons">
          <div className="settings-player-right">
            <img className="icon icon-s" src={queue} />
            <img className="icon icon-s" src={microphone} />
            <img className="icon icon-s" src={list} />
            <img className="icon icon-s" src={device} />
            <img className="icon icon-s" src={volume} />
            <div className="timeline"></div>
            <img className="icon icon-s" src={window} />
            <img className="icon icon-s" src={expand} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Player;
