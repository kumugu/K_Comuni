import { useNavigate } from "react-router-dom"
import "./LobbyPage.css"

const LobbyPage = () => {
  const navigate = useNavigate()

  return (
    <div className="lobby-page">
      <h1>Welcome to the Lobby</h1>
      <div className="button-container">
        <button onClick={() => navigate("/create-character")}>Create Character</button>
        <button onClick={() => navigate("/update-character")}>Update Character</button>
        <button onClick={() => navigate("/view-character")}>View Character</button>
      </div>
    </div>
  )
}

export default LobbyPage

