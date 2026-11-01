export const personalData = {
  name: "Aryan Sachan",
  title: "Full Stack Developer & Software Engineer",
  tagline: "Architecting high-impact web systems, scalable backend APIs & AI-powered experiences.",
  location: "Noida, Uttar Pradesh, India",
  email: "aryansachan630@gmail.com",
  github: "https://github.com/aryansachan630",
  linkedin: "https://www.linkedin.com/in/aryan-sachan-89964a276?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  status: "Available for Internships & Projects",
  bio: "I am a Computer Science undergraduate at AKTU (Class of 2027) based in Noida. Passionate about building robust, user-centric software systems that solve real problems. From conceptualizing unified campus operating platforms to engineering responsive web architectures, I love transforming ideas into clean, reliable code.",
  stats: [
    { label: "Graduation Year", value: "2027", detail: "AKTU B.Tech CSE" },
    { label: "Flagship Platform", value: "CampusX", detail: "Live on Cloud" },
    { label: "Focus Stack", value: "MERN + AI", detail: "React, Node, Gemini" },
    { label: "Location", value: "Noida", detail: "Open to Remote" }
  ]
};

export const skillsData = [
  {
    category: "Frontend Architecture",
    icon: "Layout",
    color: "from-cyan-500 to-blue-500",
    skills: [
      { name: "React.js / React 19", level: "Advanced" },
      { name: "JavaScript (ES6+)", level: "Advanced" },
      { name: "Tailwind CSS v4", level: "Advanced" },
      { name: "TypeScript", level: "Intermediate" },
      { name: "HTML5 & Modern CSS3", level: "Advanced" },
      { name: "Vite & Modern Bundlers", level: "Advanced" },
      { name: "Responsive UI & Glassmorphism", level: "Advanced" },
      { name: "State Management (Zustand/Context)", level: "Proficient" }
    ]
  },
  {
    category: "Backend & Systems",
    icon: "Server",
    color: "from-emerald-500 to-teal-500",
    skills: [
      { name: "Node.js", level: "Advanced" },
      { name: "Express.js", level: "Advanced" },
      { name: "RESTful API Engineering", level: "Advanced" },
      { name: "WebSockets & Real-time", level: "Intermediate" },
      { name: "JWT & Secure Auth Flow", level: "Proficient" },
      { name: "C / C++ (DSA)", level: "Proficient" }
    ]
  },
  {
    category: "Databases & DevOps",
    icon: "Database",
    color: "from-violet-500 to-purple-500",
    skills: [
      { name: "MongoDB & Mongoose", level: "Advanced" },
      { name: "SQL & Relational DBs", level: "Proficient" },
      { name: "Docker Containerization", level: "Intermediate" },
      { name: "Git & GitHub Version Control", level: "Advanced" },
      { name: "Cloud Deployment (Render/Vercel)", level: "Proficient" },
      { name: "Postman & API Testing", level: "Advanced" }
    ]
  },
  {
    category: "AI & Innovation",
    icon: "Sparkles",
    color: "from-amber-500 to-orange-500",
    skills: [
      { name: "Google Gemini AI SDK", level: "Advanced" },
      { name: "Prompt Engineering & RAG Patterns", level: "Proficient" },
      { name: "AI Copilot Integration", level: "Advanced" },
      { name: "Full-Stack System Design", level: "Proficient" }
    ]
  }
];

export const projectsData = [
  {
    id: "campusx",
    title: "CampusX",
    badge: "Flagship Project",
    tagline: "The Next-Generation Unified Campus Operating System & Student Life Network",
    description: "A full-stack production platform bridging fragmented student life communities with modern academic ERP management and AI-assisted workflows. Eliminates the friction between informal WhatsApp groups and legacy college portals.",
    tags: ["React 19", "Vite", "Tailwind CSS v4", "Node.js", "Express", "Google Gemini AI", "Docker", "Render"],
    liveUrl: "https://campusx-a5ek.onrender.com",
    githubUrl: "https://github.com/aryansachan630",
    featured: true,
    highlights: [
      "CampusGenie AI Copilot: Instant attendance doctor, circular summarizer, and formal leave drafter powered by Google Gemini 2.5 Flash",
      "Academic ERP Engine: Real-time safe lecture bunk calculations, dynamic timetables, and automated SGPA/CGPA transcript calculation",
      "Senior-Junior Mentorship Hub: Verified alumni directory with 1-on-1 guidance booking & instant Google Meet links",
      "Student Life Forum: Interactive polls with animated voting telemetry and categorized society boards"
    ]
  }
];

export const educationData = [
  {
    degree: "Bachelor of Technology (B.Tech) in Computer Science & Engineering",
    institution: "Dr. A.P.J. Abdul Kalam Technical University (AKTU)",
    timeline: "2023 — 2027",
    location: "Uttar Pradesh, India",
    status: "Currently in 2nd / 3rd Year",
    description: "Focusing on core computer science foundations, algorithmic problem-solving, and scalable full-stack system architecture.",
    coursework: [
      "Data Structures & Algorithms (DSA)",
      "Object Oriented Programming (C++ / Java)",
      "Database Management Systems (DBMS)",
      "Operating Systems & Linux Internals",
      "Computer Networks & Protocols",
      "Software Engineering & Agile"
    ]
  }
];

export const terminalSnippets = {
  about: `aryan@portfolio:~$ cat about_me.json
{
  "name": "Aryan Sachan",
  "role": "Full Stack Developer",
  "education": "B.Tech CSE @ AKTU (Passout 2027)",
  "location": "Noida, India",
  "flagship": "CampusX (Full Stack Campus OS)",
  "open_to": ["Summer Internships", "Full Stack Roles", "Freelance Projects"],
  "core_values": ["Clean Code", "High Performance", "User Experience"]
}`,
  skills: `aryan@portfolio:~$ npm list --depth=0
├── react@19.0.0
├── nodejs@20.x
├── express@4.21.0
├── tailwindcss@4.0
├── google-gemini-ai@2.5-flash
├── mongodb@6.0
└── docker-containerization@latest`,
  contact: `aryan@portfolio:~$ ./connect.sh
Connecting to Aryan Sachan...
✓ Email: aryansachan630@gmail.com
✓ GitHub: https://github.com/aryansachan630
✓ LinkedIn: https://www.linkedin.com/in/aryan-sachan-89964a276
Status: Ready to collaborate!`
};
