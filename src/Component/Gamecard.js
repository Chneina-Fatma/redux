import React from 'react'
import { deletegame } from '../redux/gameslice'
import { useDispatch } from 'react-redux'
import Editgame from './Editgame'


function Gamecard({game}) {
  const dispatch=useDispatch()
  return (
    <div className='card'>
      <img src={game.img} /> 
      <h3> {game.name} </h3>
      <p> {game.description} </p>
      <button onClick={()=>dispatch(deletegame({id:game.id}))}>X</button>
      <Editgame game={game} />
    </div>
  )
}


export default Gamecard