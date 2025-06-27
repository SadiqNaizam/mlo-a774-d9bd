import React from 'react';
import { cn } from '@/lib/utils';

interface CenteredContainerProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * A layout component that centers its children vertically and horizontally
 * within the full viewport. It also sets the default page background color.
 */
const CenteredContainer: React.FC<CenteredContainerProps> = ({
  children,
  className,
}) => {
  return (
    <main
      className={cn(
        'flex justify-center items-center h-screen bg-background',
        className
      )}
    >
      {children}
    </main>
  );
};

export default CenteredContainer;