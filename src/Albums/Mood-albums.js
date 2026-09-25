import Nav from "../components/Navigation";
import Banner from "../components/Banner-left";
import Card from "../components/Card.js";
import Footer from "../components/Footer.js";
import Player from "../components/Player.js";

import { all_mood_albums } from "../data";

function MoodAlbums() {
  return (
    <>
      <Nav />
      <Banner />

      <div className="album container">
        <div className="content-wrapper">
          <h2 className="ml-s">MOOD Albums</h2>

          <div className="list-wrapper">
            {all_mood_albums.map((album) => (
              <Card
                image={album.image}
                name={album.name}
                info={album.info}
                key={album.id}
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