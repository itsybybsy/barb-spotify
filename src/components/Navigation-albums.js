import "../styles/nav.css";
import Card from "./Card";

import firebase from "../firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";

function NavAlbums() {
  const savedAlbRef = firebase.firestore().collection("saved_albums");
  const [saved_albums] = useCollectionData(savedAlbRef, { idField: "id" });

  return (
    <>
      <div className="nav-albums-wrapper">
        <div className="flex-row buttons-group">
          <button className="banner-button active">All</button>
          <button className="banner-button">Music</button>
          <button className="banner-button">podcast</button>
          <button className="banner-button">Audiobooks</button>
        </div>
        <div className="flex-row albums-group">
          <div className="box-album">
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
    </>
  );
}

export default NavAlbums;
