import { LetterBox } from "./letterBox";

const NOT_USED_COLOR = 'bg-gray-200';
const USED_COLOR = 'bg-gray-500';
const IN_PLACE_COLOR = 'bg-yellow-200';
const EXISTS_COLOR = 'bg-lime-300';

function LetterBoxShow(
  word: string[],
  currentLine: number,
  line: number,
  wordle: string[]
) {
  return (
    <div className="grid grid-rows-1 grid-flow-col gap-2">
      {word.map((character: string, index: number) => (
        <LetterBox
          letter={character}
          key={index}
          className={currentLine != line && (wordle.includes(character) ? (wordle[index] == character ? EXISTS_COLOR : IN_PLACE_COLOR) : USED_COLOR)}
        />
      ))}
    </div>
  )
}

export default function ShowWords(props: any) {
  return (
    <div className="text-black grid grid-rows-6 grid-flow-col gap-2 justify-center items-center">
      {LetterBoxShow(props.firstWord, props.currentLine, 1, props.wordle)}
      {LetterBoxShow(props.secondWord, props.currentLine, 2, props.wordle)}
      {LetterBoxShow(props.thirdWord, props.currentLine, 3, props.wordle)}
      {LetterBoxShow(props.forthWord, props.currentLine, 4, props.wordle)}
      {LetterBoxShow(props.fifthWord, props.currentLine, 5, props.wordle)}
      {LetterBoxShow(props.sixthWord, props.currentLine, 6, props.wordle)}
    </div>
  );
}
