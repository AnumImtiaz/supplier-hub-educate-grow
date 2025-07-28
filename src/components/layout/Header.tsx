
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Bell, Menu, Search } from 'lucide-react';
import markazLogo from '@/assets/markaz-logo.png';

const Header = ({ toggleSidebar }: { toggleSidebar: () => void }) => {
  return (
    <header className="w-full bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button onClick={toggleSidebar} variant="ghost" size="icon" className="lg:hidden">
            <Menu className="h-5 w-5" />
          </Button>
          <Link to="/" className="flex items-center gap-3">
            <img src="/lovable-uploads/3cb3fcb5-3763-46da-b19a-0454de63b7ff.png" alt="Markaz" className="h-10 w-10 rounded-xl" />
            <div className="hidden sm:block">
              <h1 className="font-semibold text-lg text-markaz-700">Supplier Academy</h1>
              <p className="text-xs text-markaz-600 font-medium">Ab har supplier banega khud mukhtar!</p>
            </div>
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <div className="relative hidden md:block">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
            <input
              type="search"
              placeholder="Search resources..."
              className="rounded-full bg-gray-100 pl-8 pr-4 py-2 text-sm w-[200px] lg:w-[300px] focus:outline-none focus:ring-1 focus:ring-markaz-300"
            />
          </div>
          <Button variant="ghost" size="icon" className="text-gray-600">
            <Bell className="h-5 w-5" />
          </Button>
          <Button size="sm" className="bg-markaz-600 hover:bg-markaz-700">
            Back to Main Portal
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
