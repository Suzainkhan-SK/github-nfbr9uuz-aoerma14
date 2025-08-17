import { useState, useEffect, useRef } from 'react';


const TeamSection = () => {
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
      { threshold: 0.1, rootMargin: '50px' } // Trigger earlier for smoother loading
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const teamMembers = [
    {
      name: "Yashwanth R",
      role: "Podcast Host",
      avatar: "/YashwanthPICPodcast.jpg",
      isCustomLayout: true, // flag to identify custom layout
      specialties: ["Podcast Hosting", "Public Speaking", "Tech Enthusiasm"],
      gradient: "bg-gradient-primary",
      profile: [
        
        { icon: "🏫", label: "Class", value: "III BCA V SEM" },
        { icon: "🆔", label: "Registration No.", value: "U29XB23SO270" },
        { icon: "🏛️", label: "College", value: "Government Science College,(Autonomous) Hassan" }
      ]
    },
    {
      name: "Suzain Khan",
      role: "The Tech Expert",
      avatar: "/suzainPodcast.png",
      isCustomLayout: true, // flag to identify custom layout
      specialties: ["Podcast Hosting", "Public Speaking", "Tech Enthusiasm"],
      gradient: "bg-gradient-secondary",
      profile: [
        
        { icon: "🏫", label: "Class", value: "III BCA V SEM" },
        { icon: "🆔", label: "Registration No.", value: "U29XB23SO242" },
        { icon: "🏛️", label: "College", value: "Government Science College,(Autonomous) Hassan" }
      ]
    },
    {
      name: "Sharath Kumar BI",
      role: "The Curious Mind",
      avatar: "/SharathPICPodcast.jpg",
      isCustomLayout: true, // flag to identify custom layout
      specialties: ["Podcast Hosting", "Public Speaking", "Tech Enthusiasm"],
      gradient: "bg-gradient-accent",
      profile: [
        
        { icon: "🏫", label: "Class", value: "III BCA V SEM" },
        { icon: "🆔", label: "Registration No.", value: "U29XB23SO426" },
        { icon: "🏛️", label: "College", value: "Government Science College,(Autonomous) Hassan" }
      ]
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 px-6 bg-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-primary rounded-full blur-xl opacity-15"></div>
        <div className="absolute bottom-20 left-10 w-24 h-24 bg-gradient-secondary rounded-full blur-xl opacity-15"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <div
          className={`text-center mb-16 transition-all duration-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Meet Our <span className="gradient-text">Expert Panel</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Three industry leaders sharing insights on the future of AI-powered development
          </p>
        </div>

        {/* Team grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className={`glass rounded-3xl p-8 text-center interactive-card transition-all duration-600 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150 + 200}ms` }}
            >
              {/* Avatar with gradient border */}
              <div className="relative mb-6">
                <div className={`w-32 h-32 rounded-full ${member.gradient} p-1 mx-auto`}>
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-full h-full rounded-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className={`absolute -inset-2 ${member.gradient} rounded-full opacity-30 blur-lg`}></div>
              </div>

              {/* Member info */}
              <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
              <p className="text-primary font-semibold mb-4">{member.role}</p>

              {/* Description - Conditional Rendering */}
              {member.isCustomLayout ? (
                <div className="text-left mb-6 space-y-2">
                  {member.profile.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 leading-relaxed">
                      <span>{item.icon}</span>
                      <span>
                        <strong>{item.label}:</strong> {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {member.description}
                </p>
              )}

              {/* Specialties */}
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
