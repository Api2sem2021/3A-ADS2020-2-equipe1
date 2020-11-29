import React, { Component } from 'react';
import './styles.css'
import { con } from '../../services/postcon';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';




export default function Formcon(){
    const [host, setHost] = useState('');
    const [database, setDatabase] = useState('');
    const [username, setUsername] = useState('');
    const [port, setPort] = useState('');
    const [password, setPassword] = useState('');
    const [spinning, setSpinning] = useState(false);
    const history = useHistory();

    async function handleLogin() { 
    
      try{
          
          const response = await con( host, port, database, username, password );
        
          
          console.log(response);
          if(response.status === 201){
          
            alert("Conectado ao PostgreSQL!")
            history.push('/options');
        }
        else{
          alert("Dados Inválidos!")
        }
                
    
      } catch (err) {
          console.log(err);
      }
     }    


return(


  <form  onSubmit={handleLogin}>
          <div class="input-block" style={{marginTop:"40px"}}>
            <label htmlFor="text">Host</label>
            <input class="form-control" type="text" name="host" id="host" placeholder="Ex.: localhost" onChange={e => setHost(e.target.value)} required />
          </div>

          <div class="input-block">
            <label htmlFor="text">Database</label>
            <input class="form-control" type="text" name="db" id="db" placeholder="Ex.: Geofpi" onChange={e => setDatabase(e.target.value)} required />
          </div>

          <div class="input-block">
            <label htmlFor="text">Usuário</label>
            <input class="form-control" type="text" name="user" id="user" placeholder="Ex.: postgres" onChange={e => setUsername(e.target.value)} required />
          </div>

          <div class="input-block">
            <label htmlFor="text">Porta</label>
            <input class="form-control" type="text" name="porta" id="porta" placeholder="Ex.: 5432" onChange={e => setPort(e.target.value)} required />
          </div>

          <div class="input-block">
            <label htmlFor="senha">Senha</label>
            <input class="form-control" type="password" name="senha" id="senha" placeholder="Ex.: abc123" onChange={e => setPassword(e.target.value)} required />
          </div>
         
      <p>
      <h1 onClick={handleLogin}>Conectar</h1>
      </p>    
  </form>
)
}