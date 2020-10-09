import api from './api';

export const save = async (host,port,database,username,password) => {
    try{
        const response = await api.post('/shpSave', {host,port,database,username,password});
        console.log(response);
        return response;
      }
      catch (err) {
          console.log(err);
          return err;
      }
}