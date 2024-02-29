'use client';

export default function KeyStorke(props: any) {
  return (
    <button
      className={`text-black border border-gray-700 rounded font-medium text-lg md:text-2xl flex items-center justify-center w-6 h-10 md:w-12 md:h-16 subpixel-antialiased ${props.className}`}
      onClick={() => {props.clickKeys(props.letter)}}>
      <span>{props.letter}</span>
    </button>
  );
}
