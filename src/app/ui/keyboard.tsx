import KeyStorke from "./ketStroke";

const FIRST_LINE_CHARACTERS = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
const SECOND_LINE_CHARACTERS = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
const THIRD_LINE_CHARACTERS = ['Z', 'X', 'C', 'V', 'B', 'N', 'M'];

const NOT_USED_COLOR = 'bg-gray-200';
const USED_COLOR = 'bg-gray-500';
const IN_PLACE_COLOR = 'bg-lime-300';
const EXISTS_COLOR = 'bg-yellow-200';

export default function Keyboard(props: any) {
  return (
    <div className="grid grid-rows-3 grid-flow-col gap-2">
      <div className="first-line grid grid-rows-1 grid-flow-col gap-1 justify-center items-center">
        {FIRST_LINE_CHARACTERS.map((character, index) => (
          <KeyStorke
            letter={character}
            key={index}
            clickKeys={props.clickKeys}
            className={props.exists.includes(character) ? (props.inPlace.includes(character) ? IN_PLACE_COLOR : EXISTS_COLOR) : (props.notExists.includes(character) ? USED_COLOR : NOT_USED_COLOR)}
          />
        ))}
      </div>
      <div className="second-line grid grid-rows-1 grid-flow-col gap-1 justify-center items-center">
        {SECOND_LINE_CHARACTERS.map((character, index) => (
          <KeyStorke
            letter={character}
            key={index}
            clickKeys={props.clickKeys}
            className={props.exists.includes(character) ? (props.inPlace.includes(character) ? IN_PLACE_COLOR : EXISTS_COLOR) : (props.notExists.includes(character) ? USED_COLOR : NOT_USED_COLOR)}
          />
        ))}
      </div>
      <div className="third-line grid grid-rows-1 grid-flow-col gap-1 justify-center items-center">
        <button
          className={`enter text-black border border-gray-700 rounded font-medium md:text-lg flex items-center justify-center w-12 h-12 md:w-20 md:h-16 subpixel-antialiased ${NOT_USED_COLOR}`}
          onClick={() => { props.clickEnter() }}>
          <span>ENTER</span>
        </button>
        {THIRD_LINE_CHARACTERS.map((character, index) => (
          <KeyStorke
            letter={character}
            key={index}
            clickKeys={props.clickKeys}
            className={props.exists.includes(character) ? (props.inPlace.includes(character) ? IN_PLACE_COLOR : EXISTS_COLOR) : (props.notExists.includes(character) ? USED_COLOR : NOT_USED_COLOR)}
          />
        ))}
        <button
          className={`clear text-black border border-gray-700 rounded font-medium md:text-lg flex items-center justify-center w-12 h-12 md:w-20 md:h-16 subpixel-antialiased ${NOT_USED_COLOR}`}
          onClick={() => { props.clickClear() }}>
          <span>CLEAR</span>
        </button>
      </div>
    </div>
  );
}
