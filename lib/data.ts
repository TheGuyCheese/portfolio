import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import pubmed from "@/public/pubMed.png"
import trans from "@/public/trans.png"
import bwise from "@/public/bwise.png"
import ghubProfile from "@/public/ghubProfile.png"

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "AI Trainer at Outlier AI",
    location: "Remote, India",
    description:
      "Working as a freelance AI developer, building intelligent solutions across various domains.",
    icon: React.createElement(FaReact),
    date: "Jan 2025 - present",
  }, 
  {
    title: "Computer Vision Intern at Oriental InfraTrust Pvt. Ltd",
    location: "Kanpur, India",
    description:
      "Enhanced image processing system with accurate vehicle and license plate recognition, ensuring seamless module integration.",
    icon: React.createElement(CgWorkAlt),
    date: "Jul 2024 - Sep 2024",
  },
  {
    title: "Data Scientist Intern at United Mentors Pvt. Ltd",
    location: "Remote, India",
    description:
      "Developed Power BI dashboards for Bird Strikes data, enhancing insights on aircraft impacts, financial loss, and fatalities.",
    icon: React.createElement(LuGraduationCap),
    date: "May 2024 - Jul 2024",
  },
 
] as const;

export const projectsData = [
  {
    title: "Budget Wise",
    description:
      "A next generation budget tracking app to track all your spendings in a streamlined manner.",
    tags: ["NextJS", "TypeScript", "Prisma", "Neon", "PostgreSQL"],
    imageUrl: bwise,
    link: "https://bwise.vercel.app/",
  },
  {
    title: "Speech Transcription and Translation",
    description:
      "App to transcribe and translate audio using Whisper from OpenAI.",
    tags: ["DeepLearning", "WhisperAI", "OpenAI", "Gradio", "HuggingFace"],
    imageUrl: trans,
    link: "https://huggingface.co/spaces/diaL42/speechTranscription",
  },
  {
    title: "Github Profile Finder",
    description:
      "Helps you find any profile on Github and see it in detail without opening Github.",
    tags: ["NextJS", "RestAPI", "TailWind CSS"],
    imageUrl: ghubProfile,
    link: "https://profilelookupgit.vercel.app/",
  },
  {
    title: "PubMed Scrapper and Combined Summarizer",
    description:
      "Downloads and summarizes medical research papers from PubMed based on user keyword",
    tags: ["BioPython", "WebScrapper", "Bart", "HuggingFace"],
    imageUrl: pubmed,
    link: "https://github.com/TheGuyCheese/PubMedScrapperandCombinedSummarizer",
  },
  // {
  //   title: "Word Analytics",
  //   description:
  //     "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
  //   tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
  //   imageUrl: wordanalyticsImg,
  //   link: "https://huggingface.co/spaces/diaL42/speechTranscription",
  // },
] as const;

export const skillsData = [
  'C',
  'C++',
  'Python',
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Machine Learning",
  "Deep Learning",
  "Azure",
  "AWS",
  "Tensorflow",
  "PyTorch",
  "Hugging Face",
  "Large Language Models",
  "API",
  "PowerBI",
  "Data Analytics",
] as const;
