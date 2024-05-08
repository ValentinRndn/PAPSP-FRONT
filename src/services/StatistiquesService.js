import axios from 'axios';

export const showNumbers = () => {
  return axios.get('http://localhost:3000/statistique/getAllStatistiques')
    .then(response => {
      return response.data;
    })
    .catch(error => {
      throw error;
    });
};


export const saveStatistiques = (statData) => {
    return axios.put('http://localhost:3000/statistique/updateStatistique/1', statData)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            throw error;
        });
};
