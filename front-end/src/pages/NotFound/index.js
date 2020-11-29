import React from 'react';
import './styles.css';
import { Result } from 'antd';
import { Link } from 'react-router-dom';

export default class NotFound extends React.Component{
    render(){
      return(
        <div style={{ backgroundColor: '#E5E5E5' }}>
          <Result
            status="404"
            title="404"
            subTitle="Desculpe, a página que você visitou não existe."
            extra={<Link to="/">Ir para pagina inicial</Link>}
          />
        </div>
    );
    }
}