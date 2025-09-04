import Navbar from "./Components/Navbar";
import Intro from "./Components/Intro";
import About from "./Components/About";
import Work from "./Components/Work";
import SayHello from "./Components/SayHello";
import {Toaster} from "react-hot-toast";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white font-public">
      {/* Navbar fixed at top */}
      <Navbar />

      {/* All sections on one page */}
      <main className="pt-16">
        <Intro />
        <About />
        <Work />
        <SayHello />
      </main>

      <footer className="text-center py-6 text-sm text-gray-400 border-t border-neutral-800">
        © {new Date().getFullYear()} Sanjana Sethiya. All rights reserved.
      </footer>
      <Toaster
  position="top-right"
  toastOptions={{
    success: {
      style: {
        background: "#1f1f1f", // dark background
        color: "#facc15", // gold text
        border: "1px solid #facc15",
      },
      iconTheme: {
        primary: "#facc15",
        secondary: "#1f1f1f",
      },
    },
    error: {
      style: {
        background: "#1f1f1f",
        color: "#ef4444", // red text
        border: "1px solid #ef4444",
      },
      iconTheme: {
        primary: "#ef4444",
        secondary: "#1f1f1f",
      },
    },
  }}
/>

    </div>
  );
}
