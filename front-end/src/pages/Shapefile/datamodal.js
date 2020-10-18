import React, { useState } from "react";
import {  Modal, Form } from "react-bootstrap";

import { Button } from 'antd';

import "./styles.css";

export default function ModalMeta({meta,setMeta,nome,setNome}) {
  const [show, setShow] = useState(false);
  
  var a= [];
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  
if(nome == "ft_ponto_drenagem"){
  a = meta.split(',',3)
  a[0] = a[0].replace('{"datas":[', '');
}
if(nome == "ft_bacia_hidrografica_n1"){
  a = meta.split(',', 3)
  a[0] = a[0].replace('{"datas":[', '');
}
if(nome == "ft_curso_dagua"){
  a = meta.split(',', 8)
  a[0] = a[0].replace('{"datas":[', '');
}
  

  return (<>
     
        <Button  onClick={handleShow}>
          Dados Salvos
        </Button>
     
     <Modal show={show} onHide={handleClose}
        
      >
        <Modal.Header closeButton>
          <Modal.Title>Dados Salvos (Linha 1)</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{'max-height': 'calc(100vh - 210px)', 'overflow-y': 'auto'}}>
        <h4 style={{textAlign:"left"}}>{nome}</h4>
        
        <p style={{textAlign:"left",marginLeft:20}}>{a[0]}</p>
        <p style={{textAlign:"left",marginLeft:20}}>{a[1]}</p>
        <p style={{textAlign:"left",marginLeft:20}}>{a[2]}</p>
        <p style={{textAlign:"left",marginLeft:20}}>{a[3]}</p>
        <p style={{textAlign:"left",marginLeft:20}}>{a[4]}</p>
        <p style={{textAlign:"left",marginLeft:20}}>{a[5]}</p>
        <p style={{textAlign:"left",marginLeft:20}}>{a[6]}</p>
        <p style={{textAlign:"left",marginLeft:20}}>{a[7]}</p>
        
       
       
       

        
         
         
        </Modal.Body>
        <Modal.Footer>
        <a href="javascript:void(0);" onClick={handleClose} style={{color:"#fe6d00"}}>Fechar</a>
        </Modal.Footer>
      </Modal>
     
     
        
    </>)
    
  
}