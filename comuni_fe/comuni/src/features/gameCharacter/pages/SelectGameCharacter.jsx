import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAllGameCharacters } from "../../../shared/api/gameCharacterService";
import "./SelectGameCharacter.css";

const SelectGameCharacter = ({ setSelectedGameCharacter }) => {
    const [gameCharacters, setGameCharacters] = useState([]);
    const navigate = useNavigate(); 

    useEffect(() => {
        const fetchAllCharacters = async () => {
            try {
                const gameCharacterData = await getAllGameCharacters();
                setGameCharacters(gameCharacterData);
            } catch (error) {
                console.error("캐릭터 목록 불러오기 실패", error);
            }
        };

        fetchAllCharacters();
    }, []);

    const handleGameCharacterSelect = (gameCharacter) => {
        setSelectedGameCharacter(gameCharacter); // 선택한 캐릭터를 설정
        navigate("/lobby");
    };

    return (
        <div className="select-game-character">
            <h1>Select Character</h1>
            <ul>
                {gameCharacters.map((gameCharacter) => (
                    <li key={gameCharacter.id} onClick={() => handleGameCharacterSelect(gameCharacter)}>
                        {gameCharacter.gameCharacterName}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SelectGameCharacter;
