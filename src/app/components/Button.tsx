import { cn } from './ui/utils';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'text';
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export function Button({ 
  children, 
  variant = 'primary', 
  onClick, 
  className = '',
  type = 'button'
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center gap-2 rounded transition-all duration-300 font-medium";
  
  const variants = {
    primary: "bg-[#00703B] text-white px-8 py-4 hover:bg-[#005a30] hover:shadow-lg hover:-translate-y-0.5 active:scale-95",
    secondary: "bg-transparent border-2 border-[#00703B] text-[#00703B] px-8 py-4 hover:bg-[#00703B] hover:text-white hover:shadow-lg hover:-translate-y-0.5 active:scale-95",
    text: "text-[#00703B] hover:text-[#005a30] relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#00703B] after:transition-all after:duration-300 hover:after:w-full"
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={cn(baseStyles, variants[variant], className)}
    >
      {children}
    </button>
  );
}
