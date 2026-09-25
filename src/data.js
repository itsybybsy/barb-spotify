var albums = { 
  mood_albums: [ 
    { 
      image: require("./images/mood/mood_img_1.jpg"),
      name: "Soft Pop Hits", 
      info: "Warm familiar pop you know and love.", 
      id: 1 
    }, 
    { 
      image: require("./images/mood/mood_img_2.jpg"),
      name: "Heartbreaker", 
      info: "Heartbroken? These songs might just help.",
      id: 2 
    }, 
    {
      image: require("./images/mood/mood_img_3.jpg"),
      name: "Chilled Hits", 
      info: "Kick back to these chilled out essentials.", 
      id: 3 
    }, 
    { 
      image: require("./images/mood/mood_img_4.jpg"),
      name: "Soft Pop Hits", 
      info: "Warm familiar pop you know and love.", 
      id: 4 
    }, 
    { 
      image: require("./images/mood/mood_img_5.jpg"),
      name: "Heartbreaker", 
      info: "Heartbroken? These songs might just help.",
      id: 5 
    }, 
    {
      image: require("./images/mood/mood_img_6.jpg"),
      name: "Chilled Hits", 
      info: "Kick back to these chilled out essentials.", 
      id: 6 
    }
], 
  pop_albums: [ 
    { 
      image: require("./images/pop/pop_img_1.jpg"),
      name: "Soft Pop Hits", 
      info: "Warm familiar pop you know and love.", 
      id: 1 
    }, 
    { 
      image: require("./images/pop/pop_img_2.jpg"),
      name: "Heartbreaker", 
      info: "Heartbroken? These songs might just help.",
      id: 2 
    }, 
    {
      image: require("./images/pop/pop_img_3.jpg"),
      name: "Chilled Hits", 
      info: "Kick back to these chilled out essentials.", 
      id: 3 
    },
     { 
      image: require("./images/pop/pop_img_4.jpg"),
      name: "Soft Pop Hits", 
      info: "Warm familiar pop you know and love.", 
      id: 4 
    }, 
    { 
      image: require("./images/pop/pop_img_5.jpg"),
      name: "Heartbreaker", 
      info: "Heartbroken? These songs might just help.",
      id: 5 
    }, 
    {
      image: require("./images/pop/pop_img_6.jpg"),
      name: "Chilled Hits", 
      info: "Kick back to these chilled out essentials.", 
      id: 6 
    } 
  ],
  retro_albums: [ 
    { 
      image: require("./images/retro/retro_img_1.jpg"),
      name: "Soft Pop Hits", 
      info: "Warm familiar pop you know and love.", 
      id: 1 
    }, 
    { 
      image: require("./images/retro/retro_img_3.jpg"),
      name: "Heartbreaker", 
      info: "Heartbroken? These songs might just help.",
      id: 2 
    }, 
    {
      image: require("./images/retro/retro_img_4.jpg"),
      name: "Chilled Hits", 
      info: "Kick back to these chilled out essentials.", 
      id: 3 
    },
    { 
      image: require("./images/retro/retro_img_5.jpg"),
      name: "Soft Pop Hits", 
      info: "Warm familiar pop you know and love.", 
      id: 4 
    }, 
    { 
      image: require("./images/retro/retro_img_6.jpg"),
      name: "Heartbreaker", 
      info: "Heartbroken? These songs might just help.",
      id: 5 
    }, 
    {
      image: require("./images/retro/retro_img_8.jpg"),
      name: "Chilled Hits", 
      info: "Kick back to these chilled out essentials.", 
      id: 6 
    }  
  ]
};

export { albums };

// ALL MOOD ALBUMS for SUB-page ALBUMS

var all_mood_albums = [ 
  { 
    image: require("./images/mood/mood_img_1.jpg"),
    name: "Soft Pop Hits", 
    info: "Warm familiar pop you know and love.", 
    id: 1 
  }, 
  { 
    image: require("./images/mood/mood_img_2.jpg"),
    name: "Heartbreaker", 
    info: "Heartbroken? These songs might just help.",
    id: 2 
  }, 
  {
    image: require("./images/mood/mood_img_3.jpg"),
    name: "Chilled Hits", 
    info: "Kick back to these chilled out essentials.", 
    id: 3 
  }, 
  { 
    image: require("./images/mood/mood_img_4.jpg"),
    name: "Soft Pop Hits", 
    info: "Warm familiar pop you know and love.", 
    id: 4 
  }, 
  { 
    image: require("./images/mood/mood_img_5.jpg"),
    name: "Heartbreaker", 
    info: "Heartbroken? These songs might just help.",
    id: 5 
  }, 
  {
    image: require("./images/mood/mood_img_6.jpg"),
    name: "Chilled Hits", 
    info: "Kick back to these chilled out essentials.", 
    id: 6 
  },
  { 
    image: require("./images/mood/mood_img_7.jpg"),
    name: "Soft Pop Hits", 
    info: "Warm familiar pop you know and love.", 
    id: 7 
  }, 
  { 
    image: require("./images/mood/mood_img_8.jpg"),
    name: "Heartbreaker", 
    info: "Heartbroken? These songs might just help.",
    id: 8 
  }, 
  {
    image: require("./images/mood/mood_img_9.jpg"),
    name: "Chilled Hits", 
    info: "Kick back to these chilled out essentials.", 
    id: 9 
  }, 
  { 
    image: require("./images/mood/mood_img_10.jpg"),
    name: "Soft Pop Hits", 
    info: "Warm familiar pop you know and love.", 
    id: 10 
  }, 
  { 
    image: require("./images/mood/mood_img_11.jpg"),
    name: "Heartbreaker", 
    info: "Heartbroken? These songs might just help.",
    id: 11 
  }, 
  {
    image: require("./images/mood/mood_img_12.jpg"),
    name: "Chilled Hits", 
    info: "Kick back to these chilled out essentials.", 
    id: 12 
  }
  ];

export { all_mood_albums };

// Saved Albums

var saved_albums = [ 
  { 
    image: require("./images/mood/mood_img_13.jpg"),
    name: "Liked songs", 
    info: "Like like like.", 
    id: 1 
  },
  { 
    image: require("./images/mood/mood_img_16.jpg"),
    name: "Mood", 
    info: "Your mood music", 
    id: 2 
  }, 
  { 
    image: require("./images/pop/pop_img_12.jpg"),
    name: "POP", 
    info: "Your pop love music.",
    id: 3 
  }, 
  {
    image: require("./images/retro/retro_img_3.jpg"),
    name: "Retro", 
    info: "Kick back to these chilled out essentials.", 
    id: 4 
  },
  { 
    image: require("./images/mood/mood_img_11.jpg"),
    name: "Liked songs", 
    info: "Like like like.", 
    id: 5 
  },
  { 
    image: require("./images/mood/mood_img_4.jpg"),
    name: "Mood", 
    info: "Your mood music", 
    id: 6 
  }, 
  { 
    image: require("./images/pop/pop_img_7.jpg"),
    name: "POP", 
    info: "Your pop love music.",
    id: 7
  }, 
  {
    image: require("./images/retro/retro_img_14.jpg"),
    name: "Retro", 
    info: "Kick back to these chilled out essentials.", 
    id: 8 
  }
  ];

export { saved_albums };