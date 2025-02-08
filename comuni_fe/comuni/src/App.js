import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Provider } from "react-redux"
import store from "./app/store"
import LandingPage from "./features/landing/pages/LandingPage"
import LoginPage from "./features/auth/pages/LoginPage"
import RegisterPage from "./features/auth/pages/RegisterPage"
import LobbyPage from "./pages/LobbyPage"
import CreateGameCharacter from "./features/gameCharacter/pages/CreateGameCharacter"

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/lobby" element={<LobbyPage />} />
          <Route path="/createGameCharacter" element={<CreateGameCharacter />} />
        </Routes>
      </Router>
    </Provider>
  )
}

export default App

