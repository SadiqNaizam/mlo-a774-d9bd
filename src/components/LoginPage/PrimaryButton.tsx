import * as React from 'react';
import { Button, type ButtonProps } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const PrimaryButton: React.FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <Button
      type="submit"
      className={cn(
        'w-full font-semibold shadow-md',
        className
      )}
      {...props}
    >
      {children}
    </Button>
  );
};

export default PrimaryButton;
