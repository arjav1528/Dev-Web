import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import VerticalCard from "./VerticalCard";
import { fadeInUp, mouseParallax } from "../../utils/gsapConfig";

const Verticals = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef(null);
  const backgroundElementsRef = useRef([]);

  const verticals = [
    {
      id: "web",
      title: "Web Development",
      description:
        "Building responsive and dynamic web applications using cutting-edge technologies like React, Vue, and modern frameworks.",
      icon: "🌐",
      color: "cyber-cyan",
      technologies: ["React", "Vue.js", "Node.js", "TypeScript"],
    },
    {
      id: "app",
      title: "App Development",
      description:
        "Creating innovative mobile solutions for iOS and Android platforms with React Native and Flutter.",
      icon: "📱",
      color: "cyber-purple",
      technologies: ["React Native", "Flutter", "Swift", "Kotlin"],
    },
    {
      id: "ai",
      title: "AI & Machine Learning",
      description:
        "Exploring artificial intelligence, machine learning algorithms, and deep learning technologies.",
      icon: "🤖",
      color: "cyber-pink",
      technologies: ["Python", "TensorFlow", "PyTorch", "Scikit-learn"],
    },
    {
      id: "game",
      title: "Game Development",
      description:
        "Crafting immersive gaming experiences using Unity and Unreal Engine, with a focus on graphics and gameplay.",
      icon: "🎮",
      color: "cyber-pink",
      technologies: ["Unity", "Unreal Engine", "C#", "C++"],
    },
    {
      id: "UXUI",
      title: "UX/UI Design",
      description:
        "Designing user-friendly interfaces and experiences with a focus on usability and aesthetics.",
      icon: "🎨",
      color: "cyber-cyan",
      technologies: ["Figma", "Adobe XD", "Sketch", "InVision"],
    },
    {
      id: "sys",
      title: "Project Syscall",
      description:
        "A comprehensive project focused on system calls, exploring low-level programming and operating system interactions.",
      icon: "🔧",
      color: "cyber-purple",
      technologies: ["C", "Linux", "Assembly", "System Programming"],
    },
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const cards = cardsRef.current?.children;

    // Title animation
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

    // Cards animation
    if (cards) {
      gsap.fromTo(
        cards,
        { y: 80, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
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
      id="verticals"
      ref={sectionRef}
      className="relative py-20 bg-gradient-to-b from-transparent via-dark-100/50 to-transparent overflow-hidden"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,217,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,217,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      <div className="absolute inset-0">
        <div
          ref={addToRefs}
          className="absolute top-20 left-10 w-64 h-64 bg-cyber-cyan/20 rounded-full blur-3xl"
        ></div>
        <div
          ref={addToRefs}
          className="absolute top-1/2 right-10 w-96 h-32 bg-cyber-purple/20 rounded-full blur-3xl"
        ></div>
        <div
          ref={addToRefs}
          className="absolute bottom-20 left-1/4 w-96 h-96 bg-cyber-pink/10 rounded-full blur-3xl"
        ></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <h2
          ref={titleRef}
          className="text-5xl md:text-6xl lg:text-7xl font-lexend font-bold text-center mb-20"
        >
          <span className="text-gradient">Our Verticals</span>
        </h2>

        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {verticals.map((vertical, index) => (
            <VerticalCard key={vertical.id} vertical={vertical} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Verticals;
