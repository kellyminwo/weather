import Searchbar from "./components/Searchbar";
import Forecast from './components/Forecast'

export default async function Home({ searchParams }: {
  searchParams: Promise<{ [key: string]: number }>
}) {
    const { la, lo } = await searchParams
    
  return (
    <main>
      <h1 className="my-16 text-center text-preset-2">
        How’s the sky looking today?
      </h1>
      <Searchbar />
      <Forecast la={la} lo={lo} />
    </main>
  );
}
