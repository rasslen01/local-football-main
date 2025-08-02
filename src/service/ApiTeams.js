import axiosClient from './AxiosClient';

const teamsApi = {
  getAll: () => axiosClient.get('/teams'),
  getById: (id) => axiosClient.get(`/teams/${id}`),
  add: (data) => axiosClient.post('/teams', data),
  update: (id, data) => axiosClient.put(`/teams/${id}`, data),
  delete: (id) => axiosClient.delete(`/teams/${id}`),
  addPlayer: (teamId, playerId) => axiosClient.post(`/teams/${teamId}/add-player`, { playerId }),
  removePlayer: (teamId, playerId) => axiosClient.post(`/teams/${teamId}/remove-player`, { playerId }),
};

export default teamsApi;

