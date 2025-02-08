import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getGameCharacter, updateGameCharacter, getAllGameCharacters } from "../../../shared/api/gameCharacterService";
import "./EditGameCharacter.css";

const EditGameCharacter = () => {
  const [characterId, setCharacterId] = useState("");
  const [gameCharacter, setGameCharacter] = useState({
    gameCharacterName: "",
    hairColor: "",
    hairType: "",
    bodyColor: "",
    bodyType: "",
    legColor: "",
    legType: "",
    strength: "",
    health: "",
    intelligence: "",
    spirit: "",
    luck: ""
  });
  const [characters, setCharacters] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchAllCharacters = async () => {
      try {
        const charactersData = await getAllGameCharacters();
        setCharacters(charactersData);
      } catch (error) {
        console.error("캐릭터 목록 불러오기 실패", error);
      }
    };

    fetchAllCharacters();
  }, []);

  useEffect(() => {
    if (characterId) {
      const fetchGameCharacter = async () => {
        try {
          const gameCharacterData = await getGameCharacter(characterId);
          setGameCharacter(gameCharacterData);
        } catch (error) {
          console.error("캐릭터 불러오기 실패", error);
        }
      };

      fetchGameCharacter();
    }
  }, [characterId]);

  const handleIdChange = (e) => {
    setCharacterId(e.target.value);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setGameCharacter({
      ...gameCharacter,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateGameCharacter(characterId, gameCharacter);
      navigate("/lobby");
    } catch (error) {
      console.error("캐릭터 수정 실패", error);
    }
  };

  return (
    <div>
      <label>
        Select Character:
        <select value={characterId} onChange={handleIdChange}>
          <option value="">Select a character</option>
          {characters.map((character) => (
            <option key={character.id} value={character.id}>
              {character.gameCharacterName}
            </option>
          ))}
        </select>
      </label>
      {characterId && (
        <form onSubmit={handleSubmit} className="edit-game-character">
          <label>
            Name:
            <input type="text" name="gameCharacterName" value={gameCharacter.gameCharacterName} onChange={handleChange} />
          </label>
          <label>
            Hair Color:
            <input type="text" name="hairColor" value={gameCharacter.hairColor} onChange={handleChange} />
          </label>
          <label>
            Hair Type:
            <input type="text" name="hairType" value={gameCharacter.hairType} onChange={handleChange} />
          </label>
          <label>
            Body Color:
            <input type="text" name="bodyColor" value={gameCharacter.bodyColor} onChange={handleChange} />
          </label>
          <label>
            Body Type:
            <input type="text" name="bodyType" value={gameCharacter.bodyType} onChange={handleChange} />
          </label>
          <label>
            Leg Color:
            <input type="text" name="legColor" value={gameCharacter.legColor} onChange={handleChange} />
          </label>
          <label>
            Leg Type:
            <input type="text" name="legType" value={gameCharacter.legType} onChange={handleChange} />
          </label>
          <label>
            Strength:
            <input type="number" name="strength" value={gameCharacter.strength} onChange={handleChange} />
          </label>
          <label>
            Health:
            <input type="number" name="health" value={gameCharacter.health} onChange={handleChange} />
          </label>
          <label>
            Intelligence:
            <input type="number" name="intelligence" value={gameCharacter.intelligence} onChange={handleChange} />
          </label>
          <label>
            Spirit:
            <input type="number" name="spirit" value={gameCharacter.spirit} onChange={handleChange} />
          </label>
          <label>
            Luck:
            <input type="number" name="luck" value={gameCharacter.luck} onChange={handleChange} />
          </label>
          <button type="submit">Update Character</button>
        </form>
      )}
    </div>
  );
};

export default EditGameCharacter;
