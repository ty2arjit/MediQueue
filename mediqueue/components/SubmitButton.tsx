import React from 'react'
import Image from 'next/image';
import { Button } from '@/components/ui/button';

interface ButtonProps {
  isLoading?: boolean;
  className?: string;
  children: React.ReactNode;
}

const SubmitButton = ( { isLoading, className, children }: ButtonProps) => {
  return (
    <Button
    type="submit"
    disabled={isLoading}
    className={className ?? 'shad-primary-btn w-full '}
    >
      {isLoading ? (
        <div 
        className="flex items-center gap-4"
        >
          <Image 
          src = "/assets/icons/loader.svg"
          alt="loader"
          width={24}
          height={24}
          className="animate-spin"
          />
        </div>
      ) :
      (
        <div className='flex items-center gap-2 font-semibold font-sans text-md'>
          Get Started
        </div>
      )
    }
    </Button>
  )
}

export default SubmitButton
