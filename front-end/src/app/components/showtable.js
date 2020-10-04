import React, { Component } from 'react';
import Modal from 'react-awesome-modal';
import Grid from '@material-ui/core/Grid';
import '../pages/Connection.css'
import { tabela } from '../services/table';
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';




export default function Showtable() { 
  const host= localStorage.getItem('host');
  const database = localStorage.getItem('database');
  const username = localStorage.getItem('username');
  const port = localStorage.getItem('port');
  const password = localStorage.getItem('password');
    


  async function handleShp() {
   
    try{
        const response = await tabela(host,port,database,username,password);
        console.log(response.data);
        if(response.status === 200){
            alert("Sucesso!")
    
        }
        else{
          alert("Erro ao buscar a tabela..")
        }
        
   
    } catch (err) {
        console.log(err);
    }
}    
   

return(


<form  onSubmit={handleShp}>
         
         
      <p>
      <h1 onClick={handleShp}>Dados da Tabela</h1>
      </p>
        </form>
)
     
    }