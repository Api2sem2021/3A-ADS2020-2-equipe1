import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Form, Button} from 'antd';
import background from '../../images/background.png'
import doc from '../../images/document.png'
import hdl from '../../images/handle.png'
import db from '../../images/server.png'
import { LeftCircleOutlined, LoadingOutlined } from '@ant-design/icons';
import Image from 'react-bootstrap/Image';

import './styles.css';


const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;


export default function Options(){

    const [spinning, setSpinning] = useState(false);
    const history = useHistory();


    return(
                          
            <div className="op" style={{backgroundImage:background}}>   
           
            <Link style={{ textAlign: "center" , fontSize:32, color:'#6f6f6f', marginTop:200, marginLeft:100}} to="/">
            <LeftCircleOutlined />
                </Link> 
                   
                <section className="form">  
                <Form
                            name="normal_login"
                            className="login-form"
                        >
                            <h4 className="titleab">Escolha o que deseja fazer:</h4>
                            <Form.Item>
                                <div className="btns">
                                    <div className="box" style={{width:150}}>
                                        <Image src={doc} style={{display:'block',margin:'auto',width:60,height:60}}/>
                                         <Link to='/shapefile'><Button style={{marginBottom:5}}>Shapefile</Button></Link>
                                        <p style={{fontSize:15, fontWeight:"bold"}}>Shapefile para<br/>PostgreSQL</p>
                                    </div>
                                    <div className="box" style={{marginTop:100, width:150}}>
                                    <Image src={hdl} style={{display:'block',margin:'auto',width:60,height:60}}/>
                                    <Link><Button style={{marginBottom:5}}>Manipulação</Button></Link>
                                    <p style={{fontSize:15, fontWeight:"bold"}}>Manipulação do<br/>banco de dados</p>
                                    </div>
                                    <div className="box" style={{width:150}}>
                                    <Image src={db} style={{display:'block',margin:'auto',width:60,height:60}}/>
                                    <Link><Button style={{marginBottom:5}}>PostgreSQL</Button></Link>
                                    <p style={{fontSize:15, fontWeight:"bold"}}>PostgreSQL para<br/>Shapefile</p>
                                    </div>
                                </div>
                            </Form.Item>
                        </Form>
                </section>
                </div>
         
      
    )

    
}