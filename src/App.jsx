import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar.jsx";
import Intro from "./Components/Intro.jsx";
import About from "./Components/About.jsx";
import Work from "./Components/Work.jsx";
import SayHello from "./Components/SayHello.jsx";
import "./index.css";


export default function App() {
return (
<div className="min-h-screen bg-black text-white font-public">
<Navbar />

<main className="pt-16"> {/* mobile-first fixed nav height */}
<Routes>
<Route index element={<Intro />} />
<Route path="about" element={<About />} />
<Route path="work" element={<Work />} />
<Route path="say-hello" element={<SayHello />} />
</Routes>
</main>
<footer className="container section text-gray-400 text-sm">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 grid-divider pt-6">
<p>© {new Date().getFullYear()} Sanjana • Built with React & Tailwind</p>

</div>
</footer>
</div>
);
}