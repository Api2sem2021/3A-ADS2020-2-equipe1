import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Form, Input, Button, message, Spin } from 'antd';
import background from '../../images/background.png'
import { LeftCircleOutlined, LoadingOutlined, UserOutlined, LockOutlined, MailOutlined  } from '@ant-design/icons';

import './styles.css';
const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

export default function About(){
  
 

return (
        <div>                   
            <div className="ab" style={{backgroundImage:background}}>   
            <Link style={{ textAlign: "center" , fontSize:32, color:'#6f6f6f', marginTop:200}} to="/">
            <LeftCircleOutlined />
                </Link>      
                <section className="form">  
                <Form
                            name="normal_login"
                            className="login-form"
                            initialValues={{ remember: true }}
                        
                        >
                           
                            <h3 className="titleab">Sobre o Sistema</h3>
                            
                            <Form.Item >
                            <h5 style={{textAlign:"justify"}}>Essa ferramenta é configurada para entender os arquivos de formato shapefile e realizar conversões, usando regras definidas na etapa de planejamento, buscando compatibilidade com normas oficiais, e carregá-los e manipulá-los no banco de dados geográficos PostgreSQL com extensão Postgis, de acordo com a modelagem física definida pelo cliente. Também realiza o processo inverso de gerar um arquivo shapefile a partir de uma tabela do banco de dados PostgreSQL.</h5>
                                </Form.Item>
                        </Form>
                </section>
            </div>
        </div>
);
}