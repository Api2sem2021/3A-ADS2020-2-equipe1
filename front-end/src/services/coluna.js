import api from './api';

export const coluna = async (name) => {
    try{
        const response = await api.get('/connection/columns/'+name);
        console.log(response);
        return response;
      }
      catch (err) {
          console.log(err);
          return err;
      }
}