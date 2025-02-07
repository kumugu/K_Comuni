"use client"

import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { getGameCharacter } from "../../../shared/api/gameCharacterService"

const ViewGameCharacter = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [character, setCharacter] = useState(null)

  useEffect(() => {
    const fetchGameCharacter = async () => {
      try {
        const data = await getGameCharacter(id)
        setCharacter(data)
      } catch (error) {
        console.error("캐릭터 정보를 불러오는데 실패했습니다.", error)
        alert("캐릭터 정보를 불러오는데 실패했습니다.")
        navigate("/lobby")
      }
    }

    fetchGameCharacter()
  }, [id, navigate])

  if (!character) {
    return <div>Loading...</div>
  }

  return (
    <div className="view-character">
      <h2>{character.gameCharacterName}</h2>
      <p>Hair Color: {character.hairColor}</p>
      <p>Hair Type: {character.hairType}</p>
      <p>Body Color: {character.bodyColor}</p>
      <p>Body Type: {character.bodyType}</p>
      <p>Leg Color: {character.legColor}</p>
      <p>Leg Type: {character.legType}</p>
      <p>Strength: {character.strength}</p>
      <p>Health: {character.health}</p>
      <p>Intelligence: {character.intelligence}</p>
      <p>Spirit: {character.spirit}</p>
      <p>Luck: {character.luck}</p>
      <button onClick={() => navigate("/lobby")}>Back to Lobby</button>
    </div>
  )
}

export default ViewGameCharacter

