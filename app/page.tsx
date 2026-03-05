import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import Forecast from "./components/forecast/Forecast";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ la: number; lo: number; name: string }>;
}) {
  const { la, lo, name } = await searchParams;

  return (
    <>
      <Navbar />
      <main>
        <h1 className="my-16 text-center text-preset-2">
          How’s the sky looking today?
        </h1>
        <Searchbar />
        <Forecast la={la} lo={lo} locationName={name} />
      </main>
    </>
  );
}
