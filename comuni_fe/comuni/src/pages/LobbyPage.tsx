import React from "react";
import { useNavigate } from "react-router-dom";
import PreviewGameCharacter from "../features/gameCharacter/components/PreviewGameCharacter.tsx";
import "./LobbyPage.css";

const LobbyPage = ({ selectedGameCharacter }) => {
  const navigate = useNavigate();

  return (
    <div className="lobby-page">
      <h1>Welcome to the Lobby</h1>

      <div className="button-container">
        <button onClick={() => navigate("/createGameCharacter")}>Create Character</button>
        <button onClick={() => navigate("/editGameCharacter")}>Edit Character</button>
        <button onClick={() => navigate("/deleteGameCharacter")}>Delete Character</button>
        <button onClick={() => navigate("/selectGameCharacter")}>Select Character</button>
      </div>

      {selectedGameCharacter ? (
        <div className="character-info">
          <h2>선택한 캐릭터: {selectedGameCharacter.gameCharacterName}</h2>
          <div className="w-full h-[300px] md:h-[600px]">
            <PreviewGameCharacter
              hairColor={selectedGameCharacter.hairColor}
              hairType={selectedGameCharacter.hairType}
              bodyColor={selectedGameCharacter.bodyColor}
              bodyType={selectedGameCharacter.bodyType}
              legColor={selectedGameCharacter.legColor}
              legType={selectedGameCharacter.legType}
            />
          </div>

        {/* 월드 입장 버튼 */}
        <div className="flex justify-center mt-4">
          <button 
            onClick={() => navigate("/world")}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            월드 입장
          </button>
        </div>

        </div>
      ) : (
        <p>No character selected</p>
      )}
    </div>
  );
};

export default LobbyPage;
