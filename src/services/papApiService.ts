const basePath = "https://api.papapi.se/lite/";

export async function getInfoByPostalNumber(postalNumber: string) {
  const query = new URLSearchParams({
    query: postalNumber,
    format: "json",
    apikey: "4fb294930daf748386a6fb9886a384de24263ed0",
  });
  const response = await fetch(`${basePath}?${query}`);
  const result = await response.json();
  return result;
}
