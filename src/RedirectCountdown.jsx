import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./RedirectCountdown.css";

const RedirectCountdown = () => {
  const [countdown, setCountdown] = useState(30);
  const navigate = useNavigate();

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      navigate("/registration");
    }
  }, [countdown, navigate]);

  return (
    <div className="countdown-container">
      <h1>ĐĂNG KÝ THÔNG TIN POP-MART</h1>
      <h2>ĐĂNG KÝ SỐ THỨ TỰ MUA HOT ITEMS</h2>

      <div className="location-info">
        <p>POP MART BA NA HILL</p>
        <p>07 - 13.07.2025</p>
      </div>

      <div className="divider"></div>

      <div className="redirect-message">
        <p>Bạn đang được chuyển đến trang đăng ký.</p>
        <p>You are being redirected to the registration page.</p>
      </div>

      <div className="waiting-message">
        <p>Vui lòng đợi trong giây lát...</p>
        <p>Please wait a moment...</p>
      </div>

      <div className="countdown-number">{countdown}</div>
    </div>
  );
};

export default RedirectCountdown;
