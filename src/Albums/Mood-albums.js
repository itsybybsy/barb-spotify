import Nav from "../components/Navigation";
import Banner from "../components/Banner-left";
import Card from "../components/Card.js";
import Footer from "../components/Footer.js";
import Player from "../components/Player.js";

import firebase from "../firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";

function MoodAlbums() {
  const moodAlbums = firebase.firestore().collection("all_mood_albums");
  const [all_mood_albums] = useCollectionData(moodAlbums, { idField: "id" });

  return (
    <>
      <Nav />
      <Banner />

      <div className="album container">
        <div className="content-wrapper">
          <h2 className="ml-s">MOOD Albums</h2>
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
            <Footer />
          </div>
        </div>
      </div>
      <Player />
    </>
  );
}

export default MoodAlbums;
