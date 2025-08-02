import axiosClient from './AxiosClient';

const matchesApi = {
  getAll: () => axiosClient.get('/matches'),
  getById: (id) => axiosClient.get(`/matches/${id}`),
  add: (data) => axiosClient.post('/matches', data),
  update: (id, data) => axiosClient.put(`/matches/${id}`, data),
  delete: (id) => axiosClient.delete(`/matches/${id}`),

  join: (id, playerId) => axiosClient.post(`/matches/${id}/join`, { playerId }),
  leave: (id, playerId) => axiosClient.post(`/matches/${id}/leave`, { playerId }),
  setResult: (id, resultData) => axiosClient.post(`/matches/${id}/result`, resultData),
};

export default matchesApi;
