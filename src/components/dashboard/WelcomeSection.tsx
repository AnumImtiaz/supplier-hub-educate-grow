
import React from 'react';
import { Button } from '@/components/ui/button';
import { PlayCircle } from 'lucide-react';

const WelcomeSection = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
      <div className="flex flex-col md:flex-row md:items-center gap-6">
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-markaz-700 mb-2">Welcome to Markaz Supplier Academy</h2>
          <p className="text-gray-600 mb-4">
            Ab har supplier banega khud mukhtar! Access our comprehensive educational content designed to help you master ads, listings, onboarding, and business growth on the Markaz platform.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button className="bg-markaz-600 hover:bg-markaz-700">
              Browse Content
            </Button>
            <Button variant="outline" className="flex items-center gap-2 border-markaz-400 text-markaz-600 hover:text-markaz-700">
              <PlayCircle className="h-4 w-4" />
              Watch Introduction
            </Button>
          </div>
        </div>
        <div className="hidden md:block bg-markaz-100 rounded-lg p-4 w-64">
          <div className="font-medium mb-2">Latest Update</div>
          <p className="text-sm text-gray-600">New ad optimization guidelines and listing best practices added. Check updates section for details.</p>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;
