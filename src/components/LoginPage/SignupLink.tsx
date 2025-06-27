import React from 'react';
import { cn } from '@/lib/utils';

interface SignupLinkProps {
  className?: string;
}

const SignupLink: React.FC<SignupLinkProps> = ({ className }) => {
  return (
    <p className={cn('text-center text-sm text-muted-foreground', className)}>
      or,{' '}
      <a
        href="#"
        onClick={(e) => e.preventDefault()} // Placeholder action
        className="underline transition-colors hover:text-primary"
      >
        sign up
      </a>
    </p>
  );
};

export default SignupLink;
