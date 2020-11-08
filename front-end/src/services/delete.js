
import api from './api';

export const del = async (name,id) => {
    try{
        const response = await api.delete('/shape/'+name+'/'+id);
        console.log(response);
        return response;
      }
      catch (err) {
          console.log(err);
          return err;
      }
}

