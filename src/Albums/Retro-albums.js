import Nav from "../components/Navigation";
import Banner from "../components/Banner-left";
import Card from "../components/Card.js";
import Footer from "../components/Footer.js";
import Player from "../components/Player.js";

import firebase from "../firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";

function RetroAlbums() {
  const retroAlbums = firebase.firestore().collection("all_retro_albums");
  const [all_retro_albums] = useCollectionData(retroAlbums, { idField: "id" });
  return (
    <>
      <Nav />
      <Banner />

      <div className="album container">
        <div className="content-wrapper">
          <h2 className="ml-s">RETRO Albums</h2>
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
            <Footer />
          </div>
        </div>
      </div>

      <Player />
    </>
  );
}

export default RetroAlbums;
