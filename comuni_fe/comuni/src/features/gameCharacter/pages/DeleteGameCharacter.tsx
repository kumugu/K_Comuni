import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { deleteGameCharacter, getAllGameCharacters } from "../../../shared/api/gameCharacterService.js";
import "./DeleteGameCharacter.css";


const DeleteGameCharacter: React.FC = () => {
    const [gameCharacters, setGameCharacters] = useState<any[]>([]);
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

    const handleDelete = async (id: number) => {
        try {
            // 삭제 API 호출
            await deleteGameCharacter(id);

            // 삭제 후 캐릭터 목록 갱신
            setGameCharacters(gameCharacters.filter(character => character.id ! == id));
        } catch (error) {
            console.error("캐릭터 삭제 실패", error);
        }
    };

    return (
        <div>
            <h1>Delete Game Character</h1>
            <ul>
                {gameCharacters.map((character) => (
                    <li key={character.id}>
                        {character.gameCharacterName}
                        <button onClick={() => handleDelete(character.id)}>삭제</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DeleteGameCharacter;