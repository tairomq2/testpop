import { useState } from "react";
import "./RegistrationForm.css";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    salesDate: "",
    session: "",
    fullName: "",
    dateOfBirth: "",
    phoneNumber: "",
    email: "",
    idCard: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [orderNumber, setOrderNumber] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const randomOrder = Math.floor(Math.random() * 100) + 1;
    setOrderNumber(randomOrder);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="registration-wrapper">
        <div className="registration-container confirmation">
          <div className="confirmation-header">
            <h1>POP MART</h1>
          </div>
          <h2 className="confirmation-title">ĐĂNG KÝ THÀNH CÔNG</h2>
          <div className="confirmation-details">
            <p data-value={formData.salesDate}>Sales date (Ngày bán hàng):</p>
            <p data-value={formData.session}>Session (Phiên):</p>
            <p data-value={`#${orderNumber}`}>Số thứ tự (Numerical order):</p>
            <p data-value={formData.fullName}>Full name (Họ tên):</p>
            <p data-value={formData.dateOfBirth}>Date of birth (Ngày sinh):</p>
            <p data-value={formData.phoneNumber}>
              Phone number (Số điện thoại):
            </p>
            <p data-value={formData.email}>Email:</p>
            <p data-value={formData.idCard}>
              ID Card/Passport (CCCD/Hộ chiếu):
            </p>
          </div>
          <div className="qr-code-placeholder">
            <div className="qr-code">QR Code</div>
            <p className="qr-code-text">Tải mã QR</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="registration-wrapper">
      <div className="registration-container">
        <div className="registration-content">
          <h1>ĐĂNG KÝ THÔNG TIN POP-MART</h1>
          <h2>REGISTRATION INFORMATION</h2>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>
                Sales date (Ngày mua hàng):
                <input
                  type="date"
                  name="salesDate"
                  value={formData.salesDate}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>

            <div className="form-group">
              <label>
                Session (Phiên):
                <select
                  name="session"
                  value={formData.session}
                  onChange={handleChange}
                  required
                >
                  <option value="">-- Chọn phiên --</option>
                  <option value="10:00 - 12:00">10:00 - 12:00</option>
                  <option value="12:00 - 14:00">14:00 - 16:00</option>
                </select>
              </label>
            </div>

            <div className="form-group">
              <label>
                Full name (Họ tên):
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>

            <div className="form-group">
              <label>
                Date of birth (Ngày sinh):
                <input
                  type="text"
                  name="dateOfBirth"
                  placeholder="dd/mm/yyyy"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  pattern="\d{2}/\d{2}/\d{4}"
                  required
                />
              </label>
            </div>

            <div className="form-group">
              <label>
                Phone number (Số điện thoại):
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>

            <div className="form-group">
              <label>
                Email:
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>

            <div className="form-group">
              <label>
                ID Card/Passport (CCCD/Hộ chiếu):
                <input
                  type="text"
                  name="idCard"
                  value={formData.idCard}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>

            <button type="submit" className="submit-btn">
              GỬI ĐĂNG KÝ / SUBMIT
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
