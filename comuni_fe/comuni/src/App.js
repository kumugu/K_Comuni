import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import { Provider } from "react-redux";
import store from "./app/store";
import LandingPage from "./features/landing/pages/LandingPage";
import LoginPage from "./features/auth/pages/LoginPage";
import RegisterPage from "./features/auth/pages/RegisterPage";
import LobbyPage from "./pages/LobbyPage.tsx";
import CreateGameCharacter from "./features/gameCharacter/pages/CreateGameCharacter.tsx";
import EditGameCharacter from "./features/gameCharacter/pages/EditGameCharacter.tsx";
import DeleteGameCharacter from "./features/gameCharacter/pages/DeleteGameCharacter.tsx";
import SelectGameCharacter from "./features/gameCharacter/pages/SelectGameCharacter";

function App() {
  const [selectedGameCharacter, setSelectedGameCharacter] = useState(null);

  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/lobby" element={<LobbyPage selectedGameCharacter={selectedGameCharacter} />} />
          <Route path="/createGameCharacter" element={<CreateGameCharacter />} />
          <Route path="/editGameCharacter" element={<EditGameCharacter />} />
          <Route path="/deleteGameCharacter" element={<DeleteGameCharacter />} />
          <Route path="/selectGameCharacter" element={<SelectGameCharacter setSelectedGameCharacter={setSelectedGameCharacter} />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
