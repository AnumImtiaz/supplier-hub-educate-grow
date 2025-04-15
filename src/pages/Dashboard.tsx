
import React from 'react';
import WelcomeSection from '../components/dashboard/WelcomeSection';
import CategorySection from '../components/dashboard/CategorySection';
import FeaturedCard from '../components/dashboard/FeaturedCard';

const Dashboard = () => {
  const featuredVideos = [
    {
      title: 'Supply Chain Optimization Strategies',
      description: 'Learn effective strategies for optimizing your supply chain operations and reducing costs while maintaining quality.',
      duration: '18 min',
      type: 'video' as const
    },
    {
      title: 'Sustainability Compliance Overview',
      description: 'An overview of our sustainability requirements and how to ensure your practices align with our environmental goals.',
      duration: '24 min',
      type: 'video' as const
    },
    {
      title: 'Navigating the Vendor Portal',
      description: 'A step-by-step guide to using all features of our vendor portal efficiently.',
      duration: '12 min',
      type: 'video' as const
    }
  ];

  const featuredNewsletters = [
    {
      title: 'Q2 2025 Supplier Policy Updates',
      description: 'Important updates to our supplier policies, including new compliance requirements and deadlines.',
      date: 'Apr 10, 2025',
      type: 'newsletter' as const
    },
    {
      title: 'Upcoming Supplier Webinars and Events',
      description: 'Schedule of upcoming training sessions, webinars, and networking opportunities for all suppliers.',
      date: 'Apr 5, 2025',
      type: 'newsletter' as const
    }
  ];

  return (
    <div className="max-w-7xl mx-auto animate-fade-in">
      <WelcomeSection />
      <CategorySection />
      
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-800">Featured Videos</h2>
          <a href="/videos" className="text-supplier-600 hover:text-supplier-700 text-sm font-medium">View All</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {featuredVideos.map((video, index) => (
            <FeaturedCard key={index} {...video} />
          ))}
        </div>
      </div>

      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-800">Latest Newsletters</h2>
          <a href="/newsletters" className="text-supplier-600 hover:text-supplier-700 text-sm font-medium">View All</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {featuredNewsletters.map((newsletter, index) => (
            <FeaturedCard key={index} {...newsletter} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
