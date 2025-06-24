import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CoordiCard from "./CoordiCard";
import { fadeInUp, mouseParallax } from "../utils/gsapConfig";

gsap.registerPlugin(ScrollTrigger);

const Coordis = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef(null);
  const backgroundElementsRef = useRef([]);

  const team = [
    {
      name: "Padmanabhan Sridhar",
      role: "Chief Coordinator",
      image: "/team/ananya.jpg",
      color: "cyber-purple",
    },
    {
      name: "Priyanshu Talwar",
      role: "AI/ML Head and Sub Coordinator",
      image: "/team/aditi.jpg",
      color: "cyber-pink",
      social: { linkedin: "", github: "" },
    },
    {
      name: "Arjav Patel",
      role: "App Dev Head",
      image: "/team/rohan.jpg",
      color: "cyber-purple",
    },
    {
      name: "Sai Sridhar",
      role: "Web Dev Head",
      image: "/team/sridhar.jpg",
      color: "cyber-cyan",
      social: {
        linkedin: "https://linkedin.com/in/saisridhar",
        github: "https://github.com/saisridhar",
      },
    },
    {
      name: "Anirban Deshmukh",
      role: "Game Dev Head",
      image: "/team/priya.jpg",
      color: "cyber-pink",
    },
    {
      name: "Siya Goel",
      role: "UI/UX Head",
      image: "/team/kabir.jpg",
      color: "cyber-purple",
    },
    {
      name: "Shaunak Aghor",
      role: "SysCall Project Head",
      image: "/team/yash.jpg",
      color: "cyber-syan",
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
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 0.8,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
    const cleanup = mouseParallax(hero, backgroundElementsRef.current);
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
      id="team"
      ref={sectionRef}
      className="relative py-24 bg-gradient-to-b from-dark-800/80 via-dark-900 to-dark-800 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,217,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,217,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      <div
        ref={addToRefs}
        className="absolute top-40 left-10 w-64 h-64 bg-cyber-cyan/20 rounded-full blur-3xl"
      ></div>
      <div
        ref={addToRefs}
        className="absolute top-1/2 right-10 w-96 h-32 bg-cyber-purple/20 rounded-full blur-3xl"
      ></div>
      <div
        ref={addToRefs}
        className="absolute bottom-20 left-1/4 w-96 h-96 bg-cyber-pink/10 rounded-full blur-3xl"
      ></div>

      <div className="container mx-auto px-6 relative z-10">
        <h2
          ref={titleRef}
          className="text-5xl md:text-6xl font-lexend font-bold text-center text-gradient mb-16"
        >
          Our Team
        </h2>

        <div
          ref={cardsRef}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"
        >
          {team.map((coordi, index) => (
            <CoordiCard key={index} coordi={coordi} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Coordis;
