import Nav from "../components/Navigation";
import Banner from "../components/Banner-left";
import Card from "../components/Card.js";
import Footer from "../components/Footer.js";
import Player from "../components/Player.js";

import firebase from "firebase/compat/app";
import { useCollectionData } from "react-firebase-hooks/firestore";

function RetroAlbums() {
  const popAlbums = firebase.firestore().collection("all_pop_albums");
  const [all_pop_albums] = useCollectionData(popAlbums, { idField: "id" });
  return (
    <>
      <Nav />
      <Banner />

      <div className="album container">
        <div className="content-wrapper">
          <h2 className="ml-s">POP Albums</h2>
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

            <Footer />
          </div>
        </div>
      </div>

      <Player />
    </>
  );
}

export default RetroAlbums;
