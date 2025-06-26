import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = ({ bgColor = "#25D366" }) => {
  const phoneNumber = "+923313908443";
  const message = "Hello! I want to know more about your services.";

  const encodedMessage = encodeURIComponent(message);

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber.replace(
      "+",
      ""
    )}?text=${encodedMessage}`;
    window.open(url, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "5px",
        backgroundColor: bgColor,
        color: "white",
        padding: "12px 20px",
        border: "none",
        borderRadius: "8px",
        fontSize: "16px",
        cursor: "pointer",
      }}
    >
      <FaWhatsapp size={20} />
      Chat on WhatsApp
    </button>
  );
};

export default WhatsAppButton;
