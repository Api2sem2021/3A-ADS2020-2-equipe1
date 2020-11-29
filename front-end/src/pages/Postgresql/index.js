import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Menu, Form, Input, Button, message, Spin,Col,Row } from 'antd';
import background from '../../images/background.png'
import { file } from '../../services/data';
import { tabela } from '../../services/tabela';
import { LeftCircleOutlined, LoadingOutlined, UserOutlined, LockOutlined, MailOutlined  } from '@ant-design/icons';


import './styles.css';


export default function Postgresql(){


  const [base,setBase] = useState('')
  const [name, setName] = useState('')
  const [tables,setTables] = useState([])
  const [columns,setColumns] = useState([])

    async function handleTables(){
      if(name == ''){
        const response = await tabela()
        setTables(response.data.tables) 
      }
    }

    async function handleFile(){
      try{
        const response = await file(name)
        setBase(response.config.baseURL)
        let formdata = new FormData()
        formdata = response.data
        alert('Arquivo pronto para download!')   
      }
      catch(err){
          console.log(err);
      }  
    }

    function download(){
      if(name != ''){
        var link = document.createElement("a");
        link.href = base+'/file/'+name;
        link.click();    
      }
      else{
        alert("Escolha uma tabela!")
      }
    }
   

return (
      <div>                   
          <div className="psql" style={{backgroundImage:background}}>   
          <Link style={{ textAlign: "center" , fontSize:32, color:'#6f6f6f', marginTop:200}} to="/options">
          <LeftCircleOutlined />
              </Link>      
              <section className="form">  
              <Form 
                          name="normal_login"
                          className="login-form"
                      >
                          <h4 className="titleab">PostgreSQL</h4>

                          
                          <Form.Item  >
                            <p>
                            <label for="tabelas">Escolha uma tabela:</label>
                            <select  value={name} onChange={e => setName(e.target.value)}  style={{maxWidth:150}} onClick={handleTables}>
                            {tables.map(t => (<option value={t}>{t}</option>))}
                          </select></p>
                          
                          <Button style={{textAlign:"center",marginBottom:10, maxWidth:200,marginLeft:"30%"}} onClick={handleFile} >Salvar</Button>
                        <Button  style={{textAlign:"center",marginBottom:10,marginTop:23, maxWidth:200,marginLeft:"30%"}} onClick={download}>Download</Button>
                        

                            </Form.Item>
                      </Form> 
              </section>
              
              
          </div>
      </div>
);
}