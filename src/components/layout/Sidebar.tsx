
import React from 'react';
import { NavLink } from 'react-router-dom';
import { BookOpen, FileText, Home, PlayCircle, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  const navItems = [
    { icon: Home, label: 'Dashboard', to: '/' },
    { icon: PlayCircle, label: 'Video Library', to: '/videos' },
    { icon: FileText, label: 'Newsletters', to: '/newsletters' },
    { icon: BookOpen, label: 'Learning Paths', to: '/learning-paths' },
  ];

  return (
    <div
      className={cn(
        'fixed inset-y-0 left-0 z-40 w-64 bg-white border-r border-gray-200 transition-transform duration-300 transform lg:relative lg:translate-x-0',
        isOpen ? 'translate-x-0' : '-translate-x-full'
      )}
    >
      <div className="p-4 flex justify-between items-center border-b lg:hidden">
        <h2 className="font-semibold text-lg text-supplier-700">Menu</h2>
        <Button onClick={toggleSidebar} variant="ghost" size="icon">
          <X className="h-5 w-5" />
        </Button>
      </div>
      
      <nav className="p-4 space-y-1">
        {navItems.map((item) => (
          <NavLink
            key={item.label}
            to={item.to}
            className={({ isActive }) => cn(
              'flex items-center gap-3 px-4 py-3 rounded-md transition-colors',
              isActive
                ? 'bg-supplier-100 text-supplier-700'
                : 'text-gray-600 hover:bg-gray-100'
            )}
          >
            <item.icon className="h-5 w-5" />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="absolute bottom-0 left-0 w-full p-4 border-t border-gray-200">
        <div className="bg-supplier-50 rounded-lg p-4">
          <h3 className="font-medium text-supplier-700 mb-2">Need help?</h3>
          <p className="text-sm text-gray-600 mb-3">Contact our support team for assistance with the portal.</p>
          <Button className="w-full bg-supplier-600 hover:bg-supplier-700">Contact Support</Button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
