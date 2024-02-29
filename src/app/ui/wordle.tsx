'use client';

import { useState } from "react";
import Keyboard from "./keyboard";
import ShowWords from "./showWords";
import { words } from "../lib/words";

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
    console.log(currentLine, inPlace, exists, notExists);
    if (currentLine == 6 && sixthWord.length == 5 && sixthWord.every((letter) => letter != '')) {
      if (sixthWord.join('') == props.wordle) {
        alert('You win!');
        return;
      }
      if (words.includes(sixthWord.join('').toLowerCase())) {
        const tempInPlace = [...sixthWord.filter((letter, index) => props.wordle[index] == letter), ...inPlace];
        setInPlace(tempInPlace);

        const tempExists = [...sixthWord.filter((letter) => props.wordle.includes(letter) && !inPlace.includes(letter)), ...exists];
        setExists(tempExists);

        const tempNotExists = [...sixthWord.filter((letter) => !props.wordle.includes(letter)), ...notExists];
        setNotExists(tempNotExists);

        setCurrentLine(7);
      }
      alert('You lost!');
    }
    if (currentLine == 5 && fifthWord.length == 5 && fifthWord.every((letter) => letter != '')) {
      if (fifthWord.join('') == props.wordle) {
        alert('You win!');
        return;
      }
      if (words.includes(fifthWord.join('').toLowerCase())) {
        const tempInPlace = [...fifthWord.filter((letter, index) => props.wordle[index] == letter), ...inPlace];
        setInPlace(tempInPlace);

        const tempExists = [...fifthWord.filter((letter) => props.wordle.includes(letter) && !inPlace.includes(letter)), ...exists];
        setExists(tempExists);

        const tempNotExists = [...fifthWord.filter((letter) => !props.wordle.includes(letter)), ...notExists];
        setNotExists(tempNotExists);

        setCurrentLine(6);
      } else {
        alert('This word is not in the dictionary!');
      }
    }
    if (currentLine == 4 && forthWord.length == 5 && forthWord.every((letter) => letter != '')) {
      if (forthWord.join('') == props.wordle) {
        alert('You win!');
        return;
      }
      if (words.includes(forthWord.join('').toLowerCase())) {
        const tempInPlace = [...forthWord.filter((letter, index) => props.wordle[index] == letter), ...inPlace];
        setInPlace(tempInPlace);

        const tempExists = [...forthWord.filter((letter) => props.wordle.includes(letter) && !inPlace.includes(letter)), ...exists];
        setExists(tempExists);

        const tempNotExists = [...forthWord.filter((letter) => !props.wordle.includes(letter)), ...notExists];
        setNotExists(tempNotExists);

        setCurrentLine(5);
      } else {
        alert('This word is not in the dictionary!');
      }
    }
    if (currentLine == 3 && thirdWord.length == 5 && thirdWord.every((letter) => letter != '')) {
      if (thirdWord.join('') == props.wordle) {
        alert('You win!');
        return;
      }
      if (words.includes(thirdWord.join('').toLowerCase())) {
        const tempInPlace = [...thirdWord.filter((letter, index) => props.wordle[index] == letter), ...inPlace];
        setInPlace(tempInPlace);

        const tempExists = [...thirdWord.filter((letter) => props.wordle.includes(letter) && !inPlace.includes(letter)), ...exists];
        setExists(tempExists);

        const tempNotExists = [...thirdWord.filter((letter) => !props.wordle.includes(letter)), ...notExists];
        setNotExists(tempNotExists);

        setCurrentLine(4);
      } else {
        alert('This word is not in the dictionary!');
      }
    }
    if (currentLine == 2 && secondWord.length == 5 && secondWord.every((letter) => letter != '')) {
      if (secondWord.join('') == props.wordle) {
        alert('You win!');
        return;
      }
      if (words.includes(secondWord.join('').toLowerCase())) {
        const tempInPlace = [...secondWord.filter((letter, index) => props.wordle[index] == letter), ...inPlace];
        setInPlace(tempInPlace);

        const tempExists = [...secondWord.filter((letter) => props.wordle.includes(letter) && !inPlace.includes(letter)), ...exists];
        setExists(tempExists);

        const tempNotExists = [...secondWord.filter((letter) => !props.wordle.includes(letter)), ...notExists];
        setNotExists(tempNotExists);

        setCurrentLine(3);
      } else {
        alert('This word is not in the dictionary!');
      }
    }
    if (currentLine == 1 && firstWord.length == 5 && firstWord.every((letter) => letter != '')) {
      if (firstWord.join('') == props.wordle) {
        alert('You win!');
        return;
      }
      if (words.includes(firstWord.join('').toLowerCase())) {
        const tempInPlace = [...firstWord.filter((letter, index) => props.wordle[index] == letter), ...inPlace];
        setInPlace(tempInPlace);

        const tempExists = [...firstWord.filter((letter) => props.wordle.includes(letter) && !inPlace.includes(letter)), ...exists];
        setExists(tempExists);

        const tempNotExists = [...firstWord.filter((letter) => !props.wordle.includes(letter)), ...notExists];
        setNotExists(tempNotExists);

        setCurrentLine(2);
      } else {
        alert('This word is not in the dictionary!');
      }
    }
  }

  const clickClear = () => {
    if (currentLine == 1) {
      let tempFirstWord = [...firstWord];
      let found = false;
      for (let i = firstWord.length - 1; i >= 0; i--) {
        if (!found && tempFirstWord[i] != '') {
          tempFirstWord[i] = '';
          found = true;
        }
      }
      setFirstWord(tempFirstWord);
    }
    if (currentLine == 2) {
      let tempSecondWord = [...secondWord];
      let found = false;
      for (let i = secondWord.length - 1; i >= 0; i--) {
        if (!found && tempSecondWord[i] != '') {
          tempSecondWord[i] = '';
          found = true;
        }
      }
      setSecondWord(tempSecondWord);
    }
    if (currentLine == 3) {
      let tempThirdWord = [...thirdWord];
      let found = false;
      for (let i = thirdWord.length - 1; i >= 0; i--) {
        if (!found && tempThirdWord[i] != '') {
          tempThirdWord[i] = '';
          found = true;
        }
      }
      setThirdWord(tempThirdWord);
    }
    if (currentLine == 4) {
      let tempForthWord = [...forthWord];
      let found = false;
      for (let i = forthWord.length - 1; i >= 0; i--) {
        if (!found && tempForthWord[i] != '') {
          tempForthWord[i] = '';
          found = true;
        }
      }
      setForthWord(tempForthWord);
    }
    if (currentLine == 5) {
      let tempFifthWord = [...fifthWord];
      let found = false;
      for (let i = fifthWord.length - 1; i >= 0; i--) {
        if (!found && tempFifthWord[i] != '') {
          tempFifthWord[i] = '';
          found = true;
        }
      }
      setFifthWord(tempFifthWord);
    }
    if (currentLine == 6) {
      let tempSixthWord = [...sixthWord];
      let found = false;
      for (let i = sixthWord.length - 1; i >= 0; i--) {
        if (!found && tempSixthWord[i] != '') {
          tempSixthWord[i] = '';
          found = true;
        }
      }
      setSixthWord(tempSixthWord);
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
      <div className="my-4" />
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
