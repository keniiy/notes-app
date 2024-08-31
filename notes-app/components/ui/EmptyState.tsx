import { EmptyStateProps } from '@/types';
import React from 'react'


const EmptyState: React.FC<EmptyStateProps> = ({ message }) => {
    return (
      <div className="text-center text-gray-500">
        {message}
      </div>
    );
  };
  
  export default EmptyState;