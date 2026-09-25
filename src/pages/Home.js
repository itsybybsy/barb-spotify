import Nav from "../components/Navigation";
import Banner from "../components/Banner-left";
import Cards from "../components/Cards.js";
import Player from "../components/Player.js";

import Model from "../components/Model.js";

import { useState } from "react";

function Home() {
  const [displayModel, setDisplayModel] = useState(false);

  return (
    <>
      {displayModel && <Model closeDisplay={() => setDisplayModel(false)} />}

      <Nav
        openDisplay={() =>
          displayModel === false
            ? setDisplayModel(true)
            : setDisplayModel(false)
        }
      />

      <Banner />
      <Cards />
      <Player />
    </>
  );
}

export default Home;
