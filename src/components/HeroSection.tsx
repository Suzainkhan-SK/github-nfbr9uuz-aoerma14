import { useState, useEffect } from 'react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Optimize initial load
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const fadeInClass = (delay: number) =>
    `transition-all duration-1000 ease-out ${
      isVisible ? `opacity-100 translate-y-0` : `opacity-0 translate-y-8`
    }`;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Animated background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-12 left-12 w-40 h-40 md:w-64 md:h-64 bg-gradient-primary rounded-full opacity-15 animate-float blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 md:w-48 md:h-48 bg-gradient-secondary rounded-full opacity-15 animate-float-slow blur-2xl"></div>
        <div className="absolute top-1/3 left-1/2 w-24 h-24 md:w-36 md:h-36 bg-gradient-accent rounded-full opacity-20 animate-float-slow blur-xl"></div>
        <div className="absolute inset-0 bg-gradient-mesh opacity-10"></div>
      </div>

      <div className="relative z-10 text-center px-4 md:px-6 max-w-6xl mx-auto">
        {/* Logo */}
        <div className={`${fadeInClass(200)} mb-8`} style={{ transitionDelay: '200ms' }}>
          <div className="relative inline-block">
            <img
              src={"https://i.ibb.co/NdQHK4cv/podcast-logo.jpg"}
              alt="Vibe Coding Podcast"
              className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 mx-auto rounded-full shadow-lg border-4 border-white/20 hover:scale-105 transition-transform duration-300"
              loading="eager"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-primary rounded-full opacity-30 animate-pulse-glow"></div>
          </div>
        </div>

        {/* Heading */}
        <h2
          className={`${fadeInClass(300)} text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 text-foreground`}
          style={{ transitionDelay: '300ms' }}
        >
          WELCOME TO
        </h2>
        <h1
          className={`${fadeInClass(400)} text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-extrabold mb-6`}
          style={{ transitionDelay: '400ms' }}
        >
          <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-shimmer bg-[length:200%_100%]">
            VIBE CODING
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className={`${fadeInClass(500)} text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-10`}
          style={{ transitionDelay: '500ms' }}
        >
          <span className="gradient-text-secondary">
            The Future of AI-Powered Development
          </span>
        </p>

        {/* Cards */}
        <div className="flex flex-col items-center gap-6">
          {/* Presented By */}
          <div
            className={`${fadeInClass(600)} glass-card w-full max-w-xl p-6 md:p-8 rounded-3xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all border border-white/10`}
            style={{ transitionDelay: '600ms' }}
          >
            <p className="text-sm md:text-base font-medium text-primary mb-1">
              🏆 Presented by
            </p>
            <p className="text-xl md:text-2xl font-bold gradient-text-accent">
              Team- YSS CodeMasters
            </p>
          </div>

          {/* Assigned By */}
          <div
            className={`${fadeInClass(700)} glass-card w-full max-w-xl p-6 md:p-8 rounded-3xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all border border-white/10`}
            style={{ transitionDelay: '700ms' }}
          >
            <p className="text-sm md:text-base font-medium text-primary mb-1">
              📋 Assigned by
            </p>
            <p className="text-xl md:text-2xl font-bold gradient-text-accent">
              Madhura Yadav MP
            </p>
          </div>

          {/* Project Details */}
          <div
            className={`${fadeInClass(800)} glass-card w-full max-w-xl p-8 md:p-10 rounded-3xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all border border-white/10 text-left`}
            style={{ transitionDelay: '800ms' }}
          >
            {/* Title */}
            <p className="text-sm md:text-base font-medium text-primary mb-2 flex items-center gap-2">
              🎯 <span>Project Title</span>
            </p>
            <p className="text-lg md:text-2xl font-bold gradient-text-accent mb-4">
              🚀 Vibe Coding: Future Without Code?
            </p>

            {/* Type */}
            <p className="text-sm md:text-base font-medium text-primary mb-2 flex items-center gap-2">
              📂 <span>Project Type</span>
            </p>
            <p className="text-lg md:text-2xl font-bold gradient-text-accent mb-6">
              🎙️ Podcast
            </p>

            {/* Highlights */}
            <div className="mt-4 p-4 rounded-2xl bg-white/5 border border-white/10">
              <p className="text-sm text-primary mb-1">✨ Highlights</p>
              <ul className="list-disc pl-5 space-y-1 text-primary/90">
                <li>💡 Innovative no-code concepts</li>
                <li>🎤 Hosted by passionate creators</li>
                <li>🌎 Exploring the future of development</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className={`${fadeInClass(900)} mt-10 flex flex-wrap justify-center gap-3`} style={{ transitionDelay: '900ms' }}>
          {[
            { text: '⚡ Vibe-Coding', color: 'text-secondary' },
            { text: '🤖 AI Agents', color: 'text-accent' },
            { text: '🚀 Future Tech', color: 'text-primary' },
          ].map((item, idx) => (
            <div
              key={idx}
              className={`glass px-4 py-2 rounded-full text-sm font-medium ${item.color} hover:scale-105 transition-transform duration-200`}
            >
              {item.text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
