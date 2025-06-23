import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProjectCard from "./ProjectCard";
import { fadeInUp, mouseParallax } from "../utils/gsapConfig";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const backgroundElementsRef = useRef([]);
  const cardsRef = useRef(null);

  const projects = [
    {
      id: "dev-portal",
      title: "Developer Portal",
      description:
        "A central hub for DevSoc members to manage profiles, access resources, and track tasks.",
      techStack: ["Next.js", "Tailwind", "MongoDB"],
      link: "https://github.com/devsoc/portal",
      color: "cyber-cyan",
    },
    {
      id: "event-scheduler",
      title: "Event Scheduler",
      description:
        "A full-stack tool to create, manage, and share tech events and workshops.",
      techStack: ["React", "Express", "PostgreSQL"],
      link: "",
      color: "cyber-purple",
    },
    {
      id: "connecthub",
      title: "ConnectHub",
      description:
        "A real-time chat and video call platform built for DevSoc internal use.",
      techStack: ["Socket.io", "Node.js", "WebRTC"],
      link: "",
      color: "cyber-green",
    },
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const cards = cardsRef.current?.children;

    gsap.fromTo(
      title,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    if (cards) {
      gsap.fromTo(
        cards,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
    // Parallax effect for section background
    gsap.to(section, {
      backgroundPosition: "50% 100%",
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
    const cleanup = mouseParallax(hero, backgroundElementsRef.current)
    backgroundElementsRef.current.forEach((element, index) => {
      gsap.to(element, {
        y: "random(-20, 20)",
        x: "random(-15, 15)",
        rotation: "random(-180, 180)",
        duration: "random(3, 6)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: index * 0.2,
      });
    });

    return cleanup;
  }, []);

  const addToRefs = (el) => {
    if (el && !backgroundElementsRef.current.includes(el)) {
      backgroundElementsRef.current.push(el);
    }
  };

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-24 bg-gradient-to-b from-dark-900 via-dark-800/80 to-dark-900"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,217,255,0.05),transparent)]"></div>
      <div
        ref={addToRefs}
        className="absolute top-1/2 left-1/2 w-64 h-96 bg-cyber-purple/20 rounded-3xl blur-3xl"
      ></div>

      <div className="container mx-auto px-6 relative z-10">
        <h2
          ref={titleRef}
          className="text-5xl md:text-6xl font-lexend font-bold text-center text-gradient mb-16"
        >
          Our Projects
        </h2>

        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
