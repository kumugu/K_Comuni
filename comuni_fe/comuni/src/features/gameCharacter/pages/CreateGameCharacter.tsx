import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createGameCharacter } from "../../../shared/api/gameCharacterService";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./CreateGameCharacter.css";
import PreviewGameCharacter from "../components/PreviewGameCharacter.tsx";
import Button from "../components/ui/button.tsx";
import Input from "../components/ui/input.tsx";
import Label from "../components/ui/label.tsx";

interface GameCharacter {
  gameCharacterName: string;
  hairColor: string;
  hairType: string;
  bodyColor: string;
  bodyType: string;
  legColor: string;
  legType: string;
  strength: number;
  health: number;
  intelligence: number;
  spirit: number;
  luck: number;
}

const colorOption = [
  "#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#F1C40F",
  "#9B59B6", "#2ECC71", "#E74C3C", "#3498DB", "#1ABC9C",
  "#F39C12", "#D35400", "#7F8C8D", "#BDC3C7", "#34495E"
];

const CreateGameCharacter: React.FC = () => {
  const [gameCharacter, setGameCharacter] = useState<GameCharacter>({
    gameCharacterName: "",
    hairColor: "#ab7272",
    hairType: "normal",
    bodyColor: "#51ad56",
    bodyType: "normal",
    legColor: "#7d98c9",
    legType: "normal",
    strength: 50,
    health: 50,
    intelligence: 50,
    spirit: 50,
    luck: 50,
  });

  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setGameCharacter((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleColorSelect = (color: string, part: keyof GameCharacter) => {
    setGameCharacter((prev) => ({
      ...prev,
      [part]: color,
    }));
  };

  const handleStatChange = (stat: string, increment: boolean) => {
    setGameCharacter((prev) => {
      const newValue = increment
        ? Math.min(prev[stat] + 10, 100)
        : Math.max(prev[stat] - 10, 0)
      return {
        ...prev,
        [stat]: newValue,
      };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!gameCharacter.gameCharacterName) {
      toast.error("캐릭터 이름을 입력하세요.");
      return;
    }

    setIsLoading(true);
    try {
      await createGameCharacter(gameCharacter);
      toast.success("캐릭터가 성공적으로 생성되었습니다!");
      navigate("/lobby");
    } catch (error) {
      toast.error("캐릭터 생성 중 오류가 발생했습니다.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Create Your Game Character</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="w-full h-[300px] md:h-[600px]">
          <PreviewGameCharacter
            hairColor={gameCharacter.hairColor}
            hairType={gameCharacter.hairType}
            bodyColor={gameCharacter.bodyColor}
            bodyType={gameCharacter.bodyType}
            legColor={gameCharacter.legColor}
            legType={gameCharacter.legType}
          />
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="gameCharacterName">Character Name</Label>
            <Input
              type="text"
              id="gameCharacterName"
              name="gameCharacterName"
              value={gameCharacter.gameCharacterName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex gap-2">
            {colorOption.map((color) => (
              <button
                key={color}
                type="button"
                style={{ backgroundColor: color }}
                className="color-button"
                onClick={() => handleColorSelect(color, "hairColor")}
              />
            ))}
          </div>
          <div>
            <Label htmlFor="hairType">Hair Type</Label>
            <select
              id="hairType"
              name="hairType"
              value={gameCharacter.hairType}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            >
              <option value="short">Short</option>
              <option value="normal">Normal</option>
              <option value="long">Long</option>
            </select>
          </div>
          <div>
            <Label htmlFor="bodyColor">Body Color</Label>
            <div className="flex gap-2">
              {colorOption.map((color) => (
                <button
                  key={color}
                  type="button"
                  style={{ backgroundColor: color }}
                  className="color-button"
                  onClick={() => handleColorSelect(color, "bodyColor")}
                />
              ))}
            </div>
          </div>
          <div>
            <Label htmlFor="bodyType">Body Type</Label>
            <select
              id="bodyType"
              name="bodyType"
              value={gameCharacter.bodyType}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            >
              <option value="slim">Slim</option>
              <option value="normal">Normal</option>
              <option value="muscular">Muscular</option>
            </select>
          </div>
          <div>
            <Label htmlFor="legColor">Leg Color</Label>
            <div className="flex gap-2">
              {colorOption.map((color) => (
                <button
                  key={color}
                  type="button"
                  style={{ backgroundColor: color }}
                  className="color-button"
                  onClick={() => handleColorSelect(color, "legColor")}
                />
              ))}
            </div>
          </div>
          <div>
            <Label htmlFor="legType">Leg Type</Label>
            <select
              id="legType"
              name="legType"
              value={gameCharacter.legType}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            >
              <option value="thin">Thin</option>
              <option value="normal">Normal</option>
              <option value="muscular">Muscular</option>
            </select>
          </div>
          
          {(["strength", "health", "intelligence", "spirit", "luck"] as const).map((stat) => (
            <div key={stat}>
              <Label htmlFor={`stat-${stat}`}>{stat.charAt(0).toUpperCase() + stat.slice(1)}</Label>
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  onClick={() => handleStatChange(stat, false)}
                  className="p-2 bg-gray-300 rounded"
                >
                  -
                </button>
                <span>{gameCharacter[stat]}</span>
                <button
                  type="button"
                  onClick={() => handleStatChange(stat, true)}
                  className="p-2 bg-gray-300 rounded"
                >
                  +
                </button>
              </div>
            </div>
          ))}
          <Button type="submit" disabled={isLoading}>
            {isLoading ? "Creating..." : "Create Character"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default CreateGameCharacter;
