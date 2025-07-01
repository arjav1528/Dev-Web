import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { fadeInUp, mouseParallax } from "../../utils/gsapConfig";

const About = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const statsRef = useRef(null);
  const hologramRef = useRef(null);
  const backgroundElementsRef = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const text = textRef.current;
    const stats = Array.from(statsRef.current?.children || []);
    const hologram = hologramRef.current;

    // Title animation
    gsap.fromTo(
      title,
      { y: 60, opacity: 0 },
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

    // Text animation
    gsap.fromTo(
      text,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Stats animation
    if (stats.length > 0) {
      gsap.fromTo(
        stats,
        { y: 30, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Animate stat numbers
      gsap.fromTo(
        stats[0].querySelector(".stat-number1"),
        { textContent: 0 },
        {
          textContent: 500,
          duration: 4,
          ease: "power2.out",
          snap: { textContent: 1 },
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          onComplete: () => {
            stats[0].querySelector(".stat-number1").textContent = "500+";
          },
        }
      );
      gsap.fromTo(
        stats[1].querySelector(".stat-number2"),
        { textContent: 0 },
        {
          textContent: 50,
          duration: 4,
          ease: "power2.out",
          snap: { textContent: 1 },
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          onComplete: () => {
            stats[1].querySelector(".stat-number2").textContent = "50+";
          },
        }
      );
      gsap.fromTo(
        stats[2].querySelector(".stat-number3"),
        { textContent: 0 },
        {
          textContent: 10,
          duration: 4,
          ease: "power2.out",
          snap: { textContent: 1 },
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          onComplete: () => {
            stats[2].querySelector(".stat-number3").textContent = "10+";
          },
        }
      );
    }

    // Hologram animation
    if (hologram) {
      const rings = hologram.querySelectorAll(".hologram-ring");
      const core = hologram.querySelector(".hologram-core");

      // Continuous rotation
      gsap.to(rings, {
        rotation: 360,
        duration: 10,
        repeat: -1,
        ease: "none",
        stagger: 0.2,
      });

      // Core pulsing
      gsap.to(core, {
        scale: 1.2,
        opacity: 0.8,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Floating animation
      gsap.to(hologram, {
        y: -20,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
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
      id="about"
      ref={sectionRef}
      className="relative py-20 bg-gradient-to-b from-transparent via-dark-100/30 to-transparent overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div
          ref={addToRefs}
          className="absolute top-20 left-10 w-64 h-64 bg-cyber-cyan/20 rounded-full blur-3xl"
        ></div>
        <div
          ref={addToRefs}
          className="absolute bottom-20 right-10 w-96 h-96 bg-cyber-purple/20 rounded-full blur-3xl"
        ></div>
        <div
          ref={addToRefs}
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,217,255,0.03)_0%,transparent_50%)]"
        ></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Content */}
          <div className="space-y-12">
            <h2
              ref={titleRef}
              className="text-5xl md:text-6xl lg:text-7xl font-lexend font-bold"
            >
              <span className="text-gradient">About DevSoc</span>
            </h2>

            <div ref={textRef} className="space-y-6">
              <p className="text-xl md:text-xl text-white/80 font-rajdhani leading-relaxed">
                Originally starting as the Mobile Applications Club, the society
                has evolved over the years to include proficient developers
                specializing in various fields such as App Development, Web
                Development, Game Development, UI/UX Designing, Artificial
                Intelligence and Machine Learning and Systems Calling. We are a vibrant community of
                passionate developers driven by a shared love for coding and
                technology.
              </p>

              <p className="text-lg text-white/60 font-rajdhani leading-relaxed">
                Whether you're a beginner taking your first steps or an
                experienced developer looking to broaden your expertise, DevSoc
                provides the resources, guidance, and collaborative
                opportunities to help you thrive and expand the horizons. DevSoc
                is also primarily responsible for developing innovative
                technical solutions which aims solve the challenges on campus
                and beyond.
              </p>
            </div>

            {/* Stats */}
            <div ref={statsRef} className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="stat-number1 text-4xl md:text-5xl font-lexend font-bold text-cyber-cyan mb-2">
                  500<p>+</p>
                </div>
                <div className="text-white/60 font-rajdhani font-medium">
                  Members
                </div>
              </div>
              <div className="text-center">
                <div className="stat-number2 text-4xl md:text-5xl font-lexend font-bold text-cyber-cyan mb-2">
                  50<p>+</p>
                </div>
                <div className="text-white/60 font-rajdhani font-medium">
                  Projects
                </div>
              </div>
              <div className="text-center">
                <div className="stat-number3 text-4xl md:text-5xl font-lexend font-bold text-cyber-cyan mb-2">
                  10+<p>+</p>
                </div>
                <div className="text-white/60 font-rajdhani font-medium">
                  Events
                </div>
              </div>
            </div>
          </div>

          {/* Hologram Visualization */}
          <div className="flex justify-center lg:justify-end">
            <div
              ref={hologramRef}
              className="relative w-96 h-96 flex items-center justify-center"
            >
              {/* Outer rings */}
              <div className="hologram-ring absolute inset-0 border-2 border-cyber-cyan rounded-full"></div>
              <div className="hologram-ring absolute inset-8 border border-white rounded-full"></div>
              <div className="hologram-ring absolute inset-16 border border-cyber-cyan rounded-full"></div>

              {/* Core */}
              <div className="hologram-core relative w-32 h-32 bg-gradient-to-r from-cyber-cyan/20 to-white/30 rounded-full flex items-center justify-center backdrop-blur-sm">
                <div className="w-16 h-16 bg-gradient-to-r from-cyber-cyan to-white rounded-full animate-pulse"></div>
              </div>

              {/* Data points */}
              <div className="absolute top-12 left-12 w-4 h-4 bg-cyber-cyan rounded-full animate-pulse"></div>
              <div className="absolute top-20 right-16 w-3 h-3 bg-white rounded-full animate-pulse delay-75"></div>
              <div className="absolute bottom-16 left-20 w-2 h-2 bg-white rounded-full animate-pulse delay-150"></div>
              <div className="absolute bottom-12 right-12 w-4 h-4 bg-cyber-cyan rounded-full animate-pulse delay-300"></div>

              {/* Connecting lines */}
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 100 100"
              >
                <defs>
                  <linearGradient
                    id="lineGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#00D9FF" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.2" />
                  </linearGradient>
                </defs>
                <line
                  x1="20"
                  y1="20"
                  x2="50"
                  y2="50"
                  stroke="url(#lineGradient)"
                  strokeWidth="1"
                />
                <line
                  x1="80"
                  y1="25"
                  x2="50"
                  y2="50"
                  stroke="url(#lineGradient)"
                  strokeWidth="1"
                />
                <line
                  x1="25"
                  y1="80"
                  x2="50"
                  y2="50"
                  stroke="url(#lineGradient)"
                  strokeWidth="1"
                />
                <line
                  x1="80"
                  y1="80"
                  x2="50"
                  y2="50"
                  stroke="url(#lineGradient)"
                  strokeWidth="1"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
