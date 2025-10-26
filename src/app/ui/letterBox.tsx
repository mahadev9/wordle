interface LetterBoxProps {
  letter: string;
  className?: string;
  state?: 'empty' | 'active' | 'correct' | 'present' | 'absent';
  animate?: boolean;
  delay?: number;
}

export function LetterBox({ letter, className = '', state = 'empty', animate = false, delay = 0 }: LetterBoxProps) {
  const getStateColor = () => {
    switch (state) {
      case 'correct':
        return 'bg-green-600 dark:bg-green-700 border-green-600 dark:border-green-700 text-white';
      case 'present':
        return 'bg-yellow-500 dark:bg-yellow-600 border-yellow-500 dark:border-yellow-600 text-white';
      case 'absent':
        return 'bg-gray-500 dark:bg-gray-600 border-gray-500 dark:border-gray-600 text-white';
      case 'active':
        return 'bg-white dark:bg-gray-800 border-gray-400 dark:border-gray-500 border-2';
      default:
        return 'bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600';
    }
  };

  const animationClass = animate ? 'tile-flip' : letter && state === 'active' ? 'tile-pop' : '';

  return (
    <div 
      className={`text-black dark:text-white border-2 font-bold text-3xl flex items-center justify-center w-14 h-14 md:w-16 md:h-16 transition-all duration-200 ${getStateColor()} ${animationClass} ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <span>{letter}</span>
    </div>
  );
}

