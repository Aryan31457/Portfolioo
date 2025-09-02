"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { motion, useInView } from "framer-motion";

const projects = [
  {
    id: 2,
    title: "QuickBoard (Real-Time Ticket Booking System)",
    description: " Engineered & Developed a fullstack project using, MongoDB, ExpressJS and React19 along with different algorithms and data- structures for better efficiency. Built with Blockchain and Web3 for a decentralized and intelligent queue management system.",
    image: "/Quick.png",
    tags: ["React js", "Node js", "Gemini API", "Python","Blockchain","Web3"],
    liveUrl: "https://quick-board-nine.vercel.app/",
    githubUrl: "https://github.com/Aryan31457/quickboard",
    category: ["web","ai"],
  },
  {
    id: 3,
    title: "KrishiBond (Contract- based Farming)",
    description: "Developed a optimized web application to streamline contract management between farmers, government, and industries, reducing delays and ensuring transparency in agreements.Integrated an on-chain escrow mechanism to automate risk-managed fund allocation,enhancing transactional integrity and farmer protection.",
    image: "/Krishi.png",
    tags: ["JavaScript", "Gemini API", "React js", "Node js","Blockchain","Web3","python"],
    liveUrl: "https://github.com/Aryan31457/KrishiBond",
    githubUrl: "https://github.com/Aryan31457/KrishiBond",
    category: ["web",],
  },
  {
    id: 4,
    title: "Phoenix_Data_recovery",
    description: "Phoenix Recovery is a lost data recovery tool designed for devices like pendrives. It focuses on recovering lost files from FAT32 by identifying orphan clusters, using machine learning to determine similarity, and reconstructing the file system structure.ssing and WebSocket integration, it provides real-time tracking, reporting, and alerts for road maintenance.",
    image: "/Recovery.png",
    tags: ["Python", "Streamlit", "NLP", "LLM","Machine Learning"],
    liveUrl: "https://github.com/Aryan31457/Phoenix_Data_recovery",
    githubUrl: "https://github.com/Aryan31457/Phoenix_Data_recovery",
    category: ["ai"],
  },
  // {
  //   id: 7,
  //   title: "AI-Powered Coustom Chatbot (Portfolio Chatbot)",
  //   description: "This project is a custom chatbot integrated into my portfolio website, designed to assist users in navigating the site and answering queries. It utilizes the OpenAI API for natural language processing and LangChain for efficient data handling. The chatbot is built with Node.js and employs FAISS for fast similarity search, ensuring quick and relevant responses.",
  //   image: "/coustomChatbot.png",
  //   tags: ["Node.js", "OpenAI API","LangChain", "LangGraph","FAISS"],
  //   liveUrl: "https://portfolio-ayushiiitus-projects.vercel.app/?open=true",  
  //   githubUrl:"https://github.com/AyushIIITU/Portfolio-ChatBot",
  //   category: ["web","ai"],
  // },
  {
    id: 5,
    title: "AI Content Generation & MCQ Platform (GeinAi)",
    description: "GeinAi is an AI-powered application that extracts and generates content from YouTube videos and PDFs. It goes further by creating multiple-choice questions based on the provided content, enhancing learning and content engagement. Powered by Python, Ollama, LangChain, and a Flutter frontend.",
    image: "/chatbot.webp",
    tags: ["Python", "Ollama", "LangChain", "Flutter","SQLlite"],
    liveUrl: "https://documenter.getpostman.com/view/32615809/2sAYXEDJ1e",
    githubUrl: "https://github.com/AyushIIITU/IIITU-Hackathon-Backend",
    category: ["ai","mobile"],
  },
  // {
  //   id: 1,
  //   title: "Campus Management System",
  //   description: "A comprehensive campus management platform streamlining administrative tasks and enhancing student experience. Features include compliant and application management, laundry service tracking, bus booking, and task assignment, all integrated into a user-friendly interface.",
  //   image: "/IIIT-UNA.png",
  //   tags: ["React js", "Node js", "Bootstrap","MongoDB"],
  //   liveUrl: "https://www.youtube.com/watch?v=ZEZ7gy2EYAk",
  //   githubUrl: "https://github.com/AyushIIITU/Campus-Management-System",
  //   category: ["web",],
  // },
  {
    id: 6,
    title: "Accessible E-Commerce Website (BlindKart)",
    description: "BlindKart is an e-commerce platform designed with accessibility in mind for visually impaired users. It features an interactive interface with auditory feedback for keyboard interactions and guided navigation, ensuring a seamless shopping experience. Built with Javascript, Node.js,CSS,HTML and MySQL.",
    image: "/blindkart.png",
    tags: [ "Javascript", "Node.js","CSS","HTML", "MySQL"],
    liveUrl: "http://blind-kart2.s3-website.ap-south-1.amazonaws.com/",
    githubUrl: "https://github.com/Aryan31457/BlindKart-Project",
    category: ["web",],
  },
];

export function ProjectsSection() {
  const [activeTab, setActiveTab] = useState("all");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const filteredProjects = activeTab === "all" 
    ? projects 
    : projects.filter(project => project.category.some(category => category === activeTab));

    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <section id="projects" className="py-20" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">My Projects</h2>
          <p className="mt-4 text-muted-foreground">A showcase of my recent work and side projects</p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Tabs defaultValue="all" className="mb-12" onValueChange={setActiveTab}>
            <div className="flex justify-center">
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="web">Web</TabsTrigger>
                {/* <TabsTrigger value="mobile">Mobile</TabsTrigger> */}
                <TabsTrigger value="ai">AI</TabsTrigger>
                {/* <TabsTrigger value="data">Data</TabsTrigger> */}
              </TabsList>
            </div>
            
            <TabsContent value="all" className="mt-8">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
              >
                {filteredProjects.map((project) => (
                  <motion.div key={project.id} variants={itemVariants}>
                    <ProjectCard project={project} />
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
            
            <TabsContent value="web" className="mt-8">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
              >
                {filteredProjects.map((project) => (
                  <motion.div key={project.id} variants={itemVariants}>
                    <ProjectCard project={project} />
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
            
            <TabsContent value="mobile" className="mt-8">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
              >
                {filteredProjects.map((project) => (
                  <motion.div key={project.id} variants={itemVariants}>
                    <ProjectCard project={project} />
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
            
            <TabsContent value="ai" className="mt-8">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
              >
                {filteredProjects.map((project) => (
                  <motion.div key={project.id} variants={itemVariants}>
                    <ProjectCard project={project} />
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
            
            <TabsContent value="data" className="mt-8">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
              >
                {filteredProjects.map((project) => (
                  <motion.div key={project.id} variants={itemVariants}>
                    <ProjectCard project={project} />
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
}

interface Project {
          id: number;
          title: string;
          description: string;
          image: string;
          tags: string[];
          githubUrl: string;
          liveUrl?: string;
        }
function ProjectCard({ project }: { project: Project }) {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={cardRef}
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card className="overflow-hidden transition-all hover:shadow-lg">
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform hover:scale-105"
          />
        </div>
        <CardHeader>
          <CardTitle>{project.title}</CardTitle>
          <CardDescription>{project.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag:string, index:number) => (
              <motion.div
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ delay: index * 0.1 }}
              >
                <Badge variant="secondary">{tag}</Badge>
              </motion.div>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" size="sm" asChild>
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" /> Code
            </a>
          </Button>
         {project?.liveUrl && <Button size="sm" asChild>
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
            </a>
          </Button>}
        </CardFooter>
      </Card>
    </motion.div>
  );
}