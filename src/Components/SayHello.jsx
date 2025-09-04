import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import * as emailjs from "@emailjs/browser";  // safer import

export default function SayHello() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const [success, setSuccess] = useState(false);
  const [errorShake, setErrorShake] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

 const handleSubmit = async (e) => {
  e.preventDefault();

  const formData = {
    name: e.target.name.value,
    email: e.target.email.value,
    message: e.target.message.value,
  };

  try {
    const res = await fetch("/api/sendEmail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json().catch(() => ({})); // safeguard

    if (res.ok) {
      alert("✅ " + (data.message || "Message sent!"));
      e.target.reset();
    } else {
      alert("❌ " + (data.error || data.message || "Failed to send"));
    }
  } catch (err) {
    console.error("Fetch error:", err);
    alert("❌ Network error: " + err.message);
  }
};



  return (
    <section id="contact" className="container section">
      <motion.h3
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="h3"
      >
        GET IN TOUCH
      </motion.h3>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="h2 mt-2 max-w-3xl"
      >
        I love to hear from you. Whether you have a question or just want to chat about design, tech & art — shoot me a message.
      </motion.h2>

      <motion.form
  onSubmit={handleSubmit}
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  animate={errorShake ? { x: [-10, 10, -10, 10, 0] } : {}}
  transition={{ duration: 0.6, delay: 0.3 }}  
  className={`mt-8 grid gap-4 max-w-xl relative ${
    errorShake ? "border-2 border-red-500 rounded-xl" : ""
  }`}
>
  <input
    name="name"
    value={form.name}
    onChange={handleChange}
    className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-800"
    placeholder="Your name"
    required
  />
  <input
    name="email"
    type="email"
    value={form.email}
    onChange={handleChange}
    className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-800"
    placeholder="Email"
    required
  />
  <textarea
    name="message"
    value={form.message}
    onChange={handleChange}
    className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-800 min-h-[140px]"
    placeholder="Message"
    required
  />
  <button
    type="submit"
    className="px-5 py-3 rounded-xl bg-gold text-black font-semibold w-fit"
  >
    Send
  </button>
  {status && <p className="text-sm text-gray-400 mt-2">{status}</p>}
</motion.form>
    </section>
  );
}
