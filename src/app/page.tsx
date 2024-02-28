
import Header from "./ui/header";
import Wordle from "./ui/wordle";

export default function Home() {
  return (
    <div className="h-screen bg-white">
      <Header />
      <Wordle />
    </div>
  );
}
