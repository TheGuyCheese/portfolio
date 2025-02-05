"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3 text-justify">
        I'm a <span className="font-bold">Machine Learning and Deep Learning researcher</span> {" "}
        pursuing a Bachelor's Degree in <span className="font-medium">Computer Science</span> from Amity University.
        I have a strong foundation in AI research, software development, and technical writing, with a focus on solving real-world problems using cutting-edge technology.{" "}
        I have worked extensively on <span className="font-bold italic">Deep Learning, NLP, and Computer Vision</span>, including fine-tuning transformer-based models for Sign Language Recognition and Speech Transcription & Translation. 
        My internship at <span className="font-bold italic">Oriental InfraTrust</span> involved developing image recognition systems for 
        vehicle and license plate detection, improving image processing pipelines. As a technical 
        content writer at <span className="font-bold italic">Aadox</span>, I have authored over <span className="font-bold italic">100,000 words</span> on AI, software engineering, 
        and emerging technologies.
      </p>

      <p className="mb-3 text-justify">
      I have won multiple hackathons, including <span className="font-bold italic">AI-Fusion by Pickl.AI and Hack 
      to Crack 1.0 (TensorFlow User Group Lucknow)</span>, demonstrating my ability to tackle 
      complex AI challenges. My technical expertise includes <span className="font-bold italic">Python, C++, TensorFlow, 
      OpenCV, SQL, LaTeX, and API integration (Hugging Face, OpenAI, Gemini).</span>
      </p>

      <p className="text-justify">
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and reading books. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">physcology and philosophy</span>.
      </p>
    </motion.section>
  );
}
