import { useState, useEffect, useRef } from 'react';

const CreditsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Optimize by unobserving after trigger
        }
      },
      { threshold: 0.05, rootMargin: '150px' } // Trigger much earlier for smoother loading
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const credits = [
    {
      category: "Production Team",
      items: [
        { role: "Executive Producers", name: "Suzain Khan, Yashwanth R & Sharath Kumar BI"},
        { role: "Creative Direction, Research & Content Development", name: "Suzain Khan, Yashwanth R & Sharath Kumar BI" },
        { role: "Concept/Topic Development", name: "Suzain Khan" },
        { role: "Scriptwriting & Episode Structure", name: "Suzain Khan & Sharath Kumar BI" },
        { role: "Audio Engineering & Post-Production", name: "Sharath Kumar BI" },
        { role: "Video Editing & Animations", name: "Sharath Kumar BI & Suzain Khan" }
        
      ]
    },
    {
      category: "Technical Contributors",
      items: [
        { role: "Website Development & Digital Publishing", name: "Suzain Khan" },
        { role: "Visual Design & Brand Assets", name: "Yashwanth R" },
        { role: "Tool Integrations & Episode Planning", name: "Suzain Khan, Yashwanth R & Sharath Kumar BI" },
        { role: "Information Gathering", name: "Yashwanth R & Suzain Khan" },
        { role: "Thumbnail Design & Cover Visuals", name: "Yashwanth R & Sharath Kumar BI" },
        { role: "AI Tools & No-Code Platforms Review", name: "Suzain Khan" }
      ]
    },
    {
      category: "Special Thanks",
      items: [
        { role: "AI Tools Showcase", name: "bolt.new, Cursor AI, Replit, v0 by Vercel, GitHub Copilot, Lovable" },
        { role: "Development & Deployment Platform", name: "Lovable AI, Bolt.New, Netlify" },
        { role: "Domain Platform", name: "Hostinger" },
        { role: "Project Assigned", name: "Madhura Yadav MP" }
      ]
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 px-6 bg-gradient-hero relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-1/4 w-48 h-48 bg-gradient-primary rounded-full blur-3xl opacity-10"></div>
        <div className="absolute bottom-20 right-1/4 w-64 h-64 bg-gradient-secondary rounded-full blur-3xl opacity-10"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Credits</span> & Acknowledgments
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Recognizing the talented individuals and innovative tools that made this project possible
          </p>
        </div>

        {/* Credits grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {credits.map((section, index) => (
            <div
              key={section.category}
              className={`glass rounded-3xl p-8 transition-all duration-600 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100 + 200}ms` }}
            >
              <h3 className="text-xl font-bold mb-6 text-primary">{section.category}</h3>
              <div className="space-y-4">
                {section.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="border-l-2 border-muted pl-4">
                    <div className="text-sm font-semibold text-foreground">{item.role}</div>
                    <div className="text-sm text-muted-foreground">{item.name}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

       {/* Footer message */}
<div
  className={`text-center transition-all duration-600 ${
    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
  }`}
  style={{ transitionDelay: '500ms' }}
>
  <div className="glass-card rounded-3xl p-8 md:p-10 max-w-4xl mx-auto shadow-lg">
    <h3 className="text-2xl md:text-3xl font-extrabold mb-5 gradient-text">
      A Note from the Creators
    </h3>
    <p className="text-muted-foreground leading-relaxed mb-5 text-sm md:text-base">
      This podcast and website reflect our dedication to exploring the
      cutting edge of <span className="font-semibold">AI-powered development</span>.  
      We believe the future of coding is not about replacing humans, but about
      blending human creativity with AI precision to unlock extraordinary
      possibilities.
    </p>
    <p className="text-muted-foreground leading-relaxed mb-8 text-sm md:text-base">
      A special shout-out to the <span className="font-semibold">Lovable & Bolt</span> platform —
      it empowered us to create this site using natural language alone,  
      perfectly demonstrating the principles we share in our podcast.
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
      <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-primary text-white shadow-md">
        <span className="text-sm">Built with ❤️ AI</span>
      </div>
      <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-secondary text-white shadow-md">
        <span className="text-sm">🚀 Powered by Team-YSS CodeMasters</span>
      </div>
    </div>
  </div>
</div>

        {/* Copyright */}
        <div className={`text-center mt-12 transition-all duration-600 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '600ms' }}>
          <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-6"></div>
          <p className="text-sm text-muted-foreground">
            © 2025 Team- YSS CodeMasters. All rights reserved. | Vibe Coding Podcast
          </p>
        </div>
      </div>
    </section>
  );
};

export default CreditsSection;