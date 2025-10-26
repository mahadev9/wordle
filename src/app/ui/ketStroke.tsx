'use client';

export default function KeyStroke(props: any) {
  return (
    <button
      className={`border-2 border-gray-400 dark:border-gray-600 rounded font-bold text-sm md:text-xl flex items-center justify-center w-8 h-12 md:w-12 md:h-14 transition-all duration-150 active:scale-95 ${props.className}`}
      onClick={() => {props.clickKeys(props.letter)}}>
      <span>{props.letter}</span>
    </button>
  );
}

