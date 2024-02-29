'use client';

import Keyboard from "./keyboard";
import ShowWords from "./showWords";

const clickKeys = (letter: string) => {
  console.log(letter);
};

export default function Wordle() {
  return (
    <div>
      <ShowWords />
      <Keyboard
        inPlace={['Q', 'W']}
        exists={['Q']}
        notExists={['Y']}
        clickKeys={clickKeys}
      />
    </div>
  );
}
