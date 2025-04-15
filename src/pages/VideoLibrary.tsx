
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import FeaturedCard from '../components/dashboard/FeaturedCard';
import { Search, Filter } from 'lucide-react';

const VideoLibrary = () => {
  // Sample data for videos
  const videos = [
    {
      title: 'Supply Chain Optimization Strategies',
      description: 'Learn effective strategies for optimizing your supply chain operations and reducing costs while maintaining quality.',
      duration: '18 min',
      type: 'video' as const,
      category: 'operations'
    },
    {
      title: 'Sustainability Compliance Overview',
      description: 'An overview of our sustainability requirements and how to ensure your practices align with our environmental goals.',
      duration: '24 min',
      type: 'video' as const,
      category: 'compliance'
    },
    {
      title: 'Navigating the Vendor Portal',
      description: 'A step-by-step guide to using all features of our vendor portal efficiently.',
      duration: '12 min',
      type: 'video' as const,
      category: 'systems'
    },
    {
      title: 'Quality Control Best Practices',
      description: 'Essential quality control measures to ensure your products meet our standards consistently.',
      duration: '22 min',
      type: 'video' as const,
      category: 'quality'
    },
    {
      title: 'Efficient Invoice Processing',
      description: 'How to prepare and submit invoices correctly to ensure timely payments.',
      duration: '15 min',
      type: 'video' as const,
      category: 'finance'
    },
    {
      title: 'Packaging Requirements & Guidelines',
      description: 'Detailed overview of packaging standards to comply with our sustainable packaging initiative.',
      duration: '19 min',
      type: 'video' as const,
      category: 'operations'
    },
    {
      title: 'Delivery Scheduling System Tutorial',
      description: 'How to use our delivery scheduling system to optimize logistics and avoid delays.',
      duration: '16 min',
      type: 'video' as const,
      category: 'systems'
    },
    {
      title: 'Ethical Sourcing Requirements',
      description: 'Understanding our ethical sourcing policy and how to ensure compliance throughout your supply chain.',
      duration: '28 min',
      type: 'video' as const,
      category: 'compliance'
    },
    {
      title: 'Product Specification Documentation',
      description: 'How to properly document and submit product specifications for approval.',
      duration: '14 min',
      type: 'video' as const,
      category: 'quality'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto animate-fade-in">
      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <h1 className="text-2xl font-bold text-supplier-700 mb-4">Video Library</h1>
        <p className="text-gray-600 mb-6">
          Browse our collection of educational videos designed to help you understand our processes, requirements, 
          and best practices for successful supplier partnerships.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-500" />
            <Input 
              placeholder="Search videos..." 
              className="pl-9"
            />
          </div>
          <Button variant="outline" className="flex items-center gap-2">
            <Filter className="h-4 w-4" />
            <span>Filter</span>
          </Button>
        </div>
      </div>

      <Tabs defaultValue="all" className="mb-6">
        <TabsList className="bg-white">
          <TabsTrigger value="all">All Videos</TabsTrigger>
          <TabsTrigger value="operations">Operations</TabsTrigger>
          <TabsTrigger value="compliance">Compliance</TabsTrigger>
          <TabsTrigger value="quality">Quality</TabsTrigger>
          <TabsTrigger value="systems">Systems</TabsTrigger>
          <TabsTrigger value="finance">Finance</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video, index) => (
              <FeaturedCard key={index} {...video} />
            ))}
          </div>
        </TabsContent>
        
        {['operations', 'compliance', 'quality', 'systems', 'finance'].map(category => (
          <TabsContent value={category} key={category} className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {videos
                .filter(video => video.category === category)
                .map((video, index) => (
                  <FeaturedCard key={index} {...video} />
                ))
              }
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default VideoLibrary;
