import Card from "./Card";
import Footer from "./Footer.js";
import "../styles/content.css";

import firebase from "../firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";

function Cards() {
  const moodAlbums = firebase
    .firestore()
    .collection("all_mood_albums")
    .limit(5);
  const [all_mood_albums] = useCollectionData(moodAlbums, { idField: "id" });

  const popAlbums = firebase.firestore().collection("all_pop_albums").limit(5);
  const [all_pop_albums] = useCollectionData(popAlbums, { idField: "id" });

  const retroAlbums = firebase
    .firestore()
    .collection("all_retro_albums")
    .limit(5);
  const [all_retro_albums] = useCollectionData(retroAlbums, { idField: "id" });

  return (
    <div className="container">
      <div className="content-wrapper">
        <div className="content-header">
          <h2 className="ml-s">MOOD albums</h2>
          <a href="/mood-albums" target="_blank" className="mr-s">
            Show All
          </a>
        </div>
        <div className="list-wrapper">
          {all_mood_albums &&
            all_mood_albums.map((all_mood_albums) => (
              <Card
                image={all_mood_albums.img}
                name={all_mood_albums.name}
                info={all_mood_albums.info}
                key={all_mood_albums.id}
              />
            ))}
        </div>

        <div className="content-header">
          <h2 className="ml-s">Pop albums</h2>
          <a href="/pop-albums" target="_blank" className="mr-s">
            Show All
          </a>
        </div>
        <div className="list-wrapper">
          {all_pop_albums &&
            all_pop_albums.map((all_pop_albums) => (
              <Card
                image={all_pop_albums.img}
                name={all_pop_albums.name}
                info={all_pop_albums.info}
                key={all_pop_albums.id}
              />
            ))}
        </div>

        <div className="content-header">
          <h2 className="ml-s">Retro albums</h2>
          <a href="/retro-albums" target="_blank" className="mr-s">
            Show All
          </a>
        </div>
        <div className="list-wrapper">
          {all_retro_albums &&
            all_retro_albums.map((all_retro_albums) => (
              <Card
                image={all_retro_albums.img}
                name={all_retro_albums.name}
                info={all_retro_albums.info}
                key={all_retro_albums.id}
              />
            ))}
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default Cards;
