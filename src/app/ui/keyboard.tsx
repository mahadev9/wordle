import KeyStorke from "./ketStroke";

const FIRST_LINE_CHARACTERS = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
const SECOND_LINE_CHARACTERS = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
const THIRD_LINE_CHARACTERS = ['Z', 'X', 'C', 'V', 'B', 'N', 'M'];
const NOT_USED_COLOR = 'bg-gray-200';
const USED_COLOR = 'bg-gray-500';
const IN_PLACE_COLOR = 'bg-yellow-200';
const EXISTS_COLOR = 'bg-lime-300';

export default function Keyboard(props: any) {
  return (
    <div className="grid grid-rows-3 grid-flow-col space-y-1">
      <div className="first-line grid grid-rows-1 grid-flow-col space-x-1 justify-center items-center" id="first-line">
        {FIRST_LINE_CHARACTERS.map((character, index) => (
          <KeyStorke
            letter={character}
            key={index}
            clickKeys={props.clickKeys}
            className={props.inPlace.includes(character) ? (props.exists.includes(character) ? EXISTS_COLOR : IN_PLACE_COLOR) : (props.notExists.includes(character) ? USED_COLOR : NOT_USED_COLOR)}
          />
        ))}
      </div>
      <div className="second-line grid grid-rows-1 grid-flow-col space-x-1 justify-center items-center" id="second-line">
        {SECOND_LINE_CHARACTERS.map((character, index) => (
          <KeyStorke
            letter={character}
            key={index}
            clickKeys={props.clickKeys}
            className={props.inPlace.includes(character) ? (props.exists.includes(character) ? EXISTS_COLOR : IN_PLACE_COLOR) : (props.notExists.includes(character) ? USED_COLOR : NOT_USED_COLOR)}
          />
        ))}
      </div>
      <div className="third-line grid grid-rows-1 grid-flow-col space-x-1 justify-center items-center" id="third-line">
        <KeyStorke 
          letter='ENTER'
          key={-1}
          clickKeys={props.clickKeys}
          className={NOT_USED_COLOR}
        />
        {THIRD_LINE_CHARACTERS.map((character, index) => (
          <KeyStorke
            letter={character}
            key={index}
            clickKeys={props.clickKeys}
            className={props.inPlace.includes(character) ? (props.exists.includes(character) ? EXISTS_COLOR : IN_PLACE_COLOR) : (props.notExists.includes(character) ? USED_COLOR : NOT_USED_COLOR)}
          />
        ))}
        <KeyStorke 
          letter='BCKSPC'
          key={-2}
          clickKeys={props.clickKeys}
          className={NOT_USED_COLOR}
        />
      </div>
    </div>
  );
}
