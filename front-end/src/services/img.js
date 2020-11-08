import api from './api';

export const image = async (name,id) => {
    try{
        const response = await api.get('/image/'+name+'/'+id);
        console.log(response);
        return response;
      }
      catch (err) {
          console.log(err);
          return err;
      }
}