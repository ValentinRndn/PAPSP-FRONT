import axios from 'axios';

export const showNumbers = () => {
  return axios.get('http://localhost:5000/api/statistics/getAllStats')
    .then(response => {
      return response.data;
    })
    .catch(error => {
      throw error;
    });
};


export const saveStatistiques = (statData) => {
    return axios.put('http://localhost:5000/api/statistics/1', statData)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            throw error;
        });
};
