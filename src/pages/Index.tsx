import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import TeamSection from '@/components/TeamSection';
import VideoSection from '@/components/VideoSection';
import ArticleSection from '@/components/ArticleSection';
import CreditsSection from '@/components/CreditsSection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main>
        <section id="home">
          <HeroSection />
        </section>
        
        <section id="team">
          <TeamSection />
        </section>
        
        <section id="video">
          <VideoSection />
        </section>
        
        <section id="article">
          <ArticleSection />
        </section>
        
        <section id="credits">
          <CreditsSection />
        </section>
      </main>
    </div>
  );
};

export default Index;
