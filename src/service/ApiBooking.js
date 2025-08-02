import axiosClient from './AxiosClient';

const bookingsApi = {
  getUserBookings: () => axiosClient.get('/bookings'),
  getAll: () => axiosClient.get('/bookings/all'),
  getById: (id) => axiosClient.get(`/bookings/${id}`),
  add: (data) => axiosClient.post('/bookings', data),
  delete: (id) => axiosClient.delete(`/bookings/${id}`),
};

export default bookingsApi;
