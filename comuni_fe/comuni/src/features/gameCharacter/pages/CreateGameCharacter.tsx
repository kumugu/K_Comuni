import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createGameCharacter } from "../../../shared/api/gameCharacterService";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./CreateGameCharacter.css";
import PreviewGameCharacter from "../components/PreviewGameCharacter.tsx";
import Button from "../components/ui/button.tsx";
import Input from "../components/ui/input.tsx";
import Label from "../components/ui/label.tsx";
import Slider from "../components/ui/slider.tsx";

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

const CreateGameCharacter: React.FC = () => {
  const [gameCharacter, setGameCharacter] = useState<GameCharacter>({
    gameCharacterName: "",
    hairColor: "#000000",
    hairType: "short",
    bodyColor: "#ffffff",
    bodyType: "normal",
    legColor: "#000000",
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

  const handleSliderChange = (stat: keyof GameCharacter, value: number) => {
    setGameCharacter((prev) => ({
      ...prev,
      [stat]: value,
    }));
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
          <div>
            <Label htmlFor="hairColor">Hair Color</Label>
            <Input
              type="color"
              id="hairColor"
              name="hairColor"
              value={gameCharacter.hairColor}
              onChange={handleChange}
            />
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
              <option value="long">Long</option>
              <option value="curly">Curly</option>
            </select>
          </div>
          <div>
            <Label htmlFor="bodyColor">Body Color</Label>
            <Input
              type="color"
              id="bodyColor"
              name="bodyColor"
              value={gameCharacter.bodyColor}
              onChange={handleChange}
            />
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
            <Input type="color" id="legColor" name="legColor" value={gameCharacter.legColor} onChange={handleChange} />
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
              <option value="short">Short</option>
              <option value="normal">Normal</option>
              <option value="long">Long</option>
            </select>
          </div>
          {(["strength", "health", "intelligence", "spirit", "luck"] as const).map((stat) => (
            <div key={stat}>
              <Label htmlFor={`slider-${stat}`}>{stat.charAt(0).toUpperCase() + stat.slice(1)}</Label>
              <Slider
                id={`slider-${stat}`}
                min={0}
                max={100}
                step={1}
                defaultValue={gameCharacter[stat]}
                onChange={(value) => handleSliderChange(stat, value)}
              />
              <span className="text-sm">{gameCharacter[stat]}</span>
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

