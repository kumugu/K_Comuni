import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { createGameCharacter } from "../../../shared/api/gameCharacterService"
import "./CreateGameCharacter.css"

const CreateGameCharacter = () => {
  const [formData, setFormData] = useState({
    gameCharacterName: "",
    hairColor: "",
    hairType: "",
    bodyColor: "",
    bodyType: "",
    legColor: "",
    legType: "",
    strength: 7,
    health: 10,
    intelligence: 8,
    spirit: 6,
    luck: 5,
  })

  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value, type } = e.target
    const updatedValue = type === "number" ? Math.max(1, Math.min(100, Number(value))) : value
    setFormData((prev) => ({ ...prev, [name]: updatedValue }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const userId = localStorage.getItem("userId")
      await createGameCharacter(userId, formData)
      alert("캐릭터가 성공적으로 생성되었습니다.")
      navigate("/lobby")
    } catch (error) {
      console.error("캐릭터 생성에 실패", error)
      alert("캐릭터 생성에 실패했습니다.")
    }
  }

  return (
    <div className="create-character">
      <h2>Create Character</h2>
      <form onSubmit={handleSubmit} className="character-form">
        <div className="form-group">
          <label htmlFor="gameCharacterName">Character Name:</label>
          <input
            type="text"
            id="gameCharacterName"
            name="gameCharacterName"
            value={formData.gameCharacterName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="hairColor">Hair Color:</label>
          <input type="text" id="hairColor" name="hairColor" value={formData.hairColor} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="hairType">Hair Type:</label>
          <input type="text" id="hairType" name="hairType" value={formData.hairType} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="bodyColor">Body Color:</label>
          <input type="text" id="bodyColor" name="bodyColor" value={formData.bodyColor} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="bodyType">Body Type:</label>
          <input type="text" id="bodyType" name="bodyType" value={formData.bodyType} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="legColor">Leg Color:</label>
          <input type="text" id="legColor" name="legColor" value={formData.legColor} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="legType">Leg Type:</label>
          <input type="text" id="legType" name="legType" value={formData.legType} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="strength">Strength:</label>
          <input
            type="number"
            id="strength"
            name="strength"
            value={formData.strength}
            onChange={handleChange}
            min="1"
            max="100"
          />
        </div>
        <div className="form-group">
          <label htmlFor="health">Health:</label>
          <input
            type="number"
            id="health"
            name="health"
            value={formData.health}
            onChange={handleChange}
            min="1"
            max="100"
          />
        </div>
        <div className="form-group">
          <label htmlFor="intelligence">Intelligence:</label>
          <input
            type="number"
            id="intelligence"
            name="intelligence"
            value={formData.intelligence}
            onChange={handleChange}
            min="1"
            max="100"
          />
        </div>
        <div className="form-group">
          <label htmlFor="spirit">Spirit:</label>
          <input
            type="number"
            id="spirit"
            name="spirit"
            value={formData.spirit}
            onChange={handleChange}
            min="1"
            max="100"
          />
        </div>
        <div className="form-group">
          <label htmlFor="luck">Luck:</label>
          <input type="number" id="luck" name="luck" value={formData.luck} onChange={handleChange} min="1" max="100" />
        </div>
        <button type="submit" className="submit-btn">
          Create Character
        </button>
      </form>
    </div>
  )
}

export default CreateGameCharacter