
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { CheckCircle2, Clock, Trophy, BookOpen, ChevronRight } from 'lucide-react';

const LearningPaths = () => {
  // Sample data for learning paths
  const learningPaths = [
    {
      title: 'New Supplier Onboarding',
      description: 'A comprehensive program designed for new suppliers to understand our processes, systems, and expectations.',
      modules: 6,
      estimatedHours: 4,
      completion: 0,
      level: 'Beginner',
      popular: true,
      tags: ['Essential', 'Core Process'],
    },
    {
      title: 'Quality Management Excellence',
      description: 'Learn advanced quality control techniques and how to implement effective quality management systems.',
      modules: 8,
      estimatedHours: 6,
      completion: 25,
      level: 'Intermediate',
      popular: true,
      tags: ['Quality', 'Certification'],
    },
    {
      title: 'Sustainable Supply Chain Practices',
      description: 'Discover how to integrate sustainability into your operations and meet our environmental standards.',
      modules: 5,
      estimatedHours: 3.5,
      completion: 0,
      level: 'Intermediate',
      tags: ['Sustainability', 'Compliance'],
    },
    {
      title: 'Advanced Logistics Management',
      description: 'Optimize your delivery processes and learn advanced techniques for efficient logistics management.',
      modules: 7,
      estimatedHours: 5,
      completion: 0,
      level: 'Advanced',
      tags: ['Logistics', 'Optimization'],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto animate-fade-in">
      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <h1 className="text-2xl font-bold text-supplier-700 mb-4">Learning Paths</h1>
        <p className="text-gray-600 mb-4">
          Our curated learning paths provide structured educational journeys to help you master specific areas of supplier excellence.
          Each path consists of multiple modules that build upon each other.
        </p>
        <div className="bg-supplier-50 p-4 rounded-md border border-supplier-100 flex items-start gap-3">
          <div className="bg-supplier-100 rounded-full p-1.5 text-supplier-700 mt-0.5">
            <Trophy className="h-4 w-4" />
          </div>
          <div>
            <h3 className="font-medium text-supplier-700">Earn Supplier Certifications</h3>
            <p className="text-sm text-gray-600">Complete learning paths to earn certifications that showcase your expertise and commitment.</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {learningPaths.map((path, index) => (
          <Card key={index} className="transition-all hover:shadow-md">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  {path.popular && (
                    <Badge className="mb-2 bg-supplier-100 text-supplier-700 hover:bg-supplier-200">Popular</Badge>
                  )}
                  <CardTitle>{path.title}</CardTitle>
                  <CardDescription className="mt-1">
                    <Badge variant="outline" className="mr-1 font-normal">{path.level}</Badge>
                    {path.tags.map((tag, i) => (
                      <Badge key={i} variant="secondary" className="mr-1 font-normal">{tag}</Badge>
                    ))}
                  </CardDescription>
                </div>
                <div className="bg-supplier-50 rounded-full h-12 w-12 flex items-center justify-center">
                  <BookOpen className="h-5 w-5 text-supplier-600" />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">{path.description}</p>
              
              <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4" />
                  <span>{path.modules} Modules</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4" />
                  <span>Est. {path.estimatedHours} hours</span>
                </div>
              </div>
              
              {path.completion > 0 ? (
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium">Your progress</span>
                    <span>{path.completion}% complete</span>
                  </div>
                  <Progress value={path.completion} className="h-2" />
                </div>
              ) : (
                <div className="text-sm text-gray-500 italic">Not started yet</div>
              )}
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-supplier-600 hover:bg-supplier-700 flex items-center justify-center gap-2">
                <span>{path.completion > 0 ? 'Continue Learning' : 'Start Learning'}</span>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default LearningPaths;
