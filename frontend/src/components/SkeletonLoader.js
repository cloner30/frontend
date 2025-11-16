import React from 'react';
import { Card, CardContent } from './ui/card';

const SkeletonLoader = ({ type = 'card', count = 1 }) => {
  if (type === 'card') {
    return (
      <>
        {[...Array(count)].map((_, idx) => (
          <Card key={idx} className="overflow-hidden animate-pulse">
            <div className="h-56 bg-gray-200" />
            <CardContent className="p-5">
              <div className="h-6 bg-gray-200 rounded w-3/4 mb-3" />
              <div className="h-4 bg-gray-200 rounded w-full mb-2" />
              <div className="h-4 bg-gray-200 rounded w-2/3 mb-4" />
              <div className="flex justify-between items-center">
                <div className="h-8 bg-gray-200 rounded w-24" />
                <div className="h-10 bg-gray-200 rounded w-28" />
              </div>
            </CardContent>
          </Card>
        ))}
      </>
    );
  }

  if (type === 'list') {
    return (
      <>
        {[...Array(count)].map((_, idx) => (
          <div key={idx} className="animate-pulse flex space-x-4 mb-4">
            <div className="rounded bg-gray-200 h-24 w-24" />
            <div className="flex-1 space-y-3 py-1">
              <div className="h-5 bg-gray-200 rounded w-3/4" />
              <div className="h-4 bg-gray-200 rounded w-full" />
              <div className="h-4 bg-gray-200 rounded w-5/6" />
            </div>
          </div>
        ))}
      </>
    );
  }

  return null;
};

export default SkeletonLoader;