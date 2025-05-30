import axios from 'axios';

export const getTasksRequest = async () => {
    return await axios.get('http://localhost:4000/tasks');
  };

export const createTaskRequest = async (tasks) => {
    await axios.post('http://localhost:4000/tasks', tasks);
};

export const deleteTaskRequest = async (id) => {
    await axios.delete(`http://localhost:4000/tasks/${id}`);
}

export const getTaskRequest = async (id) => {
    await axios.get(`http://localhost:4000/api/tasks/${id}`);
};


export const updateTaskRequest = async (id, newFields) => {
    await axios.put(`http://localhost:4000/tasks/${id}`, newFields);
};


