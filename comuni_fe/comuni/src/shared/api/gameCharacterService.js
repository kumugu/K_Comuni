import axios from '../config/axiosConfig';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8080/api/gameCharacters';

export const createGameCharacter = async (gameCharacterData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}`, gameCharacterData);
        return response.data;
    } catch (error) {
        console.error('Failed to create game character:', error);
        throw error;
    }
};

export const getGameCharacter = async (id) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error('Failed to get game character:', error);
        throw error;
    }
};

export const updateGameCharacter = async (id, gameCharacterData) => {
    try {
        const response = await axios.put(`${API_BASE_URL}/${id}`, gameCharacterData);
        return response.data;
    } catch (error) {
        console.error('Failed to update game character:', error);
        throw error;
    }
};