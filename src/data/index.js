import { exp } from "three/tsl";

export const socials = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/your_username",
    icon: "instagram", // You can use icon libraries like lucide-react or react-icons
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/your_username",
    icon: "linkedin",
  },
  {
    name: "GitHub",
    url: "https://github.com/your_username",
    icon: "github",
  }
];


export const projects = [
  {
    id: 1,
    name: "Sakhi Circle",
    description:
      "An AI-powered fintech platform designed to empower women through chit fund creation, financial literacy quizzes, and community learning.",
    href: "",
    image: "/assets/projects/sakhicircle.png",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "Node.js" },
      { id: 3, name: "SQLite" },
      { id: 4, name: "Tailwind CSS" },
    ],
  },
  {
    id: 2,
    name: "Blog App",
    description:
      "A dynamic blogging platform that allows users to create, edit, and read posts with a modern UI and markdown support.",
    href: "",
    image: "/assets/projects/blogapp.png",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "Appwrite" },
      { id: 3, name: "Tailwind CSS" },
      { id: 4, name: "React Hook Form" },
    ],
  },
  {
    id: 3,
    name: "YouTube Video Downloader",
    description:
      "A simple desktop application that lets users download YouTube videos using a clean Tkinter-based GUI.",
    href: "",
    image: "/assets/projects/youtube.png",
    frameworks: [
      { id: 1, name: "Python" },
      { id: 2, name: "Tkinter" },
      { id: 3, name: "pytube" },
    ],
  },
  {
    id: 4,
    name: "LeafLift",
    description:
      "A HealthTech solution for smart hospital management including AI-based EMR scanning, appointment tracking, and personalized recommendations.",
    href: "",
    image: "/assets/projects/leaflift.png",
    frameworks: [
      { id: 1, name: "HTML" },
      { id: 2, name: "CSS" },
      { id: 3, name: "Javascript" },
      { id: 4, name: "Maps API" },
    ],
  },
  {
    id: 5,
    name: "Weather App",
    description:
      "A modern weather forecasting app that displays real-time weather data using OpenWeatherMap API with a responsive UI.",
    href: "",
    image: "/assets/projects/weatherapp.png",
    frameworks: [
      { id: 1, name: "HTML" },
      { id: 2, name: "CSS" },
      { id: 3, name: "Javascript" },
      { id: 4, name: "OpenWeatherMap API" },
    ],
  },
];