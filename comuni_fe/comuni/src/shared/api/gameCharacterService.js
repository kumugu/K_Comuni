import axios from '../config/axiosConfig';

export const createGameCharacter = async (gameChracter) => {
    try {
        const respone = await axios.post("http://localhost:8080/api/gameCharacters", gameChracter);
    } catch (error) {
        throw error;
    }
};
