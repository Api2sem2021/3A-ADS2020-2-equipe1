import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Menu, Form, Input, Button, message, Spin } from 'antd';
import background from '../../images/background.png'
import { upload } from '../../services/upload';
import { saving } from '../../services/save';
import { tabela } from '../../services/data';
import { LeftCircleOutlined, LoadingOutlined, UserOutlined, LockOutlined, MailOutlined  } from '@ant-design/icons';
import pdjson from './ptdren.json';
import bhjson from './bchidr.json';
import cdjson from './crsdag.json';
import ModalMeta from './datamodal';



import './styles.css';




export default function Shapefile(){

  var json;
  const [send, setSend] = useState('');
  
  const save = useState([])
  const pass = useState([])
  const [cols, setCols] = useState([])
  const [file, setFile] = useState(null)
  const [name, setName] = useState('ft_bacia_hidrografica_n1')
    const [tab,setTab] = useState([])
        const bchidr = ['BHI_CD','BHI_CD_OTTO','BHI_AR'];
        const ptdren = ["PDR_CD","PDR_CD_CURSO_DAGUA","PDR_DS"];
        const crsdag = ['CDA_CD','CDA_CD_OTTO','CDA_NU_DIST_BH','CDA_NU_COMP','CDA_AR_BACIA','CDA_CD_DESAGUA','CDA_NU_NIVEL_OTTO','CDA_NU_ORDEM','CDA_DS_DOMINIALIDADE'];
        const [col1, setCol1] = useState('fid');
        const [col2, setCol2] = useState('fid');
        const [col3, setCol3] = useState('fid');
        const [col4, setCol4] = useState('fid');
        const [col5, setCol5] = useState('fid');
        const [col6, setCol6] = useState('fid');
        const [col7, setCol7] = useState('fid');
        const [col8, setCol8] = useState('fid');
        const [col9, setCol9] = useState('fid');
       
        
        const show = tab.map(t => (
          <p><input type="text" value={t} style={{width:250}}/></p>
        ))
    function handlebh(){
        setTab(bchidr);
        
        
      }
      function handlecd(){
        setTab(crsdag);
        
       
      }
      function handlepd(){
        setTab(ptdren);
        
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
            
        }catch(err){
            console.log(err);
        }  
    }
    
   async function handleSave(){
     console.log(name)
     
      save[0] = col1;
      save[1] = col2;
      save[2] = col3;
      save[3] = col4;
      save[4] = col5;
      save[5] = col6;
      save[6] = col7;
      save[7] = col8;
      save[8] = col9;
      
      var x = 0
      while(pass.length < tab.length){
        pass[x] = save[x]
        x = x+1;
      }
      if(name == "ft_curso_dagua"){
        if(pass[0] == "idcda" && pass[1] == "cocursodag" && pass[2] == "nudistbacc" && pass[3] == "nucompcda" && pass[4] == "nuareabacc" && pass[5] == "cocdadesag" && pass[6] == "nunivotcda" && pass[7] == "nuordemcda" && pass[8] == "dedominial"){
          cdjson.config.idcda = tab[0]
          cdjson.config.cocursodag = tab[1]
          cdjson.config.nudistbacc = tab[2]
          cdjson.config.nucompcda = tab[3]
          cdjson.config.nuareabacc = tab[4]
          cdjson.config.cocdadesag = tab[5]
          cdjson.config.nunivotcda = tab[6]
          cdjson.config.nuordemcda = tab[7]
          cdjson.config.dedominial = tab[8]
          json = cdjson;
        }
        else{
          alert("Há coluna(s) errada(s)!")
        }
      }
      if(name == "ft_ponto_drenagem"){
        if(pass[0] == "idponto" && pass[1] == "cocursodag" && pass[2] == "deponto"){
          pdjson.config.idponto = tab[0]
          pdjson.config.cocursodag = tab[1]
          pdjson.config.deponto = tab[2]
          json = pdjson;
        }
        else{
          alert("Há coluna(s) errada(s)!")
        }
      }
      if(name == "ft_bacia_hidrografica_n1"){
        console.log(pass)
        if(pass[0] == "fid" && pass[1] == "wts_pk" && pass[2] == "wts_gm_are"){
          bhjson.config.fid = tab[0]
          bhjson.config.wts_pk = tab[1]
          bhjson.config.wts_gm_are = tab[2]
          json = bhjson;
        }
        else{
          alert("Há coluna(s) errada(s)!")
        }
      }
      
      
    
      
      console.log(json)
      
    const response = await saving(name,json)
    if(response.status === 200){
      console.log(response.data)
       setSend(JSON.stringify(response.data))
      
      alert('Parametrização bem-sucedida!')
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
                          
                            <p><h6>1.<select value={col1} onChange={e => setCol1(e.target.value)}>{cols.map(t => (<option value={t}>{t}</option>))} </select></h6></p>
                            <p><h6>2.<select value={col2} onChange={e => setCol2(e.target.value)}>{cols.map(t => (<option value={t}>{t}</option>))} </select></h6></p>
                            <p><h6>3.<select value={col3} onChange={e => setCol3(e.target.value)}>{cols.map(t => (<option value={t}>{t}</option>))} </select></h6></p>
                            <p><h6>4.<select value={col4} onChange={e => setCol4(e.target.value)}>{cols.map(t => (<option value={t}>{t}</option>))} </select></h6></p>
                            <p><h6>5.<select value={col5} onChange={e => setCol5(e.target.value)}>{cols.map(t => (<option value={t}>{t}</option>))} </select></h6></p>
                            <p><h6>6.<select value={col6} onChange={e => setCol6(e.target.value)}>{cols.map(t => (<option value={t}>{t}</option>))} </select></h6></p>
                            <p><h6>7.<select value={col7} onChange={e => setCol7(e.target.value)}>{cols.map(t => (<option value={t}>{t}</option>))} </select></h6></p>
                            <p><h6>8.<select value={col8} onChange={e => setCol8(e.target.value)}>{cols.map(t => (<option value={t}>{t}</option>))} </select></h6></p>
                            <p><h6>9.<select value={col9} onChange={e => setCol9(e.target.value)}>{cols.map(t => (<option value={t}>{t}</option>))} </select></h6></p>
                            
  
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
                            <select  value={name} onChange={e => setName(e.target.value)}  style={{maxWidth:150}} >
                            <option value={"ft_bacia_hidrografica_n1"} onClick={handlebh} >FT_BACIA_HIDROGRAFICA_N1</option>
                            <option value={"ft_curso_dagua"} onClick={handlecd} >FT_CURSO_DAGUA</option>
                            <option value={"ft_ponto_drenagem"} onClick={handlepd} >FT_PONTO_DRENAGEM</option>
                            </select>
                            <p>{show}</p>
                            <Button onClick={handleSave} style={{textAlign:"center",marginBottom:0,marginTop:10}}>Salvar</Button>
                            
                            <ModalMeta meta={send} setMeta={setSend} nome={name} setNome={setName}/>
                             </Form.Item>

                        </Form>
                </section>
                
            </div>
        </div>
  );
}