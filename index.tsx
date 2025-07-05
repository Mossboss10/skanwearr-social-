import { useState } from 'react';
import LoadingScreen from '@/components/LoadingScreen';
import Navigation from '@/components/Navigation';
import SocialFeed from '@/components/SocialFeed';
import CreatePost from '@/components/CreatePost';
import ProfileCard from '@/components/ProfileCard';
import heroImage from '@/assets/skanwear-hero.jpg';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('home');

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <LoadingScreen onComplete={handleLoadingComplete} />;
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <>
            {/* Hero Section */}
            <div className="relative h-64 mb-8 rounded-2xl overflow-hidden shadow-floating">
              <img 
                src={heroImage} 
                alt="Skanwear professional safety equipment" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <h2 className="text-3xl font-bold mb-2 animate-slide-up">
                  Professional Arc Flash Safety
                </h2>
                <p className="text-lg opacity-90 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                  Connecting safety professionals worldwide
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                <CreatePost />
                <SocialFeed />
              </div>
              <div className="lg:col-span-1">
                <ProfileCard />
              </div>
            </div>
          </>
        );
      case 'explore':
        return (
          <div className="text-center py-20">
            <h2 className="text-2xl font-bold text-foreground mb-4">Explore Arc Flash Community</h2>
            <p className="text-muted-foreground">Discover trending topics and connect with industry leaders</p>
          </div>
        );
      case 'connections':
        return (
          <div className="text-center py-20">
            <h2 className="text-2xl font-bold text-foreground mb-4">Your Professional Network</h2>
            <p className="text-muted-foreground">Manage your connections and expand your network</p>
          </div>
        );
      case 'messages':
        return (
          <div className="text-center py-20">
            <h2 className="text-2xl font-bold text-foreground mb-4">Messages</h2>
            <p className="text-muted-foreground">Stay connected with your professional network</p>
          </div>
        );
      case 'notifications':
        return (
          <div className="text-center py-20">
            <h2 className="text-2xl font-bold text-foreground mb-4">Notifications</h2>
            <p className="text-muted-foreground">Stay updated with the latest activity</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        {renderContent()}
      </main>

      {/* Background decoration */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      </div>
    </div>
  );
};

export default Index;
