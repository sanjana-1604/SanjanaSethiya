import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";


const links = [
{ name: "INTRO", to: "/" },
{ name: "ABOUT", to: "/about" },
{ name: "WORKS", to: "/work" },
{ name: "SAY HELLO", to: "/say-hello" }
];

export default function Navbar() {
const { pathname } = useLocation();
const [open, setOpen] = useState(false);


useEffect(() => { setOpen(false); }, [pathname]);


return (
<header className="fixed inset-x-0 top-0 z-50 bg-black/90 backdrop-blur border-b border-neutral-900">
<nav className="container h-16 flex items-center justify-between">
<motion.div
initial={{ opacity: 0, y: -20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.5 }}
>
<Link to="/" className="flex items-center gap-2">
<span className="inline-block h-8 w-8 rounded-full bg-neutral-800" aria-hidden><img src="/logo.png"/></span>
<span className="font-dm text-xl">Sanjana</span>
</Link>
</motion.div>


<button
className="inline-flex items-center gap-2 sm:hidden px-3 py-2 border border-neutral-800 rounded-xl"
onClick={() => setOpen(!open)}
aria-expanded={open}
>
<span className="text-sm">Menu</span>
<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
</button>

<ul className="hidden sm:flex items-center gap-1">
{links.map((l, i) => (
<motion.li
key={l.to}
initial={{ opacity: 0, y: -10 }}
animate={{ opacity: 1, y: 0 }}
transition={{ delay: i * 0.1 }}
>
<Link
to={l.to}
className={`px-4 py-2 rounded-xl text-sm tracking-widest ${
pathname === l.to ? "bg-neutral-900 text-gold" : "text-gray-200 hover:bg-neutral-900"
}`}
>{l.name}</Link>
</motion.li>
))}
</ul>
</nav>
<AnimatePresence>
{open && (
<motion.div
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
exit={{ opacity: 0 }}
className="sm:hidden"
>
<div className="mobile-dim fixed inset-0" onClick={() => setOpen(false)}></div>
<motion.div
initial={{ y: -20, opacity: 0 }}
animate={{ y: 0, opacity: 1 }}
exit={{ y: -20, opacity: 0 }}
className="fixed top-16 inset-x-0 bg-black border-t border-neutral-900"
>
<ul className="container py-3 grid gap-2">
{links.map((l, i) => (
<motion.li
key={l.to}
initial={{ opacity: 0, x: -10 }}
animate={{ opacity: 1, x: 0 }}
transition={{ delay: i * 0.1 }}
>
<Link
to={l.to}
className={`block px-4 py-3 rounded-xl text-sm tracking-widest ${
pathname === l.to ? "bg-neutral-900 text-gold" : "text-gray-200 hover:bg-neutral-900"
}`}
>{l.name}</Link>
</motion.li>
))}
</ul>
</motion.div>
</motion.div>
)}
</AnimatePresence>
</header>
);
}