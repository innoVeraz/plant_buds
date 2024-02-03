import { IPapApiResponse } from "@/models/IPapApiResponse.dto";
import axios from "axios";

const basePath = "https://api.papapi.se/lite/";
const apiKey = process.env.PAP_API_KEY!;

export async function getInfoByPostalNumber(postalNumber: string) {
  const query = new URLSearchParams({
    query: postalNumber,
    format: "json",
    apikey: apiKey,
  });
  const response = await axios.get<IPapApiResponse>(`${basePath}?${query}`);

  return response.data;
}
