import api from './api';

export const file = async (name,id) => {
    try{
        const response = await api.get('/file/'+name+'/'+id);
        console.log(response);
        return response;
      }
      catch (err) {
          console.log(err);
          return err;
      }
}