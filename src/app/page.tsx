'use client';

import { useState, useEffect } from "react";
import { words } from "./lib/words";
import Header from "./ui/header";
import Wordle from "./ui/wordle";

export default function Home() {
  const [wordle, setWordle] = useState('');

  const generateNewWord = () => {
    const wordsLength = words.length;
    const newWordle = words[Math.floor(Math.random() * wordsLength)].toUpperCase();
    console.log('New word:', newWordle);
    setWordle(newWordle);
  };

  useEffect(() => {
    generateNewWord();
  }, []);

  if (!wordle) {
    return (
      <div className="h-screen bg-white dark:bg-gray-900 flex items-center justify-center">
        <div className="text-2xl font-bold text-gray-700 dark:text-gray-300">Loading...</div>
      </div>
    );
  }

  return (
    <div className="h-screen bg-white dark:bg-gray-900">
      <Header />
      <Wordle wordle={wordle} onPlayAgain={generateNewWord} />
    </div>
  );
}

