import axios from '../config/axiosConfig';

export const createGameCharacter = async (gameChracter) => {
    try {
        const response = await axios.post("http://localhost:8080/api/gameCharacters", gameChracter, {
            headers: {
                "Content-Type": "application/json"
            }
        });
        return response.data; 
    } catch (error) {
        throw error;
    }
};

export const getGameCharacter = async (id) => {
    try {
        const response = await axios.get(`http://localhost:8080/api/gameCharacters/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const updateGameCharacter = async (id, gameChracter) => {
    try {
        const response = await axios.put(`http://localhost:8080/api/gameCharacters/${id}`, gameChracter, {
            headers: {
                "Content-Type": "application/json" 
            }
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const deleteGameCharacter = async (id) => {
    try {
        const response = await axios.delete(`http://localhost:8080/api/gameCharacters/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getAllGameCharacters = async () => {
    try {
        const response = await axios.get("http://localhost:8080/api/gameCharacters/all");
        return response.data;
    } catch (error) {
        throw error;
    }
};

