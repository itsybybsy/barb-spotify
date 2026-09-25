import Interaction from "./Interaction";
import "../styles/effects.css";

function Card({ image, name, info }) {
  return (
    <div className="list-item">
      <div className="img-hover-wrap">
        <img src={image} className="album-img" alt="card" title="here" />
        <Interaction />
      </div>
      <div className="album-content">
        <h3 className="album-name">{name}</h3>
        <p className="album-info">{info}</p>
      </div>
    </div>
  );
}

export default Card;
