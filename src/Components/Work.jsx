import { motion } from "framer-motion";

const projects = [

  {
    name: "Weather-App",
    detail: "jquery + Bootstrap application",
    summary: "This application can be used to check weather of any city on current day and the next 5 days. It will be helpful in planning any outdoor trip.",
    tech: ["jquery", "Bootstrap", "LocalStorage"],
    image: "/Weather-App.png",
    link: "https://weatherapp-blond-kappa.vercel.app/"
  },

{
    name: "JS Question App",
    detail: "Java Script application",
    summary: "Application has some js based question to answer",
    tech: ["Java Script"],
    image: "/JS-question-app.png",
    link: "https://javajcript-quiz.vercel.app/"
  },
  {
    name: "React basic projects",
    detail: "React basic projects to cover the concepts",
    summary: "Application has some basic projects covering major react concepts",
    tech: ["React", "JS", "HTML"],
    image: "/react-projects.png",
    link: "https://25-reactjsprojects.vercel.app/"
  },
    {
    name: "Doc-Mini-App",
    detail: "React + Vite application",
    summary: "A lightweight document editor with real-time preview and export options.",
    tech: ["React", "Vite", "Tailwind"],
    image: "/Doc-Mini-App.png",
    link: "https://doc-mini-app-psi.vercel.app/"
  },

]
  

export default function Work() {
  return (
    <section id="work" className="section container">
      <motion.h3
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="h3 text-center"
      >
        RECENT WORKS
      </motion.h3>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="h2 text-center mt-2"
      >
        A few favourites
      </motion.h2>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((p, i) => (
          <motion.a
            key={p.name}
            href={p.link}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="grid-divider pt-10 flex flex-col md:flex-row items-center gap-6 p-6 rounded-2xl bg-neutral-900 hover:bg-neutral-800 transition"
          >
            <img
              src={p.image}
              alt={p.name}
              className="w-40 h-40 object-cover rounded-xl border border-neutral-800 shadow-lg"
            />
            <div className="flex-1">
              <h4 className="font-dm text-2xl">{p.name}</h4>
              <p className="text-base text-gray-400 mt-1">{p.summary}</p>
              <p className="text-sm text-gray-300 mt-2">{p.detail}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-1 text-xs rounded-lg bg-neutral-800 text-gray-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
