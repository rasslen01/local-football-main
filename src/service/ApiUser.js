import axiosClient from './AxiosClient';

const usersApi = {
  getAll: () => axiosClient.get('/users/getallUsers'),
  deleteAll: () => axiosClient.delete('/users/deleteallUsers'),
  getOrderedByAge: () => axiosClient.get('/users/getOrderAllUsersByAge'),
  deleteById: (id) => axiosClient.delete(`/users/deleteUser/${id}`),
  add: (data) => axiosClient.post('/users/addClient', data),
  update: (id, data) => axiosClient.put(`/users/updateUser/${id}`, data),
  addWithImage: (formData) =>
    axiosClient.post('/users/addUserWithImage', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    }),
};

export default usersApi;
