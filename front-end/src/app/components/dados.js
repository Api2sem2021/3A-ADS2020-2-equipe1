import React, { Component } from 'react';
import Modal from 'react-awesome-modal';
import Grid from '@material-ui/core/Grid';
import '../pages/Connection.css'
import { tabela } from '../services/table';
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import response from './showtable';




export default class Dados extends React.Component{
    state = {
      filmes: [],
    }
  
    async componentDidMount() {
      
  
      this.setState({ filmes: response.data });
    }
  
    render() {
  
      const { filmes } = this.state;
  
      return (
        <div>
    {filmes.map(filme => (
              <p>
              <input type="text"  key={filme.show.id} value={filme.show.name} style={{width:"250px"}}/>
              </p>
              ))}
  
  
  
        </div>
        
      );
    };
  };
  