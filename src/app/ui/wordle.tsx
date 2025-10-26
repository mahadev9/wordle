'use client';

import { useState, useEffect, useCallback } from "react";
import Keyboard from "./keyboard";
import ShowWords from "./showWords";
import Toast from "./toast";
import GameOverModal from "./gameOverModal";
import { words } from "../lib/words";

interface WordleProps {
  wordle: string;
  onPlayAgain: () => void;
}

export default function Wordle({ wordle, onPlayAgain }: WordleProps) {
  const [currentLine, setCurrentLine] = useState(1);
  const [gameState, setGameState] = useState<'playing' | 'won' | 'lost'>('playing');
  
  const [firstWord, setFirstWord] = useState(['', '', '', '', '']);
  const [secondWord, setSecondWord] = useState(['', '', '', '', '']);
  const [thirdWord, setThirdWord] = useState(['', '', '', '', '']);
  const [forthWord, setForthWord] = useState(['', '', '', '', '']);
  const [fifthWord, setFifthWord] = useState(['', '', '', '', '']);
  const [sixthWord, setSixthWord] = useState(['', '', '', '', '']);

  const [inPlace, setInPlace] = useState<string[]>([]);
  const [exists, setExists] = useState<string[]>([]);
  const [notExists, setNotExists] = useState<string[]>([]);
  
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' | 'info' } | null>(null);
  const [shake, setShake] = useState(false);
  const [animatingLine, setAnimatingLine] = useState<number | null>(null);

  const resetGame = () => {
    // Reset all state
    setCurrentLine(1);
    setGameState('playing');
    setFirstWord(['', '', '', '', '']);
    setSecondWord(['', '', '', '', '']);
    setThirdWord(['', '', '', '', '']);
    setForthWord(['', '', '', '', '']);
    setFifthWord(['', '', '', '', '']);
    setSixthWord(['', '', '', '', '']);
    setInPlace([]);
    setExists([]);
    setNotExists([]);
    setToast(null);
    setShake(false);
    setAnimatingLine(null);
    
    // Generate new word
    onPlayAgain();
  };

  const showToast = (message: string, type: 'success' | 'error' | 'info' = 'info') => {
    setToast({ message, type });
  };

  const clickKeys = useCallback((letter: string) => {
    if (gameState !== 'playing') return;
    
    let currentWord: string[] = [];
    let setWord: (word: string[]) => void = () => {};

    switch (currentLine) {
      case 1:
        currentWord = firstWord;
        setWord = setFirstWord;
        break;
      case 2:
        currentWord = secondWord;
        setWord = setSecondWord;
        break;
      case 3:
        currentWord = thirdWord;
        setWord = setThirdWord;
        break;
      case 4:
        currentWord = forthWord;
        setWord = setForthWord;
        break;
      case 5:
        currentWord = fifthWord;
        setWord = setFifthWord;
        break;
      case 6:
        currentWord = sixthWord;
        setWord = setSixthWord;
        break;
    }
    
    const emptyIndex = currentWord.indexOf('');
    
    if (emptyIndex !== -1) {
      const newWord = [...currentWord];
      newWord[emptyIndex] = letter;
      setWord(newWord);
    }
  }, [currentLine, gameState, firstWord, secondWord, thirdWord, forthWord, fifthWord, sixthWord]);

  const clickClear = useCallback(() => {
    if (gameState !== 'playing') return;
    
    let currentWord: string[] = [];
    let setWord: (word: string[]) => void = () => {};

    switch (currentLine) {
      case 1:
        currentWord = firstWord;
        setWord = setFirstWord;
        break;
      case 2:
        currentWord = secondWord;
        setWord = setSecondWord;
        break;
      case 3:
        currentWord = thirdWord;
        setWord = setThirdWord;
        break;
      case 4:
        currentWord = forthWord;
        setWord = setForthWord;
        break;
      case 5:
        currentWord = fifthWord;
        setWord = setFifthWord;
        break;
      case 6:
        currentWord = sixthWord;
        setWord = setSixthWord;
        break;
    }
    
    const newWord = [...currentWord];
    
    for (let i = newWord.length - 1; i >= 0; i--) {
      if (newWord[i] !== '') {
        newWord[i] = '';
        break;
      }
    }
    
    setWord(newWord);
  }, [currentLine, gameState, firstWord, secondWord, thirdWord, forthWord, fifthWord, sixthWord]);

  const clickEnter = useCallback(() => {
    if (gameState !== 'playing') return;
    
    let currentWord: string[] = [];

    switch (currentLine) {
      case 1:
        currentWord = firstWord;
        break;
      case 2:
        currentWord = secondWord;
        break;
      case 3:
        currentWord = thirdWord;
        break;
      case 4:
        currentWord = forthWord;
        break;
      case 5:
        currentWord = fifthWord;
        break;
      case 6:
        currentWord = sixthWord;
        break;
    }
    
    // Check if word is complete
    if (currentWord.some(letter => letter === '')) {
      showToast('Not enough letters', 'error');
      setShake(true);
      setTimeout(() => setShake(false), 500);
      return;
    }

    const wordString = currentWord.join('').toLowerCase();
    
    // Check if word is in dictionary
    if (!words.includes(wordString)) {
      showToast('Not in word list', 'error');
      setShake(true);
      setTimeout(() => setShake(false), 500);
      return;
    }

    // Animate the tiles flipping
    setAnimatingLine(currentLine);
    
    setTimeout(() => {
      setAnimatingLine(null);
      
      // Update letter states
      const newInPlace = currentWord
        .filter((letter, index) => wordle[index] === letter)
        .concat(inPlace);
      setInPlace(newInPlace);

      const newExists = currentWord
        .filter((letter) => wordle.includes(letter) && !newInPlace.includes(letter))
        .concat(exists);
      setExists(newExists);

      const newNotExists = currentWord
        .filter((letter) => !wordle.includes(letter))
        .concat(notExists);
      setNotExists(newNotExists);

      // Check win condition
      if (currentWord.join('') === wordle) {
        setGameState('won');
        return;
      }

      // Check lose condition
      if (currentLine === 6) {
        setGameState('lost');
        return;
      }

      // Move to next line
      setCurrentLine(currentLine + 1);
    }, 600);
  }, [currentLine, gameState, wordle, inPlace, exists, notExists, firstWord, secondWord, thirdWord, forthWord, fifthWord, sixthWord]);

  // Keyboard event listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (gameState !== 'playing') return;

      if (e.key === 'Enter') {
        clickEnter();
      } else if (e.key === 'Backspace') {
        clickClear();
      } else if (/^[a-zA-Z]$/.test(e.key)) {
        clickKeys(e.key.toUpperCase());
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [clickKeys, clickClear, clickEnter, gameState]);

  return (
    <div className="flex flex-col items-center justify-between min-h-[calc(100vh-64px)] py-8">
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}

      {gameState !== 'playing' && (
        <GameOverModal
          isWin={gameState === 'won'}
          word={wordle}
          attempts={currentLine}
          onPlayAgain={resetGame}
        />
      )}

      <div className="flex-1 flex items-center">
        <ShowWords
          wordle={wordle.split('')}
          currentLine={currentLine}
          firstWord={firstWord}
          secondWord={secondWord}
          thirdWord={thirdWord}
          forthWord={forthWord}
          fifthWord={fifthWord}
          sixthWord={sixthWord}
          inPlace={inPlace}
          exists={exists}
          notExists={notExists}
          shake={shake}
          animatingLine={animatingLine}
        />
      </div>

      <div className="w-full max-w-lg px-2">
        <Keyboard
          inPlace={inPlace}
          exists={exists}
          notExists={notExists}
          clickKeys={clickKeys}
          clickEnter={clickEnter}
          clickClear={clickClear}
        />
      </div>
    </div>
  );
}
