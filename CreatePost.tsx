import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { ImageIcon, MapPin, Hash, Send, Building2 } from 'lucide-react';

const CreatePost = () => {
  const [content, setContent] = useState('');
  const [isPosting, setIsPosting] = useState(false);

  const handlePost = async () => {
    if (!content.trim()) return;
    
    setIsPosting(true);
    // Simulate API call
    setTimeout(() => {
      setContent('');
      setIsPosting(false);
    }, 1000);
  };

  return (
    <Card className="p-6 mb-6 bg-glass/80 backdrop-blur-md border-glass-border shadow-glass animate-slide-up">
      <div className="flex space-x-4">
        <Avatar className="w-12 h-12 ring-2 ring-primary/20">
          <AvatarFallback className="bg-primary text-primary-foreground">
            <Building2 className="w-6 h-6" />
          </AvatarFallback>
        </Avatar>
        
        <div className="flex-1">
          <Textarea
            placeholder="What's happening in your arc flash safety work today?"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="min-h-[120px] resize-none border-0 bg-transparent text-foreground placeholder:text-muted-foreground focus-visible:ring-0 focus-visible:ring-offset-0"
          />
          
          <div className="flex items-center justify-between mt-4 pt-4 border-t border-glass-border">
            <div className="flex space-x-2">
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-accent">
                <ImageIcon className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-accent">
                <MapPin className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-accent">
                <Hash className="w-4 h-4" />
              </Button>
            </div>
            
            <Button 
              onClick={handlePost}
              disabled={!content.trim() || isPosting}
              className="bg-gradient-primary hover:shadow-elevated transition-all duration-300"
            >
              {isPosting ? (
                <div className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
              ) : (
                <>
                  <Send className="w-4 h-4 mr-2" />
                  Post
                </>
              )}
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CreatePost;
