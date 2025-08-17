import { useState, useEffect, useRef } from 'react';

const ArticleSection = () => {
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
      { threshold: 0.05, rootMargin: '100px' } // Trigger much earlier for smoother loading
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const [expandedTool, setExpandedTool] = useState<string | null>(null);

  const tools = [
    { 
      name: "bolt.new", 
      description: "AI-powered full-stack development platform", 
      category: "Platform",
      details: "Revolutionary platform that generates complete full-stack applications from natural language descriptions. Build complex web apps with databases, authentication, and deployment in minutes.",
      samplePrompt: "Create a social media app with user authentication, post creation, real-time comments, and a dark mode toggle using React and Firebase",
      url: "https://bolt.new/?rid=vdyalr"
    },
    { 
      name: "Lovable", 
      description: "Visual web app builder with AI assistance", 
      category: "Builder",
      details: "Advanced visual development platform that combines drag-and-drop interface building with powerful AI code generation. Perfect for rapid prototyping and production-ready applications.",
      samplePrompt: "Build a modern e-commerce dashboard with product management, analytics charts, order tracking, and responsive design using React and TypeScript",
      url: "https://lovable.dev/invite/c8f745a9-51bd-41ac-9947-4530159eb5c5"
    },
    { 
      name: "Cursor AI", 
      description: "AI-first code editor with intelligent suggestions", 
      category: "Editor",
      details: "Next-generation code editor with AI that understands your entire codebase. Provides context-aware suggestions, refactoring, and can write entire functions based on comments.",
      samplePrompt: "Refactor this authentication system to use JWT tokens instead of sessions, update all related middleware and add proper error handling",
      url: "https://cursor.sh"
    },
    { 
      name: "GitHub Copilot", 
      description: "AI pair programmer for code completion", 
      category: "Assistant",
      details: "AI-powered coding assistant trained on billions of lines of code. Suggests entire functions, helps with debugging, and accelerates development across multiple programming languages.",
      samplePrompt: "// Create a custom React hook for managing form state with validation, error handling, and submission logic",
      url: "https://github.com/features/copilot"
    },
    { 
      name: "Replit", 
      description: "Collaborative coding platform with AI features", 
      category: "Platform",
      details: "Cloud-based development environment with AI-powered coding assistance. Build, run, and deploy applications directly in the browser with real-time collaboration features.",
      samplePrompt: "Create a multiplayer web game with real-time synchronization, player rooms, and leaderboard using WebSockets and Node.js",
      url: "https://replit.com"
    },
    { 
      name: "v0 by Vercel", 
      description: "AI-powered UI component generator", 
      category: "Generator",
      details: "AI tool specifically designed for generating React components and UI layouts. Creates pixel-perfect, responsive components from text descriptions with Tailwind CSS styling.",
      samplePrompt: "Generate a modern pricing cards component with three tiers, animated hover effects, popular badge, and mobile-responsive design",
      url: "https://v0.dev"
    }
  ];

  const benefits = [
    {
      title: "Lightning-Fast Prototyping",
      description: "Go from concept to functional app in record time with AI-assisted builds.",
      icon: "⚡"
    },
    {
      title: "Creative Flow Unlocked",
      description: "Stay in the zone while AI generates ideas, code snippets, and design suggestions.",
      icon: "🎨"
    },
    {
      title: "Effortless Code Maintenance",
      description: "AI refactors, optimizes, and cleans your code—so you focus on big-picture innovation.",
      icon: "🛠️"
    },
    {
      title: "Future-Proof Development",
      description: "Adopt an approach that evolves with cutting-edge AI advancements.",
      icon: "🚀"
    }
  ];

  const disadvantages = [
    {
      title: "Over-Reliance on AI",
      description: "Developers may become dependent on AI, potentially weakening problem-solving skills over time.",
      icon: "⚠️"
    },
    {
      title: "Context Misunderstanding",
      description: "AI can misinterpret requirements or miss subtle business logic, leading to mistakes.",
      icon: "🧩"
    },
    {
      title: "Code Quality Variability",
      description: "Generated code might not always follow optimal architecture or maintainability standards.",
      icon: "📉"
    },
    {
      title: "Security Risks",
      description: "AI-generated code can unintentionally introduce vulnerabilities if not reviewed carefully.",
      icon: "🔒"
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 px-6 bg-background relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Enhanced Header */}
        <div className={`text-center mb-12 md:mb-16 transition-all duration-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 md:mb-6">
            🎙️ Vibe Coding: <span className="gradient-text">The Future Without Code?</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            A comprehensive guide to the revolutionary approach that's transforming how developers build software
          </p>
        </div>

        {/* Layout grid */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-6 md:space-y-8">
            {/* What is Vibe Coding */}
            <div className={`glass-card rounded-3xl p-6 md:p-8 transition-all duration-600 hover-lift ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '100ms' }}>
              <h3 className="text-xl md:text-2xl font-bold mb-4 gradient-text">What is Vibe Coding?</h3>
              <p className="text-muted-foreground leading-relaxed mb-4 text-sm md:text-base">
                Vibe Coding represents a paradigm shift in software development, where artificial intelligence acts as a real-time creative collaborator rather than just a coding assistant. It’s about staying in your creative flow while AI intuitively handles the heavy lifting—writing boilerplate code, automating repetitive work, and suggesting intelligent solutions instantly.
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                This methodology blends human imagination with AI precision, enabling developers to focus on high-level problem solving while AI manages the tedious aspects of coding. The result is a fluid, frictionless, and inspiring development process—where building software feels less like labor and more like creating art.
              </p>
            </div>

            {/* Key Benefits */}
            <div className={`transition-all duration-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '200ms' }}>
              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 gradient-text-secondary">Key Advantages</h3>
              <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                {benefits.map((benefit) => (
                  <div key={benefit.title} className="glass-card rounded-2xl p-4 md:p-6 interactive-card">
                    <div className="text-2xl md:text-3xl mb-3">{benefit.icon}</div>
                    <h4 className="text-base md:text-lg font-semibold mb-2">{benefit.title}</h4>
                    <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Disadvantages */}
            <div className={`transition-all duration-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '300ms' }}>
              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-blue-500">Disadvantages/Challenges</h3>
              <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                {disadvantages.map((disadvantage) => (
                  <div key={disadvantage.title} className="glass-card rounded-2xl p-4 md:p-6 interactive-card">
                    <div className="text-2xl md:text-3xl mb-3">{disadvantage.icon}</div>
                    <h4 className="text-base md:text-lg font-semibold mb-2">{disadvantage.title}</h4>
                    <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">{disadvantage.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Best Practices */}
            <div className={`glass-card rounded-3xl p-6 md:p-8 transition-all duration-600 hover-lift ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '400ms' }}>
              <h3 className="text-xl md:text-2xl font-bold mb-4 gradient-text-accent">Best Practices & Tips</h3>
              <div className="space-y-3 md:space-y-4">
                {[
                  "🎯 Begin with a crystal-clear vision — define your goals and let AI break them into actionable steps.",
                  "🗣️ Speak naturally — describe features in plain language, and let AI translate your intent into clean code.",
                  "📚 Learn the basics — understanding core programming concepts makes AI-assisted coding far more effective.",
                  "🔍 Review everything — treat AI as a co-pilot, verifying and refining suggestions for best results.",
                  "🛠️ Mix and match — use different AI tools for design, coding, and debugging to maximize strengths."
                ].map((tip, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 pulse-glow ${i % 3 === 0 ? 'bg-primary' : i % 3 === 1 ? 'bg-secondary' : 'bg-accent'}`}></div>
                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed">{tip}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Industry Trends */}
            <div className={`glass-card rounded-3xl p-6 md:p-8 transition-all duration-600 hover-lift ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '500ms' }}>
              <h3 className="text-xl md:text-2xl font-bold mb-4 gradient-text">Industry Impact & Trends</h3>
              <p className="text-muted-foreground leading-relaxed mb-4 text-sm md:text-base">
                Artificial Intelligence is no longer a futuristic concept—it's becoming a core pillar of software development. Organizations across industries are reporting <span className="font-semibold">30–50% gains in developer productivity</span> when AI-powered tools are seamlessly integrated into workflows.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4 text-sm md:text-base">
                This evolution is <span className="font-semibold">democratizing coding</span>, enabling beginners to create functional applications quickly while empowering experienced developers to focus on complex, high-impact solutions. AI is not replacing developers—it’s becoming their most valuable collaborator.
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                Looking ahead, expect AI to move beyond simple code suggestions into <span className="font-semibold">intelligent, context-aware systems</span> that understand project goals, team preferences, and business requirements—ultimately transforming how we imagine, design, and deliver software.
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6 md:space-y-8">
            <div className={`glass-card rounded-3xl p-4 md:p-6 transition-all duration-600 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`} style={{ transitionDelay: '150ms' }}>
              <h3 className="text-lg md:text-xl font-bold mb-4 gradient-text-secondary">Popular AI Tools</h3>
              <div className="space-y-3">
                {tools.map((tool) => (
                  <div key={tool.name} 
                       className={`tool-card rounded-xl p-3 md:p-4 cursor-pointer transition-all duration-200 ${expandedTool === tool.name ? 'expanded' : ''}`}
                       onClick={() => setExpandedTool(expandedTool === tool.name ? null : tool.name)}>
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-sm md:text-base">{tool.name}</h4>
                      <div className="flex items-center gap-2">
                        <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">{tool.category}</span>
                        <div className={`transition-transform duration-200 ${expandedTool === tool.name ? 'rotate-180' : ''}`}>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <p className="text-xs md:text-sm text-muted-foreground mb-2">{tool.description}</p>
                    <div className={`overflow-hidden transition-all duration-300 ${expandedTool === tool.name ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                      <div className="pt-3 border-t border-border/50">
                        <p className="text-xs md:text-sm text-muted-foreground leading-relaxed mb-3">{tool.details}</p>
                        <div className="bg-muted/50 rounded-lg p-3 mb-3">
                          <p className="text-xs font-semibold text-secondary mb-1">Sample Prompt:</p>
                          <p className="text-xs text-muted-foreground font-mono leading-relaxed">"{tool.samplePrompt}"</p>
                        </div>
                        <a href={tool.url} target="_blank" rel="noopener noreferrer"
                           className="inline-flex items-center gap-2 text-xs text-primary hover:text-primary-glow transition-colors duration-200"
                           onClick={(e) => e.stopPropagation()}>
                          Try {tool.name}
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArticleSection;
