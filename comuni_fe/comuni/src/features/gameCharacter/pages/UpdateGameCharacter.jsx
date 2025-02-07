"use client"

import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { getGameCharacter, updateGameCharacter } from "../../../shared/api/gameCharacterService"

const UpdateGameCharacter = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    gameCharacterName: "",
    hairColor: "",
    hairType: "",
    bodyColor: "",
    bodyType: "",
    legColor: "",
    legType: "",
    strength: 0,
    health: 0,
    intelligence: 0,
    spirit: 0,
    luck: 0,
  })

  useEffect(() => {
    const fetchGameCharacter = async () => {
      try {
        const data = await getGameCharacter(id)
        setFormData(data)
      } catch (error) {
        console.error("캐릭터 정보를 불러오는데 실패했습니다.", error)
        alert("캐릭터 정보를 불러오는데 실패했습니다.")
        navigate("/lobby")
      }
    }

    fetchGameCharacter()
  }, [id, navigate])

  const handleChange = (e) => {
    const value = e.target.type === "number" ? Number(e.target.value) : e.target.value
    setFormData({
      ...formData,
      [e.target.name]: value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await updateGameCharacter(id, formData)
      alert("캐릭터가 성공적으로 수정되었습니다.")
      navigate("/lobby")
    } catch (error) {
      console.error("캐릭터 수정에 실패", error)
      alert("캐릭터 수정에 실패했습니다.")
    }
  }

  return (
    <div className="update-character">
      <h2>Update Character</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="gameCharacterName"
          value={formData.gameCharacterName}
          onChange={handleChange}
          placeholder="Character Name"
          required
        />
        {/* Add other input fields here */}
        <button type="submit">Update Character</button>
      </form>
    </div>
  )
}

export default UpdateGameCharacter

