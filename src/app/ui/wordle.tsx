'use client';

import { useState } from "react";
import Keyboard from "./keyboard";
import ShowWords from "./showWords";
import { words } from "../lib/words";

function clearMethod(word: string[], setMethod: (arg0: any[]) => void) {
  let tempFirstWord = [...word];
  let found = false;
  for (let i = word.length - 1; i >= 0; i--) {
    if (!found && tempFirstWord[i] != '') {
      tempFirstWord[i] = '';
      found = true;
    }
  }
  setMethod(tempFirstWord);
}

function enterMethod(
  thWord: string[],
  inPlace: string[],
  exists: string[],
  notExists: string[],
  currentLine: number,
  setInPlace: (arg0: any[]) => void,
  setExists: (arg0: any[]) => void,
  setNotExists: (arg0: any[]) => void,
  setCurrentLine: (arg0: number) => void, props: any
) {
  if (thWord.join('') == props.wordle) {
    alert('You win!');
    return;
  }
  if (words.includes(thWord.join('').toLowerCase())) {
    const tempInPlace = [...thWord.filter((letter, index) => props.wordle[index] == letter), ...inPlace];
    setInPlace(tempInPlace);

    const tempExists = [...thWord.filter((letter) => props.wordle.includes(letter) && !inPlace.includes(letter)), ...exists];
    setExists(tempExists);

    const tempNotExists = [...thWord.filter((letter) => !props.wordle.includes(letter)), ...notExists];
    setNotExists(tempNotExists);

    setCurrentLine(currentLine + 1);
  } else {
    alert('This word is not in the dictionary!');
  }
  if (currentLine == 6) {
    alert('You lose!');
  }
}

export default function Wordle(props: any) {

  const [currentLine, setCurrentLine] = useState(1);

  const [firstWord, setFirstWord] = useState(['', '', '', '', '']);
  const [secondWord, setSecondWord] = useState(['', '', '', '', '']);
  const [thirdWord, setThirdWord] = useState(['', '', '', '', '']);
  const [forthWord, setForthWord] = useState(['', '', '', '', '']);
  const [fifthWord, setFifthWord] = useState(['', '', '', '', '']);
  const [sixthWord, setSixthWord] = useState(['', '', '', '', '']);

  const [inPlace, setInPlace] = useState(['']);
  const [exists, setExists] = useState(['']);
  const [notExists, setNotExists] = useState(['']);

  const clickKeys = (letter: string) => {
    if (currentLine == 1) {
      setFirstWord(firstWord.map((l, i) => i == firstWord.indexOf('') ? letter : l));
    }
    if (currentLine == 2) {
      setSecondWord(secondWord.map((l, i) => i == secondWord.indexOf('') ? letter : l));
    }
    if (currentLine == 3) {
      setThirdWord(thirdWord.map((l, i) => i == thirdWord.indexOf('') ? letter : l));
    }
    if (currentLine == 4) {
      setForthWord(forthWord.map((l, i) => i == forthWord.indexOf('') ? letter : l));
    }
    if (currentLine == 5) {
      setFifthWord(fifthWord.map((l, i) => i == fifthWord.indexOf('') ? letter : l));
    }
    if (currentLine == 6) {
      setSixthWord(sixthWord.map((l, i) => i == sixthWord.indexOf('') ? letter : l));
    }
  }

  const clickEnter = () => {
    if (currentLine == 6 && sixthWord.length == 5 && sixthWord.every((letter) => letter != '')) {
      enterMethod(sixthWord, inPlace, exists, notExists, currentLine, setInPlace, setExists, setNotExists, setCurrentLine, props);
    }
    if (currentLine == 5 && fifthWord.length == 5 && fifthWord.every((letter) => letter != '')) {
      enterMethod(fifthWord, inPlace, exists, notExists, currentLine, setInPlace, setExists, setNotExists, setCurrentLine, props);
    }
    if (currentLine == 4 && forthWord.length == 5 && forthWord.every((letter) => letter != '')) {
      enterMethod(forthWord, inPlace, exists, notExists, currentLine, setInPlace, setExists, setNotExists, setCurrentLine, props);
    }
    if (currentLine == 3 && thirdWord.length == 5 && thirdWord.every((letter) => letter != '')) {
      enterMethod(thirdWord, inPlace, exists, notExists, currentLine, setInPlace, setExists, setNotExists, setCurrentLine, props);
    }
    if (currentLine == 2 && secondWord.length == 5 && secondWord.every((letter) => letter != '')) {
      enterMethod(secondWord, inPlace, exists, notExists, currentLine, setInPlace, setExists, setNotExists, setCurrentLine, props);
    }
    if (currentLine == 1 && firstWord.length == 5 && firstWord.every((letter) => letter != '')) {
      enterMethod(firstWord, inPlace, exists, notExists, currentLine, setInPlace, setExists, setNotExists, setCurrentLine, props);
    }
  }

  const clickClear = () => {
    if (currentLine == 1) {
      clearMethod(firstWord, setFirstWord);
    }
    if (currentLine == 2) {
      clearMethod(secondWord, setSecondWord);
    }
    if (currentLine == 3) {
      clearMethod(thirdWord, setThirdWord);
    }
    if (currentLine == 4) {
      clearMethod(forthWord, setForthWord);
    }
    if (currentLine == 5) {
      clearMethod(fifthWord, setFifthWord);
    }
    if (currentLine == 6) {
      clearMethod(sixthWord, setSixthWord);
    }
  }

  return (
    <div>
      <ShowWords
        wordle={props.wordle.split('')}
        currentLine={currentLine}
        firstWord={firstWord}
        secondWord={secondWord}
        thirdWord={thirdWord}
        forthWord={forthWord}
        fifthWord={fifthWord}
        sixthWord={sixthWord}
      />
      <div className="my-16" />
      <Keyboard
        inPlace={inPlace}
        exists={exists}
        notExists={notExists}
        clickKeys={clickKeys}
        clickEnter={clickEnter}
        clickClear={clickClear}
      />
    </div>
  );
}
