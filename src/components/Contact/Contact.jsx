import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { fadeInUp, mouseParallax } from "../../utils/gsapConfig";

const Contact = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const contactItemsRef = useRef(null);
  const socialLinksRef = useRef(null);
  const backgroundElementsRef = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const contactItems = contactItemsRef.current?.children;
    const socialLinks = socialLinksRef.current?.children;

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

    // Contact items animation
    if (contactItems) {
      gsap.fromTo(
        contactItems,
        { x: -40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: contactItemsRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    // Social links animation
    if (socialLinks) {
      gsap.fromTo(
        socialLinks,
        { y: 40, opacity: 0, scale: 0.8 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: socialLinksRef.current,
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

  const contactInfo = [
    {
      label: "Email",
      value: "devsocbpgc@gmail.com",
      icon: "📧",
      color: "cyber-cyan",
      link: "mailto:devsocbpgc@gmail.com",
    },
    
  
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
      color: "cyber-cyan",
      link: "https://github.com/Devsoc-BPGC",
      },
    
    {
      name: "LinkedIn",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      color: "cyber-cyan",
      link: "https://in.linkedin.com/company/devsoc-bpgc",
    },
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      "cyber-cyan":
        "text-cyber-cyan border-cyber-cyan/30 hover:bg-cyber-cyan/10 hover:shadow-cyber",
      "cyber-purple":
        "text-cyber-purple border-cyber-purple/30 hover:bg-cyber-purple/10 hover:shadow-purple",
      "cyber-green":
        "text-cyber-green border-cyber-green/30 hover:bg-cyber-green/10 hover:shadow-green",
    };
    return colorMap[color] || colorMap["cyber-cyan"];
  };

  return (
    <footer
      id="contact"
      ref={sectionRef}
      className="relative py-20 bg-gradient-to-t from-dark-200/50 to-transparent overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div
          ref={addToRefs}
          className="absolute top-20 left-1/2 w-64 h-64 bg-cyber-cyan/20 rounded-full blur-3xl"
        ></div>
        <div
          ref={addToRefs}
          className="absolute top-20 left-20 w-64 h-96 bg-cyber-purple/20 rounded-3xl blur-3xl"
        ></div>
        <div
          ref={addToRefs}
          className="absolute bottom-20 right-10 w-96 h-96 bg-cyber-pink/10 rounded-full blur-3xl"
        ></div>

        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyber-cyan to-transparent"></div>
        <div className="absolute bottom-10 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyber-cyan to-transparent "></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h2
            ref={titleRef}
            className="text-5xl md:text-6xl lg:text-7xl font-lexend font-bold mb-16"
          >
            <span className="text-gradient">Contact Us</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Contact Info */}
            <div ref={contactItemsRef} className="space-y-8">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="glass-card p-6 text-left hover:scale-105 transition-transform duration-300"
                  data-cursor="pointer"
                  onClick={() => {
                    if (item.link) {
                      window.open(item.link, "_blank");
                    }
                  }}
                >
                  <div className="flex items-center space-x-4">
                    <span className="text-3xl">{item.icon}</span>
                    <div>
                      <div className="text-white/60 font-rajdhani text-sm uppercase tracking-wider mb-1">
                        {item.label}
                      </div>
                      <div
                        className={`font-rajdhani text-xl font-medium ${
                          getColorClasses(item.color).split(" ")[0]
                        }`}
                      >
                        {item.value}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="space-y-8">
              <h3 className="text-2xl font-lexend font-semibold text-white/80 mb-8">
                Connect With Us
              </h3>

              <div
                ref={socialLinksRef}
                className="flex justify-center space-x-6"
              >
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    className={`w-16 h-16 glass-card flex items-center justify-center rounded-xl border transition-all duration-300 group ${getColorClasses(
                      social.color
                    )}`}
                    data-cursor="pointer"
                    onClick={() => {
                      if (social.link) {
                        window.open(social.link, "_blank");
                      }
                    }}
                  >
                    <div className="transform group-hover:scale-110 transition-transform duration-300">
                      {social.icon}
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-12 pt-8 border-t border-white/10 text-center">
                <p className="text-white font-rajdhani text-sm mt-2">
                  Made with ❤️ by the DevSoc
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
