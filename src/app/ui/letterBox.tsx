
export function LetterBox(props: any) {
  return (
    <div className={`text-black border border-gray-700 font-medium text-3xl flex items-center justify-center w-12 h-12 md:w-16 md:h-16 subpixel-antialiased ${props.className}`}>
      <span>{props.letter}</span>
    </div>
  );
}
