import "./styles/app.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";

import RetroAlbums from "./Albums/Retro-albums.js";
import MoodAlbums from "./Albums/Mood-albums.js";
import PopAlbums from "./Albums/Pop-albums.js";

import Account from "./pages/Account.js";
import Profile from "./pages/Profile.js";
import Settings from "./pages/Settings.js";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/retro-albums" element={<RetroAlbums />} />
          <Route path="/mood-albums" element={<MoodAlbums />} />
          <Route path="/pop-albums" element={<PopAlbums />} />

          <Route path="/account" element={<Account />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
