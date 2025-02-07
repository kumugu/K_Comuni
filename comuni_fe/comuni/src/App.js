import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Provider } from "react-redux"
import store from "./app/store"
import LandingPage from "./features/landing/pages/LandingPage"
import LoginPage from "./features/auth/pages/LoginPage"
import RegisterPage from "./features/auth/pages/RegisterPage"
import LobbyPage from "./pages/LobbyPage"
import CreateGameCharacter from "./features/gameCharacter/pages/CreateGameCharacter"
import UpdateGameCharacter from "./features/gameCharacter/pages/UpdateGameCharacter"
import ViewGameCharacter from "./features/gameCharacter/pages/ViewGameCharacter"

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/lobby" element={<LobbyPage />} />
          <Route path="/create-character" element={<CreateGameCharacter />} />
          <Route path="/update-character/:id" element={<UpdateGameCharacter />} />
          <Route path="/view-character/:id" element={<ViewGameCharacter />} />
        </Routes>
      </Router>
    </Provider>
  )
}

export default App

