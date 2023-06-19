import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { editgame } from '../redux/gameslice';


function Editgame({game}) {
    const [show, setShow] = useState(false);
const [editedgame, seteditedgame] = useState({
    id:Math.random(),
        name:game.name,
        description:game.description,
        img:game.img,
    
})
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch=useDispatch();
  return (
    <div>
        <Button variant="primary" onClick={handleShow}>
    Edit
  </Button>

  <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Edit Game</Modal.Title>
    </Modal.Header>
    <Modal.Body>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>name</Form.Label>
        <Form.Control type="text" placeholder={game.name} 
        onChange={(e)=>seteditedgame({...editedgame, name:e.target.value})}/>
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>description</Form.Label>
        <Form.Control type="text" placeholder={game.description} 
        onChange={(e)=>seteditedgame({...editedgame , description:e.target.value})} />
      </Form.Group>
      <Form.Label>image</Form.Label>
        <Form.Control type="text" placeholder={game.img} onChange={(e)=>seteditedgame({...editedgame , img:e.target.value})} />
      
    </Form>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary"
       onClick={handleClose}>
        Close
      </Button>
      <Button variant="primary" 
      onClick={()=>{dispatch(editgame({id:game.id,edited:editedgame}));handleClose();}}>
        Edit
      </Button>
    </Modal.Footer>
  </Modal>
  </div>
  )
}

export default Editgame