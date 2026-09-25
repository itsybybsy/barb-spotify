/*
var albums = {
  mood_albums: [
    {
      image: require("/src/images/mood/mood_img_1.jpg"),
      name: "Aetheric Bliss",
      info: "Veridian Dreams.",
      id: 1,
    },
    {
      image: require("/src/images/mood/mood_img_2.jpg"),
      name: "Enigma Earth",
      info: "Moonlit Melancholy.",
      id: 2,
    },
    {
      image: require("/src/images/mood/mood_img_3.jpg"),
      name: "Celestial Serenity",
      info: "Luminous Lullabies",
      id: 3,
    },
    {
      image: require("/src/images/mood/mood_img_4.jpg"),
      name: "Ethereal Euphoria",
      info: "Aurora Ascendance.",
      id: 4,
    },
    {
      image: require("/src/images/mood/mood_img_5.jpg"),
      name: "Mystic Whispers",
      info: "Twilight Tranquility",
      id: 5,
    },
    {
      image: require("/src/images/mood/mood_img_6.jpg"),
      name: "Radiant Reverie",
      info: "Solar Solitude",
      id: 6,
    },
  ],
  pop_albums: [
    {
      image: require("/src/images/pop/pop_img_1.jpg"),
      name: "Electric Dreams",
      info: "Sparkling Synthpop",
      id: 1,
    },
    {
      image: require("/src/images/pop/pop_img_2.jpg"),
      name: "Neon Nights",
      info: "Glittery POP Anthems",
      id: 2,
    },
    {
      image: require("/src/images/pop/pop_img_3.jpg"),
      name: "Velvet Visions",
      info: "Sensual Soundscape",
      id: 3,
    },
    {
      image: require("/src/images/pop/pop_img_4.jpg"),
      name: "Crystal Clear",
      info: "Shimmering Pop Perfection",
      id: 4,
    },
    {
      image: require("/src/images/pop/pop_img_5.jpg"),
      name: "Starry Nights",
      info: "Celestial Pop Jams",
      id: 5,
    },
    {
      image: require("/src/images/pop/pop_img_6.jpg"),
      name: "Rainbow Rhythms",
      info: "Colorful Pop Fusion",
      id: 6,
    },
  ],
  retro_albums: [
    {
      image: require("/src/images/retro/retro_img_1.jpg"),
      name: "Neon Nights",
      info: "A Retrospective",
      id: 1,
    },
    {
      image: require("/src/images/retro/retro_img_2.jpg"),
      name: "Groove City Jams",
      info: "Hits of the 80s",
      id: 2,
    },
    {
      image: require("/src/images/retro/retro_img_3.jpg"),
      name: "Disco Fever",
      info: "Classic Dance Party Anthems",
      id: 3,
    },
    {
      image: require("/src/images/retro/retro_img_4.jpg"),
      name: "Retro Rewind",
      info: "Timeless Hits from the 70s and 80s",
      id: 4,
    },
    {
      image: require("/src/images/retro/retro_img_5.jpg"),
      name: "Vintage Vibes",
      info: "Nostalgic Songs for the Soul",
      id: 5,
    },
    {
      image: require("/src/images/retro/retro_img_6.jpg"),
      name: "Boogie Wonderland",
      info: "Ultimate Disco Collection",
      id: 6,
    },
  ],
};

export { albums };

// ALL MOOD ALBUMS for SUB-page ALBUMS

var all_mood_albums = [
  {
    image: require("/src/images/mood/mood_img_1.jpg"),
    name: "Aetheric Bliss",
    info: "Veridian Dreams.",
    id: 1,
  },
  {
    image: require("/src/images/mood/mood_img_2.jpg"),
    name: "Enigma Earth",
    info: "Moonlit Melancholy.",
    id: 2,
  },
  {
    image: require("/src/images/mood/mood_img_3.jpg"),
    name: "Celestial Serenity",
    info: "Luminous Lullabies",
    id: 3,
  },
  {
    image: require("/src/images/mood/mood_img_4.jpg"),
    name: "Ethereal Euphoria",
    info: "Aurora Ascendance.",
    id: 4,
  },
  {
    image: require("/src/images/mood/mood_img_5.jpg"),
    name: "Mystic Whispers",
    info: "Twilight Tranquility",
    id: 5,
  },
  {
    image: require("/src/images/mood/mood_img_6.jpg"),
    name: "Radiant Reverie",
    info: "Solar Solitude",
    id: 6,
  },
  {
    image: require("/src/images/mood/mood_img_7.jpg"),
    name: "Shadowed Symphony",
    info: "Nocturnal Nostalgia",
    id: 7,
  },
  {
    image: require("/src/images/mood/mood_img_8.jpg"),
    name: "Violet Visions",
    info: "Dreamscape Delight",
    id: 8,
  },
  {
    image: require("/src/images/mood/mood_img_9.jpg"),
    name: "Serene Spell",
    info: "Tranquil Tones",
    id: 9,
  },
  {
    image: require("/src/images/mood/mood_img_10.jpg"),
    name: "Nebula Nights",
    info: "Stellar Serenade",
    id: 10,
  },
  {
    image: require("/src/images/mood/mood_img_11.jpg"),
    name: "Dreamy Dusk",
    info: "Velvet Veil",
    id: 11,
  },
  {
    image: require("/src/images/mood/mood_img_12.jpg"),
    name: "Cosmic Comfort",
    info: "Galactic Grace",
    id: 12,
  },
  {
    image: require("/src/images/mood/mood_img_13.jpg"),
    name: "Whispering Waves",
    info: "Sapphire Solace",
    id: 13,
  },
  {
    image: require("/src/images/mood/mood_img_14.jpg"),
    name: "Enchanted Echo",
    info: "Emerald Emotions",
    id: 14,
  },
  {
    image: require("/src/images/mood/mood_img_15.jpg"),
    name: "Midnight Mirage",
    info: "Crimson Calm",
    id: 15,
  },
  {
    image: require("/src/images/mood/mood_img_16.jpg"),
    name: "Starlight Sonata",
    info: "Opal Overture",
    id: 16,
  },
];

export { all_mood_albums };


// ALL POP ALBUMS for SUB-page ALBUMS


var all_pop_albums = [
  {
    image: require("/src/images/pop/pop_img_1.jpg"),
    name: "Electric Dreams",
    info: "Sparkling Synthpop",
    id: 1,
  },
  {
    image: require("/src/images/pop/pop_img_2.jpg"),
    name: "Neon Nights",
    info: "Glittery POP Anthems",
    id: 2,
  },
  {
    image: require("/src/images/pop/pop_img_3.jpg"),
    name: "Velvet Visions",
    info: "Sensual Soundscape",
    id: 3,
  },
  {
    image: require("/src/images/pop/pop_img_4.jpg"),
    name: "Crystal Clear",
    info: "Shimmering Pop Perfection",
    id: 4,
  },
  {
    image: require("/src/images/pop/pop_img_5.jpg"),
    name: "Starry Nights",
    info: "Celestial Pop Jams",
    id: 5,
  },
  {
    image: require("/src/images/pop/pop_img_6.jpg"),
    name: "Rainbow Rhythms",
    info: "Colorful Pop Fusion",
    id: 6,
  },
  {
    image: require("/src/images/pop/pop_img_7.jpg"),
    name: "Pop Paradise",
    info: "Tropical Tracks",
    id: 7,
  },
  {
    image: require("/src/images/pop/pop_img_8.jpg"),
    name: "Moonlit Melodies",
    info: "Dreamy Pop Tunes",
    id: 8,
  },
  {
    image: require("/src/images/pop/pop_img_9.jpg"),
    name: "Golden Grooves",
    info: "Upbeat Pop Hits",
    id: 9,
  },
  {
    image: require("/src/images/pop/pop_img_10.jpg"),
    name: "Electric Echoes",
    info: "Energetic Pop Vibes",
    id: 10,
  },
  {
    image: require("/src/images/pop/pop_img_11.jpg"),
    name: "Wonderland Wonders",
    info: "Whimsical Pop Magic",
    id: 11,
  },
  {
    image: require("/src/images/pop/pop_img_12.jpg"),
    name: "Blissful Beats",
    info: "Serene Pop Grooves",
    id: 12,
  },
  {
    image: require("/src/images/pop/pop_img_13.jpg"),
    name: "Summer Sunset",
    info: "Sunny Pop Sway",
    id: 13,
  },
  {
    image: require("/src/images/pop/pop_img_14.jpg"),
    name: "Divine Disco",
    info: "Pop Revival",
    id: 14,
  },
  {
    image: require("/src/images/pop/pop_img_15.jpg"),
    name: "Cosmic Colors",
    info: "Interstellar Pop Melodies",
    id: 15,
  },
  {
    image: require("/src/images/pop/pop_img_16.jpg"),
    name: "Sunset Serenade",
    info: "Romantic Pop Ballads",
    id: 16,
  },
];

export { all_pop_albums };



// ALL RETRO ALBUMS for SUB-page ALBUMS

var all_retro_albums = [
  {
    image: require("/src/images/retro/retro_img_1.jpg"),
    name: "Neon Nights",
    info: "A Retrospective",
    id: 1,
  },
  {
    image: require("/src/images/retro/retro_img_2.jpg"),
    name: "Groove City Jams",
    info: "Hits of the 80s",
    id: 2,
  },
  {
    image: require("/src/images/retro/retro_img_3.jpg"),
    name: "Disco Fever",
    info: "Classic Dance Party Anthems",
    id: 3,
  },
  {
    image: require("/src/images/retro/retro_img_4.jpg"),
    name: "Retro Rewind",
    info: "Timeless Hits from the 70s and 80s",
    id: 4,
  },
  {
    image: require("/src/images/retro/retro_img_5.jpg"),
    name: "Vintage Vibes",
    info: "Nostalgic Songs for the Soul",
    id: 5,
  },
  {
    image: require("/src/images/retro/retro_img_6.jpg"),
    name: "Boogie Wonderland",
    info: "Ultimate Disco Collection",
    id: 6,
  },
  {
    image: require("/src/images/retro/retro_img_7.jpg"),
    name: "Funky Fresh",
    info: "Retro Grooves from the 70s and 80s",
    id: 7,
  },
  {
    image: require("/src/images/retro/retro_img_8.jpg"),
    name: "Flashback Frenzy",
    info: "Iconic Hits of the Past",
    id: 8,
  },
  {
    image: require("/src/images/retro/retro_img_9.jpg"),
    name: "Electric Dreams",
    info: "Synthwave Classics Remastered",
    id: 9,
  },
  {
    image: require("/src/images/retro/retro_img_10.jpg"),
    name: "Rock 'n' Roll Revival",
    info: "Classic Hits Reimagined",
    id: 10,
  },
  {
    image: require("/src/images/retro/retro_img_11.jpg"),
    name: "Soulful Serenade",
    info: "Timeless R&B and Soul Hits",
    id: 11,
  },
  {
    image: require("/src/images/retro/retro_img_12.jpg"),
    name: "Back in Time",
    info: "Vintage Pop and Rock Hits",
    id: 12,
  },
  {
    image: require("/src/images/retro/retro_img_13.jpg"),
    name: "Retro Rhythms",
    info: "Time Capsule of 80s Music",
    id: 13,
  },
  {
    image: require("/src/images/retro/retro_img_14.jpg"),
    name: "Disco Divas",
    info: "Ultimate Dancefloor Anthems",
    id: 14,
  },
  {
    image: require("/src/images/retro/retro_img_15.jpg"),
    name: "Nostalgia Avenue",
    info: "Hits from the Decades",
    id: 15,
  },
  {
    image: require("/src/images/retro/retro_img_16.jpg"),
    name: "Retro Revolution",
    info: "Reviving the Soundtrack of our Youth",
    id: 16,
  },
];

export { all_retro_albums };



// Saved Albums


var saved_albums = [
  {
    image: require("/src/images/mood/mood_img_1.jpg"),
    name: "Aetheric Bliss",
    info: "Veridian Dreams.",
    id: 1,
  },
  {
    image: require("/src/images/mood/mood_img_2.jpg"),
    name: "Enigma Earth",
    info: "Moonlit Melancholy.",
    id: 2,
  },
  {
    image: require("/src/images/pop/pop_img_3.jpg"),
    name: "Velvet Visions",
    info: "Sensual Soundscape",
    id: 3,
  },
  {
    image: require("/src/images/pop/pop_img_4.jpg"),
    name: "Crystal Clear",
    info: "Shimmering Pop Perfection",
    id: 4,
  },
  {
    image: require("/src/images/retro/retro_img_5.jpg"),
    name: "Vintage Vibes",
    info: "Nostalgic Songs for the Soul",
    id: 5,
  },
  {
    image: require("/src/images/retro/retro_img_6.jpg"),
    name: "Boogie Wonderland",
    info: "Ultimate Disco Collection",
    id: 6,
  },
];

export { saved_albums };
*/
