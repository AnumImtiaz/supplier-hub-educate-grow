
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { PlayCircle, FileText, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FeaturedCardProps {
  title: string;
  description: string;
  type: 'video' | 'newsletter';
  duration?: string;
  date?: string;
  image?: string;
  className?: string;
}

const FeaturedCard: React.FC<FeaturedCardProps> = ({
  title,
  description,
  type,
  duration,
  date,
  image,
  className
}) => {
  return (
    <Card className={cn("overflow-hidden transition-all hover:shadow-md", className)}>
      <div className="relative h-40 bg-supplier-200">
        {image ? (
          <img src={image} alt={title} className="object-cover w-full h-full" />
        ) : (
          <div className="flex items-center justify-center h-full bg-supplier-100">
            {type === 'video' ? (
              <PlayCircle className="h-12 w-12 text-supplier-500" />
            ) : (
              <FileText className="h-12 w-12 text-supplier-500" />
            )}
          </div>
        )}
      </div>
      
      <CardHeader className="pb-2">
        <div className="flex items-center gap-2 text-xs text-supplier-600 mb-1">
          {type === 'video' ? (
            <>
              <PlayCircle className="h-4 w-4" />
              <span>Video</span>
              {duration && (
                <>
                  <span className="mx-1">•</span>
                  <Clock className="h-3 w-3" />
                  <span>{duration}</span>
                </>
              )}
            </>
          ) : (
            <>
              <FileText className="h-4 w-4" />
              <span>Newsletter</span>
              {date && (
                <>
                  <span className="mx-1">•</span>
                  <span>{date}</span>
                </>
              )}
            </>
          )}
        </div>
        <CardTitle className="text-lg font-semibold line-clamp-2">{title}</CardTitle>
      </CardHeader>
      
      <CardContent>
        <CardDescription className="line-clamp-3">{description}</CardDescription>
      </CardContent>
      
      <CardFooter className="pt-0">
        <button className="text-supplier-600 hover:text-supplier-800 text-sm font-medium">
          {type === 'video' ? 'Watch Now' : 'Read More'}
        </button>
      </CardFooter>
    </Card>
  );
};

export default FeaturedCard;
