import axios from 'axios';

export const getAllFiles = () => {
  return axios.get('http://localhost:3000/file/getAllFiles')
    .then(response => {
      return response.data;
    })
    .catch(error => {
      throw error;
    });
};


export const getFileByCategory = (categorie) => {
  return axios.get(`http://localhost:3000/file/getFileByCategory/${categorie}`)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      throw error;
    });
};