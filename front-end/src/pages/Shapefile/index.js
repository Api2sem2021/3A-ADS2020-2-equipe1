import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Menu, Form, Input, Button, message, Spin, Col } from 'antd';
import background from '../../images/background.png'
import { upload } from '../../services/upload';
import { saving } from '../../services/save';
import { tabela } from '../../services/tabela';
import { coluna } from '../../services/coluna';
import { LeftCircleOutlined, LoadingOutlined, UserOutlined, LockOutlined, MailOutlined  } from '@ant-design/icons';


import './styles.css';


export default function Shapefile(){


  const history = useHistory();
  const [json, setJson] = useState({"config":{}}) 
  const [cols, setCols] = useState([])
  const [file, setFile] = useState(null)
  const [name, setName] = useState('')
  const [tables,setTables] = useState([])
  const [columns,setColumns] = useState([])
  const [showtab, setShowtab] = useState([])
 


  async function handleTables(){
    setJson({"config":{}})
    if(name == ''){
      const response = await tabela()
      setTables(response.data.tables)
    }
  }

  async function handleColumns(){
    const response = await coluna(name)
    setShowtab(cols)
    setColumns(response.data.tables)
  }

  function handleFile(e){
    setFile(e.target.files[0])
    console.log(e.target.files[0])      
    }

  async function handleUpload(e){
    let formdata = new FormData()
    formdata.append('file',file)
    try{ 
      const response = await upload(formdata)
      setCols(response.data.fields)
    }
    catch(err){
      console.log(err);
    }  
  }
    
  async function handleSave(){
    const response = await saving(name,json)
    if(response.status === 201){
      alert('Parametrização bem-sucedida!')
      history.go(0);
    }
    else{
      alert("Algo deu errado.")
    }
  }
    
   

return (
      <div>                   
          <div className="shp" style={{backgroundImage:background}}>   
          <Link style={{ textAlign: "center" , fontSize:32, color:'#6f6f6f', marginTop:200}} to="/options">
          <LeftCircleOutlined />
              </Link>      
              <section className="form">  
                <Form
                          name="normal_login"
                          className="login-form"
                      >
                          <h4 className="titleab">Shapefile</h4>

                          
                          <Form.Item >
                          <input type="file" name="file" onChange={(e) => handleFile(e)} />
                          <Button style={{textAlign:"center",marginBottom:10}} onClick={(e)=>handleUpload(e)}>Upload</Button>
                          <Form.Item style={{'max-height': 'calc(100vh - 210px)', 'overflow-y': 'auto',maxHeight:350}}>{cols.map(c => (<p><input type="text" value={c} style={{height:20}}/></p>))}</Form.Item>
                        


                            </Form.Item>
                </Form>
              </section>
              <section className="form">  
                <Form
                          name="normal_login"
                          className="login-form"
                          initialValues={{ remember: true }}
                      >
                          <h4 className="titleab">PostgreSQL</h4>
                          <Form.Item >
                          <label for="tabelas">Escolha uma tabela:</label>
                          <select  value={name} onChange={e => setName(e.target.value)}  style={{maxWidth:150}} onClick={handleTables}>
                           <option>None</option> {tables.map(t => (<option value={t} onClick={handleColumns}>{t}</option>))}
                          </select>
                          <Button onClick={handleSave} style={{textAlign:"center",marginBottom:10,marginTop:23}}>Salvar</Button>
                          <Form.Item style={{'max-height': 'calc(100vh - 210px)', 'overflow-y': 'auto',maxHeight:350}}>
                            {showtab.map(c =>(
                            <p><select onChange={e => json.config[c] = e.target.value}><option>None</option>{columns.map(t =>(<option value={t}>{t}</option>))}</select></p>
                          ) )
                          }
                  
                          </Form.Item>
                          </Form.Item>
                </Form>
              </section>
              
          </div>
      </div>
);
}