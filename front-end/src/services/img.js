import api from './api';

export const image = async (name) => {
    try{
        const response = await api.get('/image/'+name);
        console.log(response);
        return response;
      }
      catch (err) {
          console.log(err);
          return err;
      }
}