import React from 'react'
import Gamecard from './Gamecard'
import { useSelector } from 'react-redux';
import Addgame from './Addgame';

function Gamelist() {
  const games=useSelector((state)=>state.game.gamelist);
console.log(games);
  return (
    <div>
      <div className='add' ><Addgame/></div>
    <div className='container'>
   {games.map((el)=><Gamecard game={el} />)}
    </div>
    </div>
  )
}

export default Gamelist