import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Contact = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const contentY = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    captcha: "",
  });

  const [num1, setNum1] = useState(1);
  const [num2, setNum2] = useState(1);
  const [timer, setTimer] = useState(10);
  const [isCaptchaCorrect, setIsCaptchaCorrect] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const generateCaptcha = () => {
      const a = Math.floor(Math.random() * 10) + 1;
      const b = Math.floor(Math.random() * 10) + 1;
      setNum1(a);
      setNum2(b);
      setFormData((prev) => ({ ...prev, captcha: "" }));
      setTimer(10);
    };

    generateCaptcha();
    const captchaInterval = setInterval(generateCaptcha, 10000);
    return () => clearInterval(captchaInterval);
  }, []);

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(countdown);
  }, []);

  useEffect(() => {
    const correct = parseInt(formData.captcha) === num1 + num2;
    setIsCaptchaCorrect(correct);
  }, [formData.captcha, num1, num2]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("phone", formData.phone);
    formDataToSend.append("message", formData.message);

    fetch("https://formspree.io/f/myzjbolz", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formDataToSend,
    })
      .then((res) => {
        if (res.ok) {
          setShowSuccess(true);
          setShowModal(true);
          setFormData({
            name: "",
            email: "",
            phone: "",
            message: "",
            captcha: "",
          });
          setTimeout(() => {
            setShowSuccess(false);
            setShowModal(false);
          }, 5000);
        } else {
          alert("Form submit failed");
        }
      })
      .catch((err) => {
        console.error("FormSubmit error:", err);
        alert("Error submitting form");
      });
  };

  return (
    <section
      ref={ref}
      className="relative min-h-screen overflow-hidden bg-dark px-8 md:px-20 py-28 text-white"
    >
      {/* Background glowing shapes */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full z-0"
        style={{ y: bgY }}
      >
        <div className="absolute w-64 h-64 bg-purple-700 opacity-20 rounded-full blur-3xl top-20 left-10 animate-pulse" />
        <div className="absolute w-72 h-72 bg-blue-500 opacity-10 rounded-full blur-2xl bottom-10 right-20 animate-spin-slow" />
        <div className="absolute w-40 h-40 bg-pink-600 opacity-10 rounded-full blur-2xl top-1/2 left-1/2 animate-pulse" />
      </motion.div>

      {/* Success Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white text-black px-8 py-6 rounded-xl shadow-lg text-center max-w-sm">
            <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
            <p>Your message has been sent successfully.</p>
          </div>
        </div>
      )}

      {/* Contact Form */}
      <motion.div
        className="relative z-10 max-w-2xl mx-auto bg-glass backdrop-blur-xl p-10 rounded-3xl shadow-neo"
        style={{ y: contentY, scale, opacity }}
      >
        <h2 className="text-4xl font-bold mb-6 text-center">
          Get In <span className="text-purple-500">Touch</span>
        </h2>
        <p className="text-center text-gray-300 mb-8">
          I'm open to freelance work, collaborations, or just a good tech chat.
        </p>

        {showSuccess && (
          <div className="bg-green-600 text-white text-center py-2 px-4 rounded-xl mb-4">
            ✅ Message sent successfully!
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            name="name"
            type="text"
            required
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="px-4 py-3 rounded-xl bg-transparent border border-purple-500/30 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
            name="email"
            type="email"
            required
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="px-4 py-3 rounded-xl bg-transparent border border-purple-500/30 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
            name="phone"
            type="tel"
            required
            placeholder="Your Phone Number"
            pattern="^\+?\d{10,15}$"
            title="Enter a valid phone number (with or without +country code)"
            value={formData.phone}
            onChange={handleChange}
            className="px-4 py-3 rounded-xl bg-transparent border border-purple-500/30 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <textarea
            name="message"
            rows={5}
            required
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="px-4 py-3 rounded-xl bg-transparent border border-purple-500/30 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <div className="flex items-center gap-3">
            <label className="text-sm text-gray-300">
              What is {num1} + {num2}?{" "}
              <span className="text-yellow-400">({timer}s)</span>
            </label>
            <input
              type="number"
              name="captcha"
              required
              value={formData.captcha}
              onChange={handleChange}
              className="no-spinner w-20 px-3 py-2 rounded-md border border-purple-500/30 bg-transparent focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <button
            type="submit"
            disabled={!isCaptchaCorrect}
            className={`w-fit px-6 py-3 mt-2 rounded-xl transition-all ${
              isCaptchaCorrect
                ? "bg-purple-600 hover:bg-purple-700 cursor-pointer"
                : "bg-purple-900 opacity-50 cursor-not-allowed"
            }`}
          >
            Send Message
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
