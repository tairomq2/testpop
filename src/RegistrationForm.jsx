import React, { useState, useEffect, useRef } from "react";
import { FaSync } from "react-icons/fa";
import "./RegistrationForm.css";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    slNgayBanHang: "",
    slPhien: "",
    txtHoTen: "",
    txtNgaySinh_Ngay: "",
    txtNgaySinh_Thang: "",
    txtNgaySinh_Nam: "",
    txtSoDienThoai: "",
    txtEmail: "",
    txtCCCD: "",
    ckbDongY: false,
    txtCaptcha: "",
  });

  const [showLoading, setShowLoading] = useState(false);
  const [showQrCodeSection, setShowQrCodeSection] = useState(false);
  const [showForm, setShowForm] = useState(true);
  const [captchaText, setCaptchaText] = useState(generateCaptcha());
  const captchaRef = useRef(null);

  function generateCaptcha() {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let result = "";
    for (let i = 0; i < 6; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    return result;
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const refreshCaptcha = () => {
    setCaptchaText(generateCaptcha());
    setFormData((prev) => ({ ...prev, txtCaptcha: "" }));
  };

  const DangKyThamDu = () => {
    if (
      !formData.slNgayBanHang ||
      !formData.slPhien ||
      !formData.txtHoTen ||
      !formData.txtSoDienThoai ||
      !formData.txtEmail ||
      !formData.txtCCCD ||
      !formData.ckbDongY ||
      formData.txtCaptcha.toUpperCase() !== captchaText
    ) {
      alert("Vui lòng điền đầy đủ thông tin bắt buộc và nhập đúng CAPTCHA!");
      return;
    }

    setShowLoading(true);
    setTimeout(() => {
      setShowLoading(false);
      setShowForm(false); // Hide the form
      setShowQrCodeSection(true); // Show success message
    }, 2000);
  };

  useEffect(() => {
    if (captchaRef.current) {
      captchaRef.current.focus();
    }
  }, [captchaText]);

  // Function to get display value for select options
  const getDisplayValue = (type, value) => {
    if (type === "salesDate") {
      switch (value) {
        case "12":
          return "16/07/2025";
        case "13":
          return "17/07/2025";
        case "14":
          return "18/07/2025";
        default:
          return "";
      }
    } else if (type === "session") {
      switch (value) {
        case "28":
          return "10:00 - 12:00"; // Assuming this is session 1
        case "29":
          return "13:30 - 15:30"; // Assuming this is session 2
        default:
          return "";
      }
    }
    return value;
  };

  return (
    <div className="body">
      <div className="ConScreen">
        <div id="dvConFields" className="ConFields">
          <div className="form-container">
            <div id="dvLeft" className="dvLeft">
              <div className="logo-text">POP MART</div>
            </div>
            <div className="dvRight">
              {showForm && (
                <div id="dvConXacNhan" className="ConXacNhan">
                  <div className="TieuDe">ĐĂNG KÝ THAM GIA</div>
                  <div>
                    <div className="dvField1">
                      <div className="label">Sales date (Ngày bán hàng)</div>
                      <select
                        name="slNgayBanHang"
                        onChange={handleChange}
                        value={formData.slNgayBanHang}
                        className="MySelect"
                        required
                      >
                        <option value="">-- Chọn --</option>
                        <option value="12">16/07/2025</option>
                        <option value="13">17/07/2025</option>
                        <option value="14">18/07/2025</option>
                      </select>
                      <div id="dvGhiChuNgayBanHang" className="note">
                        MUST HAVE HOT ITEMS
                      </div>
                    </div>
                    <div className="dvField1">
                      <div className="label">Session (Phiên)</div>
                      <select
                        name="slPhien"
                        onChange={handleChange}
                        value={formData.slPhien}
                        className="MySelect"
                        required
                      >
                        <option value="">-- Chọn --</option>
                        <option value="28">session 1 (10:00 - 12:00)</option>
                        <option value="29">session 2 (13:30 - 15:30)</option>
                      </select>
                    </div>
                  </div>
                  <div id="dvFields">
                    <div className="dvField1">
                      <div className="label">Full name (Họ tên)</div>
                      <input
                        name="txtHoTen"
                        type="text"
                        value={formData.txtHoTen}
                        onChange={handleChange}
                        className="myTextBox txtField1"
                        autoComplete="off"
                        required
                      />
                    </div>
                    <div className="dvField1">
                      <div className="label">Date of birth (Ngày Sinh)</div>
                      <table className="date-table">
                        <tbody>
                          <tr>
                            <td>
                              <input
                                name="txtNgaySinh_Ngay"
                                type="number"
                                placeholder="Ngày"
                                value={formData.txtNgaySinh_Ngay}
                                onChange={handleChange}
                                className="myTextBox txtField1 date-input"
                                autoComplete="off"
                              />
                            </td>
                            <td className="date-separator">/</td>
                            <td>
                              <input
                                name="txtNgaySinh_Thang"
                                type="number"
                                placeholder="Tháng"
                                value={formData.txtNgaySinh_Thang}
                                onChange={handleChange}
                                className="myTextBox txtField1 date-input"
                                autoComplete="off"
                              />
                            </td>
                            <td className="date-separator">/</td>
                            <td>
                              <input
                                name="txtNgaySinh_Nam"
                                type="number"
                                placeholder="Năm"
                                value={formData.txtNgaySinh_Nam}
                                onChange={handleChange}
                                className="myTextBox txtField1 date-input"
                                autoComplete="off"
                              />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="dvField1">
                      <div className="label">Phone number (Số điện thoại)</div>
                      <input
                        name="txtSoDienThoai"
                        type="text"
                        value={formData.txtSoDienThoai}
                        onChange={handleChange}
                        className="myTextBox txtField1"
                        autoComplete="off"
                        required
                      />
                    </div>
                    <div className="dvField1">
                      <div className="label">Email</div>
                      <input
                        name="txtEmail"
                        type="email"
                        value={formData.txtEmail}
                        onChange={handleChange}
                        className="myTextBox txtField1"
                        autoComplete="off"
                        required
                      />
                    </div>
                    <div className="dvField1">
                      <div className="label">
                        ID Card/Passport (CCCD/Hộ chiếu)
                      </div>
                      <input
                        name="txtCCCD"
                        type="text"
                        value={formData.txtCCCD}
                        onChange={handleChange}
                        className="myTextBox txtField1"
                        autoComplete="off"
                        required
                      />
                    </div>
                    <div className="dvField1">
                      <table className="terms-table">
                        <tbody>
                          <tr>
                            <td>
                              <input
                                name="ckbDongY"
                                type="checkbox"
                                checked={formData.ckbDongY}
                                onChange={handleChange}
                                className="checkbox"
                                required
                              />
                            </td>
                            <td className="terms-text">
                              <div>
                                Tôi đã đọc và đồng ý với{" "}
                                <a
                                  href="https://popmartbanahills.xspin.live/files/HOT_ITEM_T_C_updated_3_Jul.pdf"
                                  target="_blank"
                                  className="terms-link"
                                  rel="noopener noreferrer"
                                >
                                  Thể lệ chương trình
                                </a>
                              </div>
                              <div>
                                I have read and agree to the{" "}
                                <a
                                  href="https://popmartbanahills.xspin.live/files/HOT_ITEM_T_C_updated_3_Jul.pdf"
                                  target="_blank"
                                  className="terms-link"
                                  rel="noopener noreferrer"
                                >
                                  Event Terms & Conditions
                                </a>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="dvField1">
                      <div id="dvConCaptcha" className="captcha-container">
                        <table className="captcha-table">
                          <tbody>
                            <tr>
                              <td className="captcha-image">
                                <div className="captcha-text">
                                  {captchaText}
                                </div>
                              </td>
                              <td className="captcha-input">
                                <input
                                  name="txtCaptcha"
                                  type="text"
                                  value={formData.txtCaptcha}
                                  onChange={handleChange}
                                  ref={captchaRef}
                                  placeholder="Nhập captcha (*)"
                                  className="myTextBox captcha-input-field"
                                  autoComplete="off"
                                  required
                                />
                              </td>
                              <td className="captcha-refresh">
                                <FaSync
                                  onClick={refreshCaptcha}
                                  className="refresh-icon"
                                />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div id="dvDangKyThamDu" className="submit-container">
                    <button onClick={DangKyThamDu} className="MyButton">
                      Đăng ký
                    </button>
                  </div>
                  {showLoading && (
                    <div id="dvLoading" className="loading-container">
                      <img src="/images/Loading_icon.gif" alt="Loading" />
                    </div>
                  )}
                </div>
              )}

              {showQrCodeSection && (
                <div id="dvConXacNhan" className="ConXacNhan">
                  <div className="TieuDe success-title">ĐĂNG KÝ THÀNH CÔNG</div>
                  <div className="success-details">
                    <div className="success-row">
                      <span className="success-label">
                        Sales date (Ngày bán hàng):
                      </span>
                      <span className="success-value">09/07/2025</span>{" "}
                      {/* Hardcoded as per image */}
                    </div>
                    <div className="success-row">
                      <span className="success-label">Session (Phiên):</span>
                      <span className="success-value">10:00 - 12:00</span>{" "}
                      {/* Hardcoded as per image */}
                    </div>
                    <div className="success-row">
                      <span className="success-label">
                        Số thứ tự (Numerical order):
                      </span>
                      <span className="success-value">#19</span>{" "}
                      {/* Hardcoded as per image */}
                    </div>
                    <div className="success-row">
                      <span className="success-label">Full name (Họ tên):</span>
                      <span className="success-value">Tafi Nguyễn</span>{" "}
                      {/* Hardcoded as per image */}
                    </div>
                    <div className="success-row">
                      <span className="success-label">
                        Date of birth (Ngày sinh):
                      </span>
                      <span className="success-value">12/12/2000</span>{" "}
                      {/* Hardcoded as per image */}
                    </div>
                    <div className="success-row">
                      <span className="success-label">
                        Phone number (Số điện thoại):
                      </span>
                      <span className="success-value">0777599558</span>{" "}
                      {/* Hardcoded as per image */}
                    </div>
                    <div className="success-row">
                      <span className="success-label">Email:</span>
                      <span className="success-value">
                        nguyenthanhtai120703@gmail.com
                      </span>{" "}
                      {/* Hardcoded as per image */}
                    </div>
                    <div className="success-row">
                      <span className="success-label">
                        ID Card/Passport (CCCD/Hộ chiếu):
                      </span>
                      <span className="success-value">123123123123</span>{" "}
                      {/* Hardcoded as per image */}
                    </div>
                  </div>
                  <div className="qr-code-container">
                    <div className="qr-placeholder">QR Code</div>
                  </div>
                  <div className="qr-download">
                    <a href="#download-qr">Tải mã QR</a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
