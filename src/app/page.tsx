
import { words } from "./lib/words";
import Header from "./ui/header";
import Wordle from "./ui/wordle";

export default function Home() {
  const wordsLength = words.length;
  const wordle = words[Math.floor(Math.random() * wordsLength)].toUpperCase();
  console.log(wordle);
  return (
    <div className="h-screen bg-white">
      <Header />
      <Wordle
        wordle={'JOKER'}
      />
    </div>
  );
}
