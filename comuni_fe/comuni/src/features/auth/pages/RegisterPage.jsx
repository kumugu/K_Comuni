import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../../../shared/api/authService"

function RegisterPage() {
    const [userData, setUserData] = useState({ username: '', password: '', email: '' });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await register(userData);
            navigate("/login"); // 로그인 페이지로 이동
        } catch (err) {
            setError("회원가입에 실패했습니다. 다시 시도해주세요");
        }
    };

    return (
        <div className="register-page">
            <h2>회원가입</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="username"
                    placeholder="아이디"
                    value={userData.username}
                    onChange={handleInputChange}
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="비밀번호"
                    value={userData.password}
                    onChange={handleInputChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="이메일"
                    value={userData.email}
                    onChange={handleInputChange}
                    required
                />
                <button type="submit">회원가입</button>
            </form>
            {error && <p className="error">{"error"}</p>}
            <p>
                이미 계정이 있으신가요? <a href="login">로그인하기</a>
            </p>
        </div>
    );
}

export default RegisterPage;