
import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, FileText, PlayCircle, Award, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CategoryCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  count: number;
  to: string;
  className?: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  icon: Icon,
  title,
  description,
  count,
  to,
  className
}) => {
  return (
    <Link to={to} className={cn("flex flex-col bg-white rounded-lg shadow-sm p-5 transition-all hover:shadow-md border border-transparent hover:border-markaz-200", className)}>
      <div className="flex justify-between items-start mb-4">
        <div className="bg-markaz-100 p-2.5 rounded-md text-markaz-600">
          <Icon className="h-5 w-5" />
        </div>
        <div className="bg-markaz-50 text-markaz-700 font-medium text-sm px-2 py-1 rounded">
          {count} items
        </div>
      </div>
      <h3 className="font-semibold text-lg text-gray-800 mb-1">{title}</h3>
      <p className="text-sm text-gray-600 flex-1">{description}</p>
      <div className="flex items-center text-markaz-600 font-medium text-sm mt-4 group">
        <span>Explore</span>
        <ChevronRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
      </div>
    </Link>
  );
};

const CategorySection = () => {
  const categories = [
    {
      icon: PlayCircle,
      title: 'Ads',
      description: 'Learn how to create effective ads and marketing strategies.',
      count: 32,
      to: '/ads'
    },
    {
      icon: FileText,
      title: 'Listings',
      description: 'Master product listing optimization and visibility techniques.',
      count: 28,
      to: '/listings'
    },
    {
      icon: BookOpen,
      title: 'Onboarding',
      description: 'Complete your supplier onboarding journey step by step.',
      count: 15,
      to: '/onboarding'
    },
    {
      icon: Award,
      title: 'Important Updates/ Policies',
      description: 'Stay updated with latest policies, guidelines and announcements.',
      count: 18,
      to: '/updates'
    },
    {
      icon: FileText,
      title: 'Disputes/ Claims',
      description: 'Learn how to handle disputes and claims effectively.',
      count: 12,
      to: '/disputes'
    }
  ];

  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Browse by Category</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        {categories.map((category, index) => (
          <CategoryCard key={index} {...category} />
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
