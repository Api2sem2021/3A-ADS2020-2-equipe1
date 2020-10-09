import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Form, Input, Button, message, Spin, Dropdown } from 'antd';
import background from '../../images/background.png'
import { LeftCircleOutlined, LoadingOutlined, UserOutlined, LockOutlined, MailOutlined  } from '@ant-design/icons';

import './styles.css';

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

export default function About(){
  
 

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
                            initialValues={{ remember: true }}
                        
                        >
                           
                            <h3 className="titleab">Shapefile</h3>
                            
                            <Form.Item >
                             </Form.Item>
                        </Form>
                </section>
                <section className="form">  
                <Form
                            name="normal_login"
                            className="login-form"
                            initialValues={{ remember: true }}
                        
                        >
                           
                            <h3 className="titleab">PostgreSQL</h3>
                            
                            <Form.Item >
                                
                             </Form.Item>
                        </Form>
                </section>
            </div>
        </div>
  );
}