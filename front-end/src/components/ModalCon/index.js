import React, { Component } from 'react';
import './styles.css'
import FormCon from '../Form/index'
import {  Button } from 'antd';
import Modal from 'react-awesome-modal';

export default class ModalCon extends Component {
    constructor(props) {
      super(props);
      this.state = {
          visible : false
      }
  }
  
      
          openModal() {
          this.setState({
              visible : true
          });
      }
  
          closeModal() {
          this.setState({
              visible : false
          });
      }
  
render(){
        return (
            <section>
                
                <Button  className="buttoncon"  onClick={() => this.openModal()}>Conectar-se ao PostgreSQL</Button>
                <Modal visible={this.state.visible} width="400px" height="600px" effect="fadeInDown" onClickAway={() => this.closeModal()}>
                
        <strong>Conecte-se ao PostgreSQL</strong>
        
        <FormCon/>

                <p>   <a href="javascript:void(0);" onClick={() => this.closeModal()} style={{color:"#fe6d00"}}>Fechar</a></p>        
                </Modal>
            </section>
        );
    }
}

