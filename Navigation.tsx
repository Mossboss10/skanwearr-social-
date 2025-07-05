import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Home, 
  Search, 
  Bell, 
  MessageCircle, 
  Settings,
  Building2,
  Users,
  TrendingUp
} from 'lucide-react';

interface NavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Navigation = ({ activeTab, onTabChange }: NavigationProps) => {
  const [notifications] = useState(12);
  const [messages] = useState(5);

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'explore', label: 'Explore', icon: TrendingUp },
    { id: 'connections', label: 'Connections', icon: Users },
    { id: 'messages', label: 'Messages', icon: MessageCircle, badge: messages },
    { id: 'notifications', label: 'Notifications', icon: Bell, badge: notifications },
  ];

  return (
    <nav className="bg-glass/90 backdrop-blur-lg border-b border-glass-border shadow-glass sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center shadow-elevated">
              <Building2 className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Skanwear</h1>
              <p className="text-xs text-muted-foreground">Professional Network</p>
            </div>
          </div>

          {/* Navigation Items */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant={activeTab === item.id ? "default" : "ghost"}
                size="sm"
                onClick={() => onTabChange(item.id)}
                className={`relative flex items-center space-x-2 transition-all duration-300 ${
                  activeTab === item.id 
                    ? 'bg-gradient-primary text-white shadow-elevated' 
                    : 'text-muted-foreground hover:text-foreground hover:bg-glass/50'
                }`}
              >
                <item.icon className="w-4 h-4" />
                <span className="hidden lg:inline">{item.label}</span>
                {item.badge && item.badge > 0 && (
                  <Badge 
                    variant="destructive" 
                    className="absolute -top-2 -right-2 w-5 h-5 p-0 text-xs flex items-center justify-center animate-pulse-glow"
                  >
                    {item.badge > 99 ? '99+' : item.badge}
                  </Badge>
                )}
              </Button>
            ))}
          </div>

          {/* Search and Settings */}
          <div className="flex items-center space-x-3">
            <Button 
              variant="ghost" 
              size="sm"
              className="text-muted-foreground hover:text-foreground hover:bg-glass/50"
            >
              <Search className="w-4 h-4" />
            </Button>
            <Button 
              variant="ghost" 
              size="sm"
              className="text-muted-foreground hover:text-foreground hover:bg-glass/50"
            >
              <Settings className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden border-t border-glass-border">
        <div className="flex justify-around py-2">
          {navItems.slice(0, 4).map((item) => (
            <Button
              key={item.id}
              variant="ghost"
              size="sm"
              onClick={() => onTabChange(item.id)}
              className={`relative flex flex-col items-center space-y-1 p-2 ${
                activeTab === item.id 
                  ? 'text-primary' 
                  : 'text-muted-foreground'
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="text-xs">{item.label}</span>
              {item.badge && item.badge > 0 && (
                <Badge 
                  variant="destructive" 
                  className="absolute -top-1 -right-1 w-4 h-4 p-0 text-xs flex items-center justify-center"
                >
                  {item.badge > 9 ? '9+' : item.badge}
                </Badge>
              )}
            </Button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
