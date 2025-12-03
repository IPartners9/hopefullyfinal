import React from 'react';
import { ChevronRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'white';
  children: React.ReactNode;
  icon?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className = '', icon, ...props }) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-3.5 text-sm font-sans font-medium transition-all duration-300 rounded-full";
  
  const variants = {
    primary: "bg-navy-900 text-white hover:bg-navy-800",
    secondary: "bg-gold-500 text-white hover:bg-navy-900",
    white: "bg-white text-navy-900 hover:bg-cream",
    outline: "border border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white",
    ghost: "text-navy-900 hover:text-gold-600 p-0 hover:bg-transparent px-0 py-0 rounded-none"
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
      {icon && <ChevronRight size={16} className="ml-2" />}
    </button>
  );
};

export const Section: React.FC<{ children: React.ReactNode; className?: string; id?: string }> = ({ children, className = '', id }) => {
  return (
    <section id={id} className={`py-12 md:py-24 ${className}`}>
      {children}
    </section>
  );
};

interface CardProps {
  label?: string;
  title?: string;
  description: string;
  image?: string;
  icon?: React.ReactNode;
  linkText?: string;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ label, title, description, image, icon, linkText, className = '' }) => {
  return (
    <div className={`bg-white group hover:-translate-y-1 transition-transform duration-500 p-6 md:p-8 rounded-3xl h-full flex flex-col border border-gray-100 ${className}`}>
      {image && (
        <div className="relative h-48 overflow-hidden rounded-xl mb-6">
           <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
        </div>
      )}
      <div className="flex flex-col flex-grow">
        {icon && <div className="text-navy-900 mb-5">{icon}</div>}
        {label && <span className="text-xs font-sans font-bold tracking-widest text-gold-600 uppercase mb-3 block">{label}</span>}
        {title && <h3 className="text-xl md:text-2xl font-serif text-navy-900 mb-3">{title}</h3>}
        <p className="text-navy-900/70 text-base font-sans leading-relaxed mb-6 flex-grow">{description}</p>
        {linkText && (
          <div className="mt-auto pt-2">
            <span className="text-xs font-sans font-bold uppercase tracking-widest text-navy-900 group-hover:text-gold-600 transition-colors flex items-center">
              {linkText} <ChevronRight size={14} className="ml-1" />
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
