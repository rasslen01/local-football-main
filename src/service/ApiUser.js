import axios from 'axios';
const apiUrl ='http://localhost:5000/users';

export async function getallUsers() {
  return await axios.get(`${apiUrl}/getallUsers`);
}

 export async function deleteallUsers() {
  return await axios.delete(`${apiUrl}/deleteallUsers`);   
  }
  export async function getOrderAllUsersByAge() {
  return await axios.get(`${apiUrl}/getOrderAllUsersByAge`);
  }
  export async function deleteUser(id) {
  return await axios.delete(`${apiUrl}/deleteUser/${id}`);
  }
  export async function addUser(userData) {
  return await axios.post(`${apiUrl}/addClient`, userData);
  }
  export async function updateUser(id, userData) {
    return await axios.put(`${apiUrl}/updateUser/${id}`, userData);
  }