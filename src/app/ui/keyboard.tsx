import KeyStroke from "./ketStroke";

const FIRST_LINE_CHARACTERS = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
const SECOND_LINE_CHARACTERS = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
const THIRD_LINE_CHARACTERS = ['Z', 'X', 'C', 'V', 'B', 'N', 'M'];

function keyboardShow(characters: string[], props: any) {
  const getKeyColor = (character: string) => {
    if (props.inPlace.includes(character)) {
      return 'bg-green-600 dark:bg-green-700 text-white';
    }
    if (props.exists.includes(character)) {
      return 'bg-yellow-500 dark:bg-yellow-600 text-white';
    }
    if (props.notExists.includes(character)) {
      return 'bg-gray-500 dark:bg-gray-600 text-white';
    }
    return 'bg-gray-300 dark:bg-gray-700 text-black dark:text-white hover:bg-gray-400 dark:hover:bg-gray-600';
  };

  return (
    <div className="grid grid-rows-1 grid-flow-col gap-1 justify-center items-center">
      {characters.map((character, index) => (
        <KeyStroke
          letter={character}
          key={index}
          clickKeys={props.clickKeys}
          className={getKeyColor(character)}
        />
      ))}
    </div>
  );
}

export default function Keyboard(props: any) {
  return (
    <div className="grid grid-rows-3 grid-flow-col gap-2">
      {keyboardShow(FIRST_LINE_CHARACTERS, props)}
      {keyboardShow(SECOND_LINE_CHARACTERS, props)}
      <div className="third-line grid grid-rows-1 grid-flow-col gap-1 justify-center items-center">
        <button
          className="enter text-black dark:text-white bg-gray-300 dark:bg-gray-700 border-2 border-gray-400 dark:border-gray-600 rounded font-bold text-xs flex items-center justify-center w-16 h-12 md:w-20 md:h-14 hover:bg-gray-400 dark:hover:bg-gray-600 transition-colors duration-150 active:scale-95"
          onClick={() => { props.clickEnter() }}>
          <span>ENTER</span>
        </button>
        {keyboardShow(THIRD_LINE_CHARACTERS, props)}
        <button
          className="clear text-black dark:text-white bg-gray-300 dark:bg-gray-700 border-2 border-gray-400 dark:border-gray-600 rounded font-bold text-xs flex items-center justify-center w-16 h-12 md:w-20 md:h-14 hover:bg-gray-400 dark:hover:bg-gray-600 transition-colors duration-150 active:scale-95"
          onClick={() => { props.clickClear() }}>
          <span>⌫</span>
        </button>
      </div>
    </div>
  );
}

