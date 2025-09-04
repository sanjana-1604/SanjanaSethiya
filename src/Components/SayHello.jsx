import { useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

export default function SayHello() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

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

      const data = await res.json().catch(() => ({}));

      if (res.ok) {
        toast.success("Message sent successfully ✅");
        e.target.reset();
      } else {
        toast.error(`❌ ${data.error || data.message || "Failed to send"}`);
      }
    } catch (err) {
      console.error("Fetch error:", err);
      toast.error("❌ Network error: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section container">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="h2 mb-6"
      >
        Say Hello
      </motion.h2>

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="flex flex-col gap-4 max-w-lg"
      >
        <input
          type="text"
          name="name"
          placeholder="Your name"
          className="px-4 py-3 rounded-lg bg-neutral-900 border border-neutral-700 focus:border-gold outline-none"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your email"
          className="px-4 py-3 rounded-lg bg-neutral-900 border border-neutral-700 focus:border-gold outline-none"
          required
        />
        <textarea
          name="message"
          placeholder="Your message"
          rows="5"
          className="px-4 py-3 rounded-lg bg-neutral-900 border border-neutral-700 focus:border-gold outline-none"
          required
        ></textarea>

        <button
          type="submit"
          disabled={loading}
          className="px-6 py-3 rounded-xl bg-gold text-black font-semibold shadow-md hover:shadow-lg transition disabled:opacity-60"
        >
          {loading ? "Sending..." : "Send"}
        </button>
      </motion.form>
    </section>
  );
}
