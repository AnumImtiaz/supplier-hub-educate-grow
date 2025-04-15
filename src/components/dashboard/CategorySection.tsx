
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
    <Link to={to} className={cn("flex flex-col bg-white rounded-lg shadow-sm p-5 transition-all hover:shadow-md border border-transparent hover:border-supplier-200", className)}>
      <div className="flex justify-between items-start mb-4">
        <div className="bg-supplier-100 p-2.5 rounded-md text-supplier-600">
          <Icon className="h-5 w-5" />
        </div>
        <div className="bg-supplier-50 text-supplier-700 font-medium text-sm px-2 py-1 rounded">
          {count} items
        </div>
      </div>
      <h3 className="font-semibold text-lg text-gray-800 mb-1">{title}</h3>
      <p className="text-sm text-gray-600 flex-1">{description}</p>
      <div className="flex items-center text-supplier-600 font-medium text-sm mt-4 group">
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
      title: 'Video Library',
      description: 'Watch educational videos on best practices, guidelines, and tutorials.',
      count: 42,
      to: '/videos'
    },
    {
      icon: FileText,
      title: 'Newsletters',
      description: 'Stay updated with the latest news, policy changes and announcements.',
      count: 24,
      to: '/newsletters'
    },
    {
      icon: BookOpen,
      title: 'Learning Paths',
      description: 'Follow structured learning journeys designed for supplier success.',
      count: 8,
      to: '/learning-paths'
    },
    {
      icon: Award,
      title: 'Certifications',
      description: 'Earn certifications to showcase your expertise and compliance.',
      count: 12,
      to: '/certifications'
    }
  ];

  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Browse by Category</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {categories.map((category, index) => (
          <CategoryCard key={index} {...category} />
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
