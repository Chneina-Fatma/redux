import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  gamelist:[
    {id:Math.random(),
        name:"Evil Dead",
        description:"The Game - Game of the Year Edition",
        img:"https://cdn1.epicgames.com/offer/95e09a8c24c44684bca1a6f25aea920c/EGS_EvilDeadTheGameGameoftheYearEdition_SaberInteractiveInc_Bundles_S2_1200x1600-ee2e0433ade04521ffd4dbd4c7d97135?h=480&quality=medium&resize=1&w=360"
        },
        {id:Math.random(),
        name:"GTA",
        description:"The Game - Game of the Year Edition",
        img:"https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/fob/1280/V.jpg"
        },
        {id:Math.random(),
        name:"Formula 1",
        description:"The Game - Game of the Year Edition",
        img:"https://media.formula1.com/image/upload/content/dam/fom-website/manual/Misc/2021-Master-Folder/F1%202021%20LAUNCH%20RENDERING%20(2).jpg"
        },
        {id:Math.random(),
        name:"Super Mario",
        description:"The Game - Game of the Year Edition",
        img:"https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/portals_3/2x1_SuperMarioHub.jpg"
        },
  ]
}

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    
    addgame: (state, action) => {
      state.gamelist.push (action.payload)
    },
    deletegame: (state, action) => {
      state.gamelist=state.gamelist.filter((el)=>el.id!== action.payload.id);
    },
    editgame: (state, action) => {
let i =state.gamelist.findIndex((el)=>el.id===action.payload.id);
state.gamelist[i]={...state.gamelist,name:action.payload.edited.name,
  description:action.payload.edited.description,
  img:action.payload.edited.img,}
},
   },
})

// Action creators are generated for each case reducer function
export const { addgame ,deletegame ,editgame} = gameSlice.actions

export default gameSlice.reducer