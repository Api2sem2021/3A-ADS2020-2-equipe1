import React, { useState } from "react";
import {  Modal, Form } from "react-bootstrap";

import { Button, Image } from 'antd';

import "./map.css";

export default function Map({nome,setNome,bases,setBases}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

return (<>
    
      <Button className="crud" onClick={handleShow}>
        Ver Mapa
      </Button>
    
    <Modal show={show} onHide={handleClose}
      
    >
      <Modal.Header closeButton>
          <Modal.Title>{nome}</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{width:"600px"}}>
    
      <img width="480px" height="480px" src= {bases+'/image/'+nome} />
      
      </Modal.Body>
      <Modal.Footer>
      <a href="javascript:void(0);" onClick={handleClose} style={{color:"#fe6d00"}}>Fechar</a>
      </Modal.Footer>
    </Modal>
    
    
      
  </>)
  

}