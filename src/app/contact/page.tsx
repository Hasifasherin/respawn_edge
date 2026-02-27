"use client";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    privacy: false,
  });

  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      setForm({ ...form, [name]: (e.target as HTMLInputElement).checked });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !form.firstName ||
      !form.lastName ||
      !form.email ||
      !form.phone ||
      !form.message
    ) {
      setError("Please fill all fields.");
      return;
    }

    if (!form.privacy) {
      setError("You must accept the Privacy Policy.");
      return;
    }

    setError("");
    setShowModal(true);
  };

  const handleSend = () => {
    const phoneNumber = "919876543210";

    const text = `
New Contact Message 🎮

Name: ${form.firstName} ${form.lastName}
Email: ${form.email}
Phone: ${form.phone}

Message:
${form.message}
`;

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      text
    )}`;

    window.open(whatsappURL, "_blank");
    setShowModal(false);
  };

  return (
    <div className="pt-24 md:pt-28 pb-16 md:pb-20 text-white min-h-screen relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 md:mb-16 text-center">
          How can we help?
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-8 md:space-y-10 border border-blue-500/30 rounded-2xl 
          p-6 sm:p-8 md:p-10 bg-gradient-to-b from-blue-950/20 to-transparent"
        >
          {/* Names */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            <input
              name="firstName"
              type="text"
              placeholder="First name"
              onChange={handleChange}
              className="w-full bg-transparent border-b border-gray-600 focus:border-blue-500 outline-none py-3 text-sm sm:text-base"
            />

            <input
              name="lastName"
              type="text"
              placeholder="Last name"
              onChange={handleChange}
              className="w-full bg-transparent border-b border-gray-600 focus:border-blue-500 outline-none py-3 text-sm sm:text-base"
            />
          </div>

          {/* Contact */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            <input
              name="phone"
              type="tel"
              placeholder="Phone number"
              onChange={handleChange}
              className="w-full bg-transparent border-b border-gray-600 focus:border-blue-500 outline-none py-3 text-sm sm:text-base"
            />

            <input
              name="email"
              type="email"
              placeholder="Email address"
              onChange={handleChange}
              className="w-full bg-transparent border-b border-gray-600 focus:border-blue-500 outline-none py-3 text-sm sm:text-base"
            />
          </div>

          {/* Message */}
          <textarea
            name="message"
            placeholder="Message"
            rows={4}
            onChange={handleChange}
            className="w-full bg-transparent border-b border-gray-600 focus:border-blue-500 outline-none py-3 resize-none text-sm sm:text-base"
          />

          {/* Privacy */}
          <div className="flex items-start gap-3">
            <input
              name="privacy"
              type="checkbox"
              onChange={handleChange}
              className="accent-blue-500 mt-1"
            />
            <p className="text-sm text-gray-400">
              I accept the Privacy Policy
            </p>
          </div>

          {/* Error */}
          {error && (
            <p className="text-red-500 text-sm text-center">{error}</p>
          )}

          {/* Button */}
          <div className="text-center">
            <button
              type="submit"
              className="mt-4 md:mt-6 bg-gradient-to-r from-blue-600 to-blue-500 
              hover:from-blue-700 hover:to-blue-600 
              px-8 sm:px-12 py-3 sm:py-4 
              rounded-xl font-semibold text-sm sm:text-base
              shadow-lg shadow-blue-500/30 transition"
            >
              Send Message →
            </button>
          </div>
        </form>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
          <div className="bg-gray-900 rounded-xl p-6 sm:p-8 
          max-w-md w-full text-center space-y-5 sm:space-y-6">
            <h2 className="text-xl sm:text-2xl font-bold">
              Confirm Message
            </h2>

            <p className="text-gray-300 text-sm sm:text-base">
              Are you sure you want to send this message via WhatsApp?
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
              <button
                onClick={() => setShowModal(false)}
                className="px-6 py-3 rounded-lg border border-gray-600 hover:border-gray-400 transition"
              >
                Cancel
              </button>

              <button
                onClick={handleSend}
                className="px-6 py-3 rounded-lg bg-green-500 hover:bg-green-600 transition"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}