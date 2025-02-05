import React, { useState } from "react";
import '../styles/MainPage.css';
import LoginModal from './LoginModal'; // LoginModal 컴포넌트 임포트

export default function MainPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleLogin = (username, password) => {
    // 로그인 성공 시 호출
    console.log("Logged in with:", username, password);
    setIsLoggedIn(true);
    setShowLoginModal(false); // 로그인 후 모달 닫기
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-400 to-purple-500 flex flex-col">
      <header className="p-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-white">Comuni</h1>
        {!isLoggedIn && (
          <button className="btn-outline" onClick={() => setShowLoginModal(true)}>Login</button>
        )}
        {isLoggedIn && <button onClick={() => setIsLoggedIn(false)}>Logout</button>}
      </header>
      <main className="flex-grow flex items-center justify-center p-4">
        {isLoggedIn ? <LobbyScreen /> : <WelcomeScreen />}
      </main>
      <footer className="p-4 text-center text-white">© 2025 Comuni. All rights reserved.</footer>
      {showLoginModal && <LoginModal onClose={() => setShowLoginModal(false)} onLogin={handleLogin} />}
    </div>
  );
}

function WelcomeScreen() {
  return (
    <div className="text-center text-white">
      <h2 className="text-4xl font-bold mb-4">Welcome to Comuni</h2>
      <p className="text-xl mb-8">
        Explore diverse worlds, create unique characters, and connect with others in our immersive metaverse.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <FeatureCard icon="🌐" title="Multiple Worlds" description="From fantasy realms to futuristic cities" />
        <FeatureCard icon="👥" title="Social Interaction" description="Meet new friends and join communities" />
        <FeatureCard icon="🎮" title="Endless Adventures" description="Quests, games, and unique experiences await" />
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">{icon} {title}</h3>
      </div>
      <div className="card-content">
        <p>{description}</p>
      </div>
    </div>
  );
}

function LobbyScreen() {
  return (
    <div className="text-center text-white">
      <h2 className="text-4xl font-bold mb-8">Welcome to Comuni Lobby</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">🌐 Create Character</h3>
          </div>
          <div className="card-content">
            <button>Create New Character</button>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">👥 Select Character</h3>
          </div>
          <div className="card-content">
            <button>Choose Existing Character</button>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">🎮 Enter World</h3>
          </div>
          <div className="card-content">
            <button>Select World and Play</button>
          </div>
        </div>
      </div>
    </div>
  );
}