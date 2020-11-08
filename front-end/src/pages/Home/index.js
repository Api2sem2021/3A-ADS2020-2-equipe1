import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import background from '../../images/Globo_Atual.PNG';
import logo from '../../images/Logo Real.png';
import con from '../../images/databases.png';
import { Form, Row, Col, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import ModalCon from '../../components/ModalCon/index'



import './styles.css';

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

export default function Home(){
    const [spinning, setSpinning] = useState(false);
    const history = useHistory();

   

    return(
        <div className="logon-container">
            <Row className="mycontainer">
                <Col flex="0 1 500px">
                <Spin indicator={antIcon} spinning={spinning} > 
                        <section className="form">
                            
                            <Form
                                name="normal_login"
                                className="login-form"
                                initialValues={{ remember: true }}
                                
                            >
                                
                                
                                <Form.Item>
                                    
                                    <Image src={logo}  className="imglogo" width='30%' height='30%' fluid />
                                    <label className="toRegister">Análise de Dados Espaciais</label>
                                    <Image src={con} className="img" width='15%' height='15%' fluid />
                                    <ModalCon/>
                                    <Link className="toAbout" to="/about">Sobre o Sistema</Link>
                                   
                                </Form.Item>
                            </Form>
                        </section>
                    </Spin>
                    
                </Col>
                <Col flex="1 1 200px">
                    <Image src={background} width='100%' height='100%' fluid />
                </Col>
            </Row>              
        </div>
    )
}