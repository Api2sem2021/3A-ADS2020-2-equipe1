import api from './api';

export const showtab = async (name,id) => {
    try{
        const response = await api.get('/shape/'+name+'/'+id);
        console.log(response);
        return response;
      }
      catch (err) {
          console.log(err);
          return err;
      }
}