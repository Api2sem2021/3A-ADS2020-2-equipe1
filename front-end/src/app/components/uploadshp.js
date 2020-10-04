import React, { Component } from 'react';
import Modal from 'react-awesome-modal';
import Grid from '@material-ui/core/Grid';
import '../pages/Connection.css'
import Show from '../pages/showapi';
import { save } from '../services/save';
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';


export default function Uploadshp() { 
  const host= localStorage.getItem('host');
  const database = localStorage.getItem('database');
  const username = localStorage.getItem('username');
  const port = localStorage.getItem('port');
  const password = localStorage.getItem('password');
    const history = useHistory();

  async function handleShp() {
    try{
        const response = await save(host,port,database,username,password);
        console.log(response);
        if(response.status === 201){
          alert("Salvo com sucesso!")
          
        }
        else{
          alert("Dados Inválidos!")
        }
               
   
    } catch (err) {
        console.log(err);
    }
}    


return(


<form  onSubmit={handleShp} style={{width:400}}>
          <div class="input-block" style={{marginTop:"40px"}}>
            
            <input  type="file"  required />
          </div>

         
      <p>
      <h1 style={{width:200}} onClick={handleShp}>Upload</h1>
      </p>
          
        </form>
)
     
    }



