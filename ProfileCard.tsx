import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Building2, MapPin, Calendar, Users, Award, MessageCircle } from 'lucide-react';

const ProfileCard = () => {
  return (
    <Card className="p-6 bg-glass/80 backdrop-blur-md border-glass-border shadow-glass sticky top-4 animate-fade-in">
      <div className="text-center mb-6">
        <Avatar className="w-20 h-20 mx-auto mb-4 ring-4 ring-primary/20">
          <AvatarFallback className="bg-gradient-primary text-white text-2xl">
            <Building2 className="w-10 h-10" />
          </AvatarFallback>
        </Avatar>
        
        <h2 className="text-xl font-bold text-foreground mb-2">Your Company</h2>
        <p className="text-muted-foreground text-sm mb-4">
          Leading arc flash safety solutions provider
        </p>
        
        <div className="flex items-center justify-center text-sm text-muted-foreground mb-4">
          <MapPin className="w-4 h-4 mr-1" />
          <span>Houston, TX</span>
        </div>
      </div>

      <div className="space-y-4 mb-6">
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">Connections</span>
          <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/20">
            <Users className="w-3 h-3 mr-1" />
            1,247
          </Badge>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">Posts</span>
          <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
            <Calendar className="w-3 h-3 mr-1" />
            89
          </Badge>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">Safety Score</span>
          <Badge variant="secondary" className="bg-success/10 text-success border-success/20">
            <Award className="w-3 h-3 mr-1" />
            98%
          </Badge>
        </div>
      </div>

      <div className="space-y-3">
        <Button className="w-full bg-gradient-primary hover:shadow-elevated transition-all duration-300">
          <MessageCircle className="w-4 h-4 mr-2" />
          Messages
        </Button>
        
        <Button variant="outline" className="w-full border-glass-border hover:bg-glass/50">
          View Profile
        </Button>
      </div>

      <div className="mt-6 pt-6 border-t border-glass-border">
        <h3 className="text-sm font-semibold text-foreground mb-3">Recent Activity</h3>
        <div className="space-y-2 text-sm text-muted-foreground">
          <p>• Connected with SafeGuard Industries</p>
          <p>• Posted safety update</p>
          <p>• Joined Arc Flash Professionals group</p>
        </div>
      </div>
    </Card>
  );
};

export default ProfileCard;
