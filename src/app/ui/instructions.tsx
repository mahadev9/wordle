'use client';

import { useState } from 'react';

export default function Instructions() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-4 right-4 w-8 h-8 flex items-center justify-center bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors text-xl font-bold"
        aria-label="How to play"
      >
        ?
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 modal-backdrop" onClick={() => setIsOpen(false)}>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-md w-full mx-4 modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">How to Play</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 text-2xl"
              >
                ×
              </button>
            </div>

            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>Guess the <strong>WORDLE</strong> in 6 tries.</p>
              
              <p>Each guess must be a valid 5-letter word. Hit the enter button to submit.</p>
              
              <p>After each guess, the color of the tiles will change to show how close your guess was to the word.</p>

              <div className="border-t border-gray-300 dark:border-gray-600 pt-4 mt-4">
                <p className="font-semibold mb-2">Examples:</p>
                
                <div className="space-y-3">
                  <div className="flex gap-1">
                    <div className="w-10 h-10 bg-green-600 text-white flex items-center justify-center font-bold border-2 border-green-600">W</div>
                    <div className="w-10 h-10 bg-white dark:bg-gray-700 border-2 border-gray-300 dark:border-gray-600 flex items-center justify-center">E</div>
                    <div className="w-10 h-10 bg-white dark:bg-gray-700 border-2 border-gray-300 dark:border-gray-600 flex items-center justify-center">A</div>
                    <div className="w-10 h-10 bg-white dark:bg-gray-700 border-2 border-gray-300 dark:border-gray-600 flex items-center justify-center">R</div>
                    <div className="w-10 h-10 bg-white dark:bg-gray-700 border-2 border-gray-300 dark:border-gray-600 flex items-center justify-center">Y</div>
                  </div>
                  <p className="text-sm">The letter <strong>W</strong> is in the word and in the correct spot.</p>
                </div>

                <div className="space-y-3 mt-3">
                  <div className="flex gap-1">
                    <div className="w-10 h-10 bg-white dark:bg-gray-700 border-2 border-gray-300 dark:border-gray-600 flex items-center justify-center">P</div>
                    <div className="w-10 h-10 bg-yellow-500 text-white flex items-center justify-center font-bold border-2 border-yellow-500">I</div>
                    <div className="w-10 h-10 bg-white dark:bg-gray-700 border-2 border-gray-300 dark:border-gray-600 flex items-center justify-center">L</div>
                    <div className="w-10 h-10 bg-white dark:bg-gray-700 border-2 border-gray-300 dark:border-gray-600 flex items-center justify-center">L</div>
                    <div className="w-10 h-10 bg-white dark:bg-gray-700 border-2 border-gray-300 dark:border-gray-600 flex items-center justify-center">S</div>
                  </div>
                  <p className="text-sm">The letter <strong>I</strong> is in the word but in the wrong spot.</p>
                </div>

                <div className="space-y-3 mt-3">
                  <div className="flex gap-1">
                    <div className="w-10 h-10 bg-white dark:bg-gray-700 border-2 border-gray-300 dark:border-gray-600 flex items-center justify-center">V</div>
                    <div className="w-10 h-10 bg-white dark:bg-gray-700 border-2 border-gray-300 dark:border-gray-600 flex items-center justify-center">A</div>
                    <div className="w-10 h-10 bg-white dark:bg-gray-700 border-2 border-gray-300 dark:border-gray-600 flex items-center justify-center">G</div>
                    <div className="w-10 h-10 bg-gray-500 text-white flex items-center justify-center font-bold border-2 border-gray-500">U</div>
                    <div className="w-10 h-10 bg-white dark:bg-gray-700 border-2 border-gray-300 dark:border-gray-600 flex items-center justify-center">E</div>
                  </div>
                  <p className="text-sm">The letter <strong>U</strong> is not in the word in any spot.</p>
                </div>
              </div>

              <div className="border-t border-gray-300 dark:border-gray-600 pt-4 mt-4">
                <p className="font-semibold">Keyboard Support:</p>
                <p className="text-sm">Use your physical keyboard to type letters, press Enter to submit, and Backspace to delete.</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
