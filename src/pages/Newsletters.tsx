
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FileText, Search, Calendar } from 'lucide-react';

const Newsletters = () => {
  // Sample data for newsletters
  const newsletters = [
    {
      title: 'Q2 2025 Supplier Policy Updates',
      description: 'Important updates to our supplier policies, including new compliance requirements and deadlines.',
      date: 'Apr 10, 2025',
      category: 'Policy Updates',
      important: true
    },
    {
      title: 'Upcoming Supplier Webinars and Events',
      description: 'Schedule of upcoming training sessions, webinars, and networking opportunities for all suppliers.',
      date: 'Apr 5, 2025',
      category: 'Events'
    },
    {
      title: 'New Sustainability Initiatives for 2025',
      description: 'Learn about our new sustainability goals and how suppliers can contribute to our environmental efforts.',
      date: 'Mar 28, 2025',
      category: 'Sustainability',
      important: true
    },
    {
      title: 'Supplier Performance Metrics Review',
      description: 'Review of key performance indicators and how they affect supplier ratings and opportunities.',
      date: 'Mar 15, 2025',
      category: 'Performance'
    },
    {
      title: 'Supply Chain Resilience Planning',
      description: 'Strategies for building resilience in your supply chain to mitigate disruptions and ensure continuity.',
      date: 'Mar 8, 2025',
      category: 'Strategy'
    },
    {
      title: 'Updated Payment Processing Systems',
      description: 'Information about our new payment processing system and what suppliers need to do to prepare.',
      date: 'Feb 27, 2025',
      category: 'Finance'
    },
    {
      title: 'Quarterly Supplier Recognition Awards',
      description: 'Celebrating suppliers who have demonstrated excellence in quality, delivery, and innovation.',
      date: 'Feb 15, 2025',
      category: 'Recognition'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto animate-fade-in">
      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <h1 className="text-2xl font-bold text-supplier-700 mb-4">Newsletters</h1>
        <p className="text-gray-600 mb-6">
          Stay updated with the latest announcements, policy changes, and important information for suppliers.
          Newsletters are published regularly to keep you informed.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-500" />
            <Input 
              placeholder="Search newsletters..." 
              className="pl-9"
            />
          </div>
          <div className="flex gap-4">
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="policy">Policy Updates</SelectItem>
                <SelectItem value="events">Events</SelectItem>
                <SelectItem value="sustainability">Sustainability</SelectItem>
                <SelectItem value="performance">Performance</SelectItem>
                <SelectItem value="strategy">Strategy</SelectItem>
                <SelectItem value="finance">Finance</SelectItem>
                <SelectItem value="recognition">Recognition</SelectItem>
              </SelectContent>
            </Select>

            <div className="flex items-center gap-2 bg-white rounded-md border border-gray-200 px-3 text-sm w-[180px]">
              <Calendar className="h-4 w-4 text-gray-500" />
              <span className="text-gray-500">Date Filter</span>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {newsletters.map((newsletter, index) => (
          <Card key={index} className="transition-all hover:shadow-md">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <div className="flex flex-col">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
                    <FileText className="h-4 w-4" />
                    <span>{newsletter.date}</span>
                    <Badge variant="outline" className="ml-1 text-xs">{newsletter.category}</Badge>
                    {newsletter.important && (
                      <Badge variant="secondary" className="bg-red-50 text-red-600 text-xs">Important</Badge>
                    )}
                  </div>
                  <CardTitle className="text-xl">{newsletter.title}</CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600">{newsletter.description}</CardDescription>
            </CardContent>
            <CardFooter>
              <div className="flex justify-between w-full">
                <Button variant="link" className="text-supplier-600 hover:text-supplier-800 px-0">Read Newsletter</Button>
                <Button variant="ghost" size="sm" className="text-gray-500">Download PDF</Button>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <Button variant="outline" className="text-supplier-600 border-supplier-300">Load More</Button>
      </div>
    </div>
  );
};

export default Newsletters;
