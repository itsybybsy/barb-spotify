import Card from "./Card";
import Footer from "./Footer.js";
import "../styles/content.css";

import { albums } from "../data";

function Cards() {
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
          {albums.mood_albums.slice(0, 5).map((album) => (
            <Card
              image={album.image}
              name={album.name}
              info={album.info}
              key={album.id}
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
          {albums.pop_albums.slice(0, 5).map((album) => (
            <Card
              image={album.image}
              name={album.name}
              info={album.info}
              key={album.id}
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
          {albums.retro_albums.slice(0, 5).map((album) => (
            <Card
              image={album.image}
              name={album.name}
              info={album.info}
              key={album.id}
            />
          ))}
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default Cards;