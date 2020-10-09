import api from './api';

export const tabela = async (host,port,database,username,password) => {
    try{
        const response = await api.post('/tableRead/pt_dren', {host,port,database,username,password});
        console.log(response);
        return response;
      }
      catch (err) {
          console.log(err);
          return err;
      }
}