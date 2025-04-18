import imageQRCode from "../assets/image-qr-code.png";
import "../styles/QRCode.css";

export default function QRCode() {
  return (
    <div className="qr-code-component">
      <img className="image-qr-code" src={imageQRCode} alt="image-qr-code" />
      <div className="description-qr-code-container">
        <p className="bold">Improve your front-end skills by building projects</p>
        <p className="regular">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </div>
  );
}
