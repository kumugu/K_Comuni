import { useNavigate } from "react-router-dom";
import LoadingAnimation from "../components/loadingAnimation";

function LandingPage() {
    const navigate = useNavigate();

    const handleStart = () => {
        navigate('/login');
    };

    return (
        <div className="landing-page">
            <LoadingAnimation />
            <button onClick={handleStart} className="start-button">Start</button>
        </div>
    );
}

export default LandingPage;