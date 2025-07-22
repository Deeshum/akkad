import { useEffect, useRef, useState } from 'react';

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  staggerDelay?: number;
}

const SplitText = ({ 
  text, 
  className = '', 
  delay = 0, 
  staggerDelay = 50 
}: SplitTextProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!isVisible || !containerRef.current) return;

    const chars = containerRef.current.querySelectorAll('.split-char');
    
    chars.forEach((char, index) => {
      setTimeout(() => {
        char.classList.add('revealed');
      }, index * staggerDelay);
    });
  }, [isVisible, staggerDelay]);

  const chars = text.split('').map((char, index) => (
    <span
      key={index}
      className="split-char"
      style={{ transitionDelay: `${index * staggerDelay}ms` }}
    >
      {char === ' ' ? '\u00A0' : char}
    </span>
  ));

  return (
    <div ref={containerRef} className={`split-text ${className}`}>
      {chars}
    </div>
  );
};

export default SplitText;