import axiosClient from './AxiosClient';

const fieldsApi = {
  getAll: () => axiosClient.get('/fields'),
  getById: (id) => axiosClient.get(`/fields/${id}`),
  add: (data) => axiosClient.post('/fields', data),
  update: (id, data) => axiosClient.put(`/fields/${id}`, data),
  delete: (id) => axiosClient.delete(`/fields/${id}`),
};

export default fieldsApi;
