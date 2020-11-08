import api from './api';

export const tabela = async (name,json) => {
    try{
        const response = await api.get('/connection/tables');
        console.log(response);
        return response;
      }
      catch (err) {
          console.log(err);
          return err;
      }
}