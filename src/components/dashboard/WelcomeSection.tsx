
import React from 'react';
import { Button } from '@/components/ui/button';
import { PlayCircle } from 'lucide-react';

const WelcomeSection = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
      <div className="flex flex-col md:flex-row md:items-center gap-6">
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-supplier-700 mb-2">Welcome to Supplier Education Hub</h2>
          <p className="text-gray-600 mb-4">
            Access our library of educational content designed to help you succeed as a supplier partner. Browse videos, newsletters, and learning paths to enhance your knowledge and skills.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button className="bg-supplier-600 hover:bg-supplier-700">
              Browse Content
            </Button>
            <Button variant="outline" className="flex items-center gap-2 border-supplier-400 text-supplier-600 hover:text-supplier-700">
              <PlayCircle className="h-4 w-4" />
              Watch Introduction
            </Button>
          </div>
        </div>
        <div className="hidden md:block bg-supplier-100 rounded-lg p-4 w-64">
          <div className="font-medium mb-2">Latest Update</div>
          <p className="text-sm text-gray-600">New sustainability guidelines for suppliers added. Check the newsletter section for details.</p>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;
