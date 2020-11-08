import api from './api';

export const saving = async (name,json) => {
    try{
        const response = await api.post('/shape/'+name, json);
        console.log(response);
        return response;
      }
      catch (err) {
          console.log(err);
          return err;
      }
}