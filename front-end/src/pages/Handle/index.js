import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Menu, Form, Input, Button, message, Spin,Col,Row } from 'antd';
import Map from './map'
import { del } from '../../services/delete';
import { showtab } from '../../services/show';
import { image } from '../../services/img';
import { tabela } from '../../services/tabela';
import { idtabela } from '../../services/id';
import { LeftCircleOutlined, LoadingOutlined, UserOutlined, LockOutlined, MailOutlined  } from '@ant-design/icons';


import './styles.css';


export default function Postgresql(){



  const [id, setId] = useState('')
  const history = useHistory()
  const [rows, setRows] = useState([])
  const [data, setData] = useState([])
  const [show, setShow] = useState([])
  const [base,setBase] = useState('')
  const [name, setName] = useState('')
  const [tables,setTables] = useState([])
  const [ids,setIds] = useState([])
  const [columns, setColumns] = useState({"properties":{}})
  const [qtdlinhas, setQtdlinhas] = useState(1)
  const [x, setX] = useState(0)   
  const [y, setY] = useState(0)


    async function handleTables(){
      if(name == ''){
        const response = await tabela()
        setTables(response.data.tables) 
      } 
    }
  
    async function handleId(){
      try{
        const response = await idtabela(name)
        setIds(response.data.data)
      }
      catch(err){
        console.log(err);
        alert("Não existem arquivos no formato da tabela selecionada!")
      } 
    }

    async function handleFile(){
      try{
        if(name=='' || id==''){
          alert("Tabela e/ou ID inexitente(s)!")
        }
        const response = await showtab(name,id)
        setRows(response.data.features)
        setQtdlinhas(response.data.features.length)  
      }
      catch(err){
        console.log(err);    
      }  
    }

    async function handleLines(){
      const response = await image(name, id)
      setBase(response.config.baseURL)
      setData(data.filter(d =>(d.id > rows.length)))
      if((y-x)+1>100 || y >= rows.length || x >= rows.length){
        alert("O número de linhas selecionado é inválido!")
      }
      else{
        var v = 0;
        v = x;
        for(;v <= y;v++){
          data.push(rows[v])
        }
        setShow(data)
        setColumns(data[0])
      } 
    }

    function handleClear(){
      history.go(0)
    }
   
    async function handleDelete(){
      if(name != '' && id != ''){
        const response = await del(name,id)
        if(response.status === 201){
          alert("Arquivo deletado!")
          history.go(0);
        }
        else{
          alert("Algo deu errado")
        }
      }
      else{
       alert("Escolha uma tabela e/ou um ID!")
      } 
    }

return (
      <div>                   
          <div className="hdl" >   
              
              <section className="form" style={{height:"100%",width:500}}>  
                
              <Form 
                          name="normal_login"
                          className="login-form"
                      >
                          <h4 className="titleab">Manipulação de Dados</h4>

                          
                          <Form.Item  >
                            
                          
                            <label for="tabelas">Escolha uma tabela:</label>
                            <select  value={name} onChange={e => setName(e.target.value)}  style={{maxWidth:200}} onClick={handleTables}>
                            <option>None</option>{tables.map(t => (<option value={t} onClick={handleId}>{t}</option>))}
                          </select><br/>
                          
                          <label for="tabelas">Escolha o ID do arquivo:</label>
                            <select  value={id} onChange={e => setId(e.target.value)}  style={{maxWidth:150}}>
                          <option>0</option> {ids.map(t => (<option value={t[0]}>{t[0]}</option>))}
                          </select> 
                          <Button style={{textAlign:"center",marginBottom:10, maxWidth:200}} onClick={handleFile} >Buscar Dados</Button>
                      
                          <h4>Linhas de 0 à {qtdlinhas -1}</h4>
                          <h6>Manipular linhas (100 no máximo):</h6>
                          <h7>Da linha </h7><input  type="number" value={x} onChange={e => setX(parseInt(e.target.value,10))} style={{width:100}}/><h7> à linha </h7><input type="number" value={y} onChange={e => setY(parseInt(e.target.value,10))} style={{width:100}}/>
                            
                          <Button style={{textAlign:"center",marginBottom:10, maxWidth:200}} onClick={handleLines} >Visualizar</Button> <Button style={{textAlign:"center",marginBottom:10, maxWidth:200}} onClick={handleClear} >Limpar</Button>
                          <h3  ></h3>
                                </Form.Item>
                          </Form> 
                          <Link style={{ textAlign: "center" , fontSize:32, color:'#6f6f6f'}} to="/options">
                            
                          <LeftCircleOutlined />
                          </Link>  
                          </section>
                          <section  style={{'max-whidth': 'calc(100vh - 210px)', 'overflow-x': 'auto',height:"100%",padding:30,width:1050,maxWidth:2050,backgroundColor:"white"}}>
                            <Form style={{'max-height': 'calc(100vh - 210px)', 'overflow-y': 'auto',height:500}}>
                              <table border="1" >
                          <tr> {Object.keys(columns.properties).map(c =>(<td>{c}</td>))}</tr>
                          {show.map(d =>(<tr key={d.id}>{Object.values(d.properties).map(p => (<td>{p}</td>))}</tr>))}
                          </table></Form>
                  <p><p><table style={{width:250,marginTop:70}}><tr border="5" color="white"><td><Button className="crud" style={{marginRight:50}} onClick={handleDelete}>Deletar</Button></td>
                  <td><Map idt={id} setIdt={setId}nome={name} setNome={setName} bases={base} setBases={setBase} /></td></tr></table></p></p>
                  </section>
              
          </div>
      </div>
);
}

