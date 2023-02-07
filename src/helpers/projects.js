import portfolio from "../assets/image/portfolio.png"
import litwitter from "../assets/image/li-twitter.png"
import pathfinder from "../assets/image/pathfinder.png"
import chess from "../assets/image/Chess.png"
import chat from "../assets/image/chat.png"

export const projects = [
  {
    id: 1,
    title: "portfolio",
    desc: "My portfolio website made using Reactjs and react-bootstrap",
    intro: "My portfolio",
    tools: ["React", "React-Bootstrap", "CSS", "vite"],
    site: "https://dhavalkotak.github.io/portfolio",
    img: portfolio,
  },
  {
    id: 2,
    title: "li-twitter",
    desc: "A twitter clone where you can share you tweets and post them that other user can like as well.",
    intro: "A twitter clone in Next.js",
    tools: [
      "React",
      "Next.js",
      "MaterialUI",
      "Firebase",
      "Prisma",
      "PostgreSQL",
    ],
    site: "https://li-twitter.vercel.app/",
    img: litwitter,
  },
  {
    id: 3,
    title: "chess",
    desc: "A multiplayer chess game where users can create a room by generating an id that they can share to other people to play together",
    intro: "Multiplayer chess game",
    tools: ["React", "Socket.io", "React-Bootstrap"],
    site: "https://dhavalkotak.github.io/chess",
    img: chess,
  },
  {
    id: 4,
    title: "pathfinder",
    desc: "A visual representation of A* pathfinding algorithm in a grid where you can define the start and end node and can create various kind of mazes as well",
    intro: "Visual representaion of A* pathfinding algorithm",
    tools: ["React"],
    site: "https://dhavalkotak.github.io/pathfinder",
    img: pathfinder,
  },
  {
    id: 5,
    title: "chat-app",
    desc: "A chat application where users can send each other friend request and chat with each other in real time.",
    intro: "A simple chat application in react",
    tools: ["React", "Socket.io", "React-Bootstrap"],
    site: "https://github.com/DhavalKotak/chat-app",
    img: chat,
  },
]
