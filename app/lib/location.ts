export async function getLocation(name: string | number) {
  const res = await fetch(
    `https://geocoding-api.open-meteo.com/v1/search?name=${name}&count=4&language=en&format=json`,
  );
  if (!res.ok) {
    throw new Error(`Location with name ${name} not found`);
  }
  return res.json();
}
