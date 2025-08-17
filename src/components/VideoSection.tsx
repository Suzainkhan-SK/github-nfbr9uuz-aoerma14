import { useState, useEffect, useRef } from 'react';

const VideoSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Video ID and custom thumbnail
  const videoId = "Z-XooK9Et_A";
  const customThumbnailUrl = "https://i.ibb.co/N02rhR8/vibecodingthumbnail.jpg";

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

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  return (
    <section
      ref={sectionRef}
      className="py-20 px-6 bg-gradient-hero relative overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-primary rounded-full opacity-8 animate-float blur-3xl"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-accent rounded-full opacity-8 animate-float blur-3xl"
          style={{ animationDelay: '3s' }}
        ></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <div
          className={`text-center mb-12 transition-all duration-600 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Watch the <span className="gradient-text">Full Episode</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Dive deep into the world of AI-powered development with our expert
            panel discussion
          </p>
        </div>

        {/* Video player container */}
        <div
          className={`glass rounded-3xl overflow-hidden shadow-primary transition-all duration-600 delay-200 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <div className="relative aspect-video">
            {!isPlaying ? (
              // Custom Thumbnail
              <div className="absolute inset-0">
                <img
                  src={customThumbnailUrl}
                  alt="Vibe Coding Episode Thumbnail"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                {/* Overlay with play button */}
                <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center">
                  <button
                    onClick={handlePlayClick}
                    className="group mb-6 relative"
                  >
                    <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center shadow-primary hover:shadow-accent transition-all duration-200 group-hover:scale-110">
                      <svg
                        className="w-8 h-8 text-white ml-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                    <div className="absolute inset-0 bg-gradient-primary rounded-full opacity-50 animate-pulse-glow"></div>
                  </button>
                  <h3 className="text-2xl font-bold mb-2 text-white">
                    🎙️ Vibe Coding: The Future Without Code?
                  </h3>
                  <p className="text-white/80">Episode 1 • 6 minutes</p>
                </div>
              </div>
            ) : (
              // Embedded video
              <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                title="Vibe Coding Podcast"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              ></iframe>
            )}
          </div>

          {/* Video info */}
          <div className="p-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h3 className="text-xl font-bold mb-2">Episode Highlights</h3>
                <ul className="text-muted-foreground space-y-1">
                  <li>• Introduction to Vibe Coding</li>
                  <li>• Vibe Coding’s impact on developer productivity</li>
                  <li>• Exploring the future of AI-driven development</li>
                  <li>• Exploring Popular Vibe Coding AI Tools</li>
                </ul>
              </div>
              <div className="flex gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">1K</div>
                  <div className="text-sm text-muted-foreground">Views</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary">100%</div>
                  <div className="text-sm text-muted-foreground">Liked</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional video info */}
        <div
          className={`mt-8 grid md:grid-cols-3 gap-6 transition-all duration-600 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="glass rounded-2xl p-6 text-center">
            <div className="text-3xl font-bold text-accent mb-2">6 min</div>
            <div className="text-muted-foreground">Duration</div>
          </div>
          <div className="glass rounded-2xl p-6 text-center">
            <div className="text-3xl font-bold text-primary mb-2">HD+</div>
            <div className="text-muted-foreground">Quality</div>
          </div>
          <div className="glass rounded-2xl p-6 text-center">
            <div className="text-3xl font-bold text-secondary mb-2">Video</div>
            <div className="text-muted-foreground">Format</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
