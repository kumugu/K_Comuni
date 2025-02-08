import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createGameCharacter } from "../../../shared/api/gameCharacterService";
import "./CreateGameCharacter.css";

const CreateGameCharacter = () => {
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
    luck: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setGameCharacter({
      ...gameCharacter,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(gameCharacter); // 입력 값을 콘솔에 출력하여 확인
    try {
      await createGameCharacter(gameCharacter);
      navigate("/lobby");
    } catch (error) {
      console.error("캐릭터 생성에 실패 했습니다.", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="create-game-character">
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
      <button type="submit">Create Character</button>
    </form>
  );
};

export default CreateGameCharacter;
