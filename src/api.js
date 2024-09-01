import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getStudents = async () => {
  try {
    const response = await api.get('/students');
    return response.data;
  } catch (error) {
    console.error('Error fetching students:', error);
    throw error;
  }
};

export const addStudent = async (student) => {
  try {
    const response = await api.post('/students', student);
    return response.data;
  } catch (error) {
    console.error('Error adding student:', error);
    throw error;
  }
};

export const updateStudent = async (id, updatedData) => {
  try {
    const response = await api.put(`/students/${id}`, updatedData);
    return response.data;
  } catch (error) {
    console.error('Error updating student:', error);
    throw error;
  }
};
export const deleteStudent = async (id) => {
  try {
      const response = await api.delete(`/students/${id}`);
      return response.data;
  } catch (error) {
      console.error('Error deleting student:', error);
      throw error;
  }
};

