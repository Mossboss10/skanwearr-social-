import { useState } from 'react';
import { Heart, MessageCircle, Share2, MoreHorizontal, Building2, Calendar, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface Post {
  id: string;
  company: string;
  companyLogo: string;
  content: string;
  image?: string;
  likes: number;
  comments: number;
  shares: number;
  timestamp: string;
  location?: string;
  tags: string[];
  isLiked: boolean;
}

const mockPosts: Post[] = [
  {
    id: '1',
    company: 'SafeGuard Industries',
    companyLogo: '/api/placeholder/40/40',
    content: 'Just completed a major arc flash assessment for a manufacturing facility. Our new Skanwear gear performed exceptionally well in the field testing. Safety first! 🔥⚡',
    image: '/api/placeholder/600/400',
    likes: 24,
    comments: 8,
    shares: 3,
    timestamp: '2h',
    location: 'Houston, TX',
    tags: ['#ArcFlash', '#Safety', '#Skanwear'],
    isLiked: false
  },
  {
    id: '2',
    company: 'ElectroSafe Corp',
    companyLogo: '/api/placeholder/40/40',
    content: 'Training day with the team on proper PPE protocols. Skanwear has been our trusted partner for over 5 years. The quality and protection they provide is unmatched.',
    likes: 31,
    comments: 12,
    shares: 5,
    timestamp: '4h',
    location: 'Dallas, TX',
    tags: ['#Training', '#PPE', '#TeamSafety'],
    isLiked: true
  },
  {
    id: '3',
    company: 'Industrial Safety Solutions',
    companyLogo: '/api/placeholder/40/40',
    content: 'Exciting news! We are expanding our arc flash protection services to three new states. Looking forward to keeping more workers safe with Skanwear equipment.',
    likes: 45,
    comments: 15,
    shares: 8,
    timestamp: '6h',
    location: 'Phoenix, AZ',
    tags: ['#Expansion', '#Growth', '#WorkerSafety'],
    isLiked: false
  }
];

const SocialFeed = () => {
  const [posts, setPosts] = useState<Post[]>(mockPosts);

  const handleLike = (postId: string) => {
    setPosts(posts.map(post => 
      post.id === postId 
        ? { ...post, isLiked: !post.isLiked, likes: post.isLiked ? post.likes - 1 : post.likes + 1 }
        : post
    ));
  };

  const PostCard = ({ post }: { post: Post }) => (
    <Card className="p-6 mb-6 bg-glass/80 backdrop-blur-md border-glass-border shadow-glass hover:shadow-elevated transition-all duration-300 animate-fade-in">
      <div className="flex items-start space-x-4">
        <Avatar className="w-12 h-12 ring-2 ring-primary/20">
          <AvatarImage src={post.companyLogo} alt={post.company} />
          <AvatarFallback className="bg-primary text-primary-foreground">
            <Building2 className="w-6 h-6" />
          </AvatarFallback>
        </Avatar>
        
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <div>
              <h3 className="font-semibold text-foreground">{post.company}</h3>
              <div className="flex items-center text-sm text-muted-foreground space-x-2">
                <Calendar className="w-3 h-3" />
                <span>{post.timestamp}</span>
                {post.location && (
                  <>
                    <span>•</span>
                    <MapPin className="w-3 h-3" />
                    <span>{post.location}</span>
                  </>
                )}
              </div>
            </div>
            <Button variant="ghost" size="sm">
              <MoreHorizontal className="w-4 h-4" />
            </Button>
          </div>

          <p className="text-foreground mb-4 leading-relaxed">{post.content}</p>

          {post.image && (
            <div className="mb-4 rounded-lg overflow-hidden">
              <img 
                src={post.image} 
                alt="Post content" 
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          )}

          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag, index) => (
              <span 
                key={index}
                className="px-3 py-1 text-xs bg-accent/10 text-accent rounded-full border border-accent/20"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-glass-border">
            <div className="flex space-x-6">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleLike(post.id)}
                className={`flex items-center space-x-2 transition-colors ${
                  post.isLiked ? 'text-destructive hover:text-destructive/80' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <Heart className={`w-4 h-4 ${post.isLiked ? 'fill-current' : ''}`} />
                <span>{post.likes}</span>
              </Button>
              
              <Button variant="ghost" size="sm" className="flex items-center space-x-2 text-muted-foreground hover:text-foreground">
                <MessageCircle className="w-4 h-4" />
                <span>{post.comments}</span>
              </Button>
              
              <Button variant="ghost" size="sm" className="flex items-center space-x-2 text-muted-foreground hover:text-foreground">
                <Share2 className="w-4 h-4" />
                <span>{post.shares}</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );

  return (
    <div className="max-w-2xl mx-auto px-4">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default SocialFeed;
