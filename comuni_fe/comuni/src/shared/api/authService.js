import axios from "../config/axiosConfig"

export const register = async (userData) => {
    const response = await axios.post('http://localhost:8080/api/users/register', userData);
    return response.data;
};

export const login = async (userData) => {
    const response = await axios.post('http://localhost:8080/api/users/login', userData);
    return response.data;
};