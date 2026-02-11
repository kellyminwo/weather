import Searchbar from "./components/Searchbar";

export default function Home() {
  return (
    <main>
      <h1 className="my-16 text-center text-preset-2">
        How’s the sky looking today?
      </h1>
      <Searchbar />
    </main>
  );
}
