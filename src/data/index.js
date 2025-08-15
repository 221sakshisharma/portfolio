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
    image: "/assets/projects/home-decor-store.jpg",
    bgImage: "/assets/backgrounds/blanket.jpg",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "Node.js" },
      { id: 3, name: "Express.js" },
      { id: 4, name: "MongoDB" },
      { id: 5, name: "Tailwind CSS" },
    ],
  },
  {
    id: 2,
    name: "Blog App",
    description:
      "A dynamic blogging platform that allows users to create, edit, and read posts with a modern UI and markdown support.",
    href: "",
    image: "/assets/projects/blog-app.jpg",
    bgImage: "/assets/backgrounds/paper.jpg",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "Appwrite" },
      { id: 3, name: "Tailwind CSS" },
      { id: 4, name: "React Hook Form" },
    ],
  },
  {
    id: 3,
    name: "Music Genre Classifier",
    description:
      "A deep learning model that predicts the genre of a music file, supporting audio uploads and YouTube link conversion.",
    href: "",
    image: "/assets/projects/music-genre.jpg",
    bgImage: "/assets/backgrounds/waves.jpg",
    frameworks: [
      { id: 1, name: "Python" },
      { id: 2, name: "TensorFlow/Keras" },
      { id: 3, name: "Librosa" },
      { id: 4, name: "Flask" },
    ],
  },
  {
    id: 4,
    name: "YouTube Video Downloader",
    description:
      "A simple desktop application that lets users download YouTube videos using a clean Tkinter-based GUI.",
    href: "",
    image: "/assets/projects/youtube-downloader.jpg",
    bgImage: "/assets/backgrounds/terminal.jpg",
    frameworks: [
      { id: 1, name: "Python" },
      { id: 2, name: "Tkinter" },
      { id: 3, name: "pytube" },
    ],
  },
  {
    id: 5,
    name: "LeafLift",
    description:
      "A HealthTech solution for smart hospital management including AI-based EMR scanning, appointment tracking, and personalized recommendations.",
    href: "",
    image: "/assets/projects/leaflift.jpg",
    bgImage: "/assets/backgrounds/clinic.jpg",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "Flask" },
      { id: 3, name: "Python" },
      { id: 4, name: "Machine Learning" },
    ],
  },
  {
    id: 6,
    name: "Weather App",
    description:
      "A modern weather forecasting app that displays real-time weather data using OpenWeatherMap API with a responsive UI.",
    href: "",
    image: "/assets/projects/weather-app.jpg",
    bgImage: "/assets/backgrounds/clouds.jpg",
    frameworks: [
      { id: 1, name: "HTML" },
      { id: 2, name: "JavaScript" },
      { id: 3, name: "OpenWeatherMap API" },
      { id: 4, name: "CSS3" },
    ],
  },
];