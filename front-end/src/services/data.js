import api from './api';

export const tabela = async (name) => {
    try{
        const response = await api.get('/tableRead/'+ name);
        console.log(response);
        return response;
      }
      catch (err) {
          console.log(err);
          return err;
      }
}