import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
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
      className="flex items-center px-4 py-2 md:px-6 md:py-3 rounded-xl bg-green-500 text-white shadow-glass hover:bg-glass transition duration-300 text-sm md:text-base whitespace-nowrap"
    >
      <FaWhatsapp className="mr-2" size={18} />
      Chat on WhatsApp
    </button>
  );
};

export default WhatsAppButton;
