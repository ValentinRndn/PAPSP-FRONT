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

    export const showLastBlog = () => {
        return axios.get('http://localhost:3000/blog/getLastBlog')
            .then(response => {
            return response.data;
            })
            .catch(error => {
            throw error;
            });
        }


        export const createBlog = async (formData) => {
          try {
            const response = await axios.post('http://localhost:3000/blog/createBlog', formData, {
              headers: {
                'Content-Type': 'multipart/form-data'
              }
            });
            return response.data;
          } catch (error) {
            console.error('Error creating blog:', error);
            throw error;
          }
        };