'use client';

interface GameOverModalProps {
  isWin: boolean;
  word: string;
  attempts: number;
  onPlayAgain: () => void;
}

export default function GameOverModal({ isWin, word, attempts, onPlayAgain }: GameOverModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 modal-backdrop">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-8 max-w-md w-full mx-4 modal-content shadow-2xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">
            {isWin ? (
              <span className="text-green-600 dark:text-green-400">🎉 Congratulations! 🎉</span>
            ) : (
              <span className="text-red-600 dark:text-red-400">Game Over!</span>
            )}
          </h2>
          
          {isWin ? (
            <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
              You guessed the word in <strong>{attempts}</strong> {attempts === 1 ? 'attempt' : 'attempts'}!
            </p>
          ) : (
            <div className="mb-6">
              <p className="text-lg mb-2 text-gray-700 dark:text-gray-300">
                The word was:
              </p>
              <p className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-4">
                {word}
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                Better luck next time!
              </p>
            </div>
          )}

          <button
            onClick={onPlayAgain}
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-200 transform hover:scale-105"
          >
            Play Again
          </button>
        </div>
      </div>
    </div>
  );
}
