import Image from "next/image";

import SectionHeader from "@/components/SectionComponent";

export default function Projects() {
  // TODO make it linked to the projects
  const projects = [
    {
      id: 1,
      img: "/portfolio.png",
      title: "Portfolio",
      tech: "Next.js, TailwindCSS, Typescript",
      description:
        "My personal portfolio website to showcase my projects and skills",
      appLink: "https://github.com/julian-sanchez-dev/portfolio",
      repoLink: "https://github.com/julian-sanchez-dev/portfolio",
    },
    /* {
      id: 3,
      img: "/kakeibo.jpg",
      title: "Family Account book",
      tech: "Next.js, Golang, Postgresql",
      description:
        "A web app to manage family accounts and budgets. which allow us to select currencies and manage the budget of each family member",
      appLink: "https://famiibo-front.vercel.app/transaction?transactionId=1",
      repoLink: "https://github.com/benono/famiibo-api",
    }, */
    {
      id: 2,
      img: "/sketch-champ.png",
      title: "Sketch-Champ",
      tech: "React, Express, Mongo DB, WebSocket",
      description:
        "Multiplayer drawing and guessing game where players take turns drawing given themes while others try to guess what's being drawn.",
      appLink: "https://sketch-champ-1.onrender.com/",
      repoLink: "https://github.com/NelsoNave/sketch-champ",
    },
    {
      id: 3,
      img: "/cinema-web.png",
      title: "Cinema Web",
      tech: "Next.js, Shadcn/UI, TMDB API",
      description:
        "A web app that provides information about movies, series and actors. It uses the TMDB API to get the data.",
      appLink: "https://cinema-techo.vercel.app/",
      repoLink: "https://github.com/benono",
    },
    {
      id: 4,
      img: "/random-cat.png",
      title: "Random Cat",
      tech: "Next.js, TailwindCSS, Vercel",
      description: "A web app to get a random cat image from the cat api",
      appLink: "https://random-cat-vert.vercel.app/",
      repoLink: "https://github.com/benono/random-cat",
    },
    {
      id: 5,
      img: "/todo-app.png",
      title: "Todo App",
      tech: "React, Golang(Echo), Render, Vercel",
      description: "A todo app to manage your tasks",
      appLink: "https://todoapp-react-kohl.vercel.app/",
      repoLink: "https://github.com/benono/todoapp-react",
    },
  ];
  return (
    <section
      className="projects py-20 bg-primary text-primary-100"
      id="projects"
    >
      <SectionHeader title="Projects" />
      <div className="w-[90vw] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
        {projects.map((project) => (
          <article
            key={project.id}
            className="project border-2 bg-white border-gray-300 rounded-3xl shadow-lg hover:scale-105 transition-all duration-300"
          >
            <div className="w-[300px] h-48 overflow-hidden">
              <Image
                className="rounded-t-3xl object-cover"
                src={project.img}
                alt="Project 1"
                width={300}
                height={100}
              />
            </div>
            <h3 className="border-t-2 border-gray-300 p-4 pb-0 text-accent text-2xl font-semibold">
              {project.title}
            </h3>
            <p className="p-4 pt-0 text-primary-800 text-sm">{project.tech}</p>
            <div className="w-full flex justify-center">
              <p className="p-4 text-primary w-[300px] min-h-40">
                {project.description}
              </p>
            </div>
            <div className="flex justify-between bg-primary text-white rounded-b-3xl">
              <a
                href={project.appLink}
                target="_blank"
                className="w-1/2 pr-2 hover:bg-accent hover:text-primary transition-all duration-300 rounded-bl-3xl"
              >
                <button className="p-2 text-bold rounded-lg w-full">
                  View Site
                </button>
              </a>
              <a
                href={project.repoLink}
                target="_blank"
                className="w-1/2 pl-2 hover:bg-accent hover:text-primary transition-all duration-300 rounded-br-3xl"
              >
                <button className="p-2 text-bold rounded-lg w-full">
                  Repo
                </button>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
