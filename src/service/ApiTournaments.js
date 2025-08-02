import axiosClient from './AxiosClient';

const tournamentsApi = {
  getAll: () => axiosClient.get('/tournaments'),
  getById: (id) => axiosClient.get(`/tournaments/${id}`),
  add: (data) => axiosClient.post('/tournaments', data),
  update: (id, data) => axiosClient.put(`/tournaments/${id}`, data),
  delete: (id) => axiosClient.delete(`/tournaments/${id}`),

  join: (id, teamId) => axiosClient.post(`/tournaments/${id}/join`, { teamId }),
  leave: (id, teamId) => axiosClient.post(`/tournaments/${id}/leave`, { teamId }),
  schedule: (id, scheduleData) => axiosClient.post(`/tournaments/${id}/schedule`, scheduleData),
  setResult: (id, resultData) => axiosClient.post(`/tournaments/${id}/result`, resultData),
};

export default tournamentsApi;
