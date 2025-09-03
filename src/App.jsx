import Navbar from "./Components/Navbar";
import Intro from "./Components/Intro";
import About from "./Components/About";
import Work from "./Components/Work";
import SayHello from "./Components/SayHello";

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
    </div>
  );
}
