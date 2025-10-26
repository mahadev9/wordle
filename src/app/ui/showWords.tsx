import { LetterBox } from "./letterBox";

function LetterBoxShow(
  word: string[],
  props: any,
  line: number,
) {
  const isCurrentLine = props.currentLine === line;
  const isPastLine = props.currentLine > line;
  const shouldAnimate = props.animatingLine === line;

  const getLetterState = (character: string, index: number) => {
    if (!character) return 'empty';
    if (isCurrentLine) return 'active';
    if (!isPastLine) return 'empty';
    
    if (props.wordle[index] === character) return 'correct';
    if (props.wordle.includes(character)) return 'present';
    return 'absent';
  };

  return (
    <div className={`grid grid-rows-1 grid-flow-col gap-2 ${props.shake && isCurrentLine ? 'row-shake' : ''}`}>
      {word.map((character: string, index: number) => (
        <LetterBox
          letter={character}
          key={index}
          state={getLetterState(character, index)}
          animate={shouldAnimate}
          delay={index * 100}
        />
      ))}
    </div>
  );
}

export default function ShowWords(props: any) {
  return (
    <div className="text-black dark:text-white grid grid-rows-6 grid-flow-col gap-2 justify-center items-center">
      {LetterBoxShow(props.firstWord, props, 1)}
      {LetterBoxShow(props.secondWord, props, 2)}
      {LetterBoxShow(props.thirdWord, props, 3)}
      {LetterBoxShow(props.forthWord, props, 4)}
      {LetterBoxShow(props.fifthWord, props, 5)}
      {LetterBoxShow(props.sixthWord, props, 6)}
    </div>
  );
}

