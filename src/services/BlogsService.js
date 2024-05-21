import axios from 'axios';

export const showAllBlogs = () => {
  return axios.get('http://localhost:3000/blog/getAllBlogs')
    .then(response => {
      return response.data;
    })
    .catch(error => {
      throw error;
    });
};


export const showBlog = (id) => {
    return axios.get(`http://localhost:3000/blog/getBlog/${id}`)
        .then(response => {
        return response.data;
        })
        .catch(error => {
        throw error;
        });
    };