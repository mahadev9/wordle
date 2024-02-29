import { LetterBox } from "./letterBox";

const NOT_USED_COLOR = 'bg-gray-200';
const USED_COLOR = 'bg-gray-500';
const IN_PLACE_COLOR = 'bg-yellow-200';
const EXISTS_COLOR = 'bg-lime-300';

export default function ShowWords(props: any) {
  return (
    <div className="text-black grid grid-rows-6 grid-flow-col gap-2 justify-center items-center">
      <div className="grid grid-rows-1 grid-flow-col gap-2">
        {props.firstWord.map((character: string, index: number) => (
          <LetterBox
            letter={character}
            key={index}
            className={props.currentLine != 1 && (props.wordle.includes(character) ? (props.wordle.indexOf(character) == index ? EXISTS_COLOR : IN_PLACE_COLOR) : USED_COLOR)}
          />
        ))}
      </div>
      <div className="grid grid-rows-1 grid-flow-col gap-2">
        {props.secondWord.map((character: string, index: number) => (
          <LetterBox
            letter={character}
            key={index}
            className={props.currentLine != 2 && (props.wordle.includes(character) ? (props.wordle.indexOf(character) == index ? EXISTS_COLOR : IN_PLACE_COLOR) : USED_COLOR)}
          />
        ))}
      </div>
      <div className="grid grid-rows-1 grid-flow-col gap-2">
        {props.thirdWord.map((character: string, index: number) => (
          <LetterBox
            letter={character}
            key={index}
            className={props.currentLine != 4 && (props.wordle.includes(character) ? (props.wordle.indexOf(character) == index ? EXISTS_COLOR : IN_PLACE_COLOR) : USED_COLOR)}
          />
        ))}
      </div>
      <div className="grid grid-rows-1 grid-flow-col gap-2">
        {props.forthWord.map((character: string, index: number) => (
          <LetterBox
            letter={character}
            key={index}
            className={props.currentLine != 5 && (props.wordle.includes(character) ? (props.wordle.indexOf(character) == index ? EXISTS_COLOR : IN_PLACE_COLOR) : USED_COLOR)}
          />
        ))}
      </div>
      <div className="grid grid-rows-1 grid-flow-col gap-2">
        {props.fifthWord.map((character: string, index: number) => (
          <LetterBox
            letter={character}
            key={index}
            className={props.currentLine != 6 && (props.wordle.includes(character) ? (props.wordle.indexOf(character) == index ? EXISTS_COLOR : IN_PLACE_COLOR) : USED_COLOR)}
          />
        ))}
      </div>
      <div className="grid grid-rows-1 grid-flow-col gap-2">
        {props.sixthWord.map((character: string, index: number) => (
          <LetterBox
            letter={character}
            key={index}
            className={props.currentLine != 3 && (props.wordle.includes(character) ? (props.wordle.indexOf(character) == index ? EXISTS_COLOR : IN_PLACE_COLOR) : USED_COLOR)}
          />
        ))}
      </div>
    </div>
  );
}
