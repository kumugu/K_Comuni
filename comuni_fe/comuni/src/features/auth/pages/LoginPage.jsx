import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { login } from '../../../shared/api/authService'

function LoginPage() {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(credentials);
      navigate('/lobby');  // lobby로 이동
    } catch (err) {
      setError('로그인에 실패했습니다. 다시 시도해 주세요.');
    }
  };

    return (
      <div className="login-page">
        <h2>로그인</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="아이디"
            value={credentials.username}
            onChange={handleInputChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="비밀번호"
            value={credentials.password}
            onChange={handleInputChange}
            required
          />
          <button type="submit">로그인</button>
        </form>

        {error && <p className="error">{error}</p>}
        <p>
          계정이 없으신가요? <a href="/register">회원가입</a>
        </p>
      </div>
    );
  }
  
  export default LoginPage;
  