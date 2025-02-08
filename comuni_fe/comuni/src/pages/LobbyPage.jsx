import { useNavigate } from "react-router-dom";
import "./LobbyPage.css";

const LobbyPage = ({ selectedGameCharacter }) => {
  const navigate = useNavigate();

  return (
    <div className="lobby-page">
      <h1>Welcome to the Lobby</h1>
      <div className="button-container">
        <button onClick={() => navigate("/createGameCharacter")}>Create Character</button>
        <button onClick={() => navigate("/editGameCharacter")}>Edit Character</button>
        <button onClick={() => navigate("/selectGameCharacter")}>Select Character</button>
      </div>

      {selectedGameCharacter ? (
        <div>
          <h2>{selectedGameCharacter.gameCharacterName}</h2>
          <p>Hair Color: {selectedGameCharacter.hairColor}</p>
          <p>Hair Type: {selectedGameCharacter.hairType}</p>
          <p>Body Color: {selectedGameCharacter.bodyColor}</p>
          <p>Body Type: {selectedGameCharacter.bodyType}</p>
          <p>Leg Color: {selectedGameCharacter.legColor}</p>
          <p>Leg Type: {selectedGameCharacter.legType}</p>
          <p>Strength: {selectedGameCharacter.strength}</p>
          <p>Health: {selectedGameCharacter.health}</p>
          <p>Intelligence: {selectedGameCharacter.intelligence}</p>
          <p>Spirit: {selectedGameCharacter.spirit}</p>
          <p>Luck: {selectedGameCharacter.luck}</p>
        </div>
      ) : (
        <p>No character selected</p>
      )}
    </div>
  );
};

export default LobbyPage;
