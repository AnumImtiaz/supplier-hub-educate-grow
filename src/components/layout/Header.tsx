
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Bell, Menu, Search } from 'lucide-react';

const Header = ({ toggleSidebar }: { toggleSidebar: () => void }) => {
  return (
    <header className="w-full bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button onClick={toggleSidebar} variant="ghost" size="icon" className="lg:hidden">
            <Menu className="h-5 w-5" />
          </Button>
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-supplier-600 text-white p-1 rounded">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <div className="hidden sm:block">
              <h1 className="font-semibold text-lg text-supplier-700">Supplier Hub</h1>
              <p className="text-xs text-supplier-500">Education Portal</p>
            </div>
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <div className="relative hidden md:block">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
            <input
              type="search"
              placeholder="Search resources..."
              className="rounded-full bg-gray-100 pl-8 pr-4 py-2 text-sm w-[200px] lg:w-[300px] focus:outline-none focus:ring-1 focus:ring-supplier-300"
            />
          </div>
          <Button variant="ghost" size="icon" className="text-gray-600">
            <Bell className="h-5 w-5" />
          </Button>
          <Button size="sm" className="bg-supplier-600 hover:bg-supplier-700">
            Back to Main Portal
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
