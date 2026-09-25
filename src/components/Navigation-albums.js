import "../styles/nav.css";
import Card from "./Card";

import { saved_albums } from "../data";

function NavAlbums() {
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
            {saved_albums.map((album) => (
              <Card
                image={album.image}
                name={album.name}
                info={album.info}
                key={album.id}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default NavAlbums;