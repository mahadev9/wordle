import Instructions from './instructions';

export default function Header() {
  return (
    <div className="border-b border-gray-300 dark:border-gray-700 relative">
      <div className="text-black dark:text-white min-h-16 flex place-content-center place-items-center">
        <div className="text-4xl font-bold tracking-wide">WORDLE</div>
      </div>
      <Instructions />
    </div>
  );
}


