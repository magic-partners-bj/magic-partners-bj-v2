import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = '', hover = true }: CardProps) {
  const hoverStyles = hover 
    ? "hover:shadow-xl hover:-translate-y-2 hover:border-t-4 hover:border-t-[#F8B11C]" 
    : "";

  return (
    <div 
      className={`bg-white border border-gray-200 rounded-lg p-12 shadow-sm transition-all duration-400 ${hoverStyles} ${className}`}
    >
      {children}
    </div>
  );
}
