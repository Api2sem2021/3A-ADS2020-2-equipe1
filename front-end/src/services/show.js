import api from './api';

export const showtab = async (name) => {
    try{
        const response = await api.get('/shape/'+name);
        console.log(response);
        return response;
      }
      catch (err) {
          console.log(err);
          return err;
      }
}