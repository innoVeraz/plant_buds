export interface IPapApiResponse {
  api: APIInfo;
  results: Result[];
}

interface APIInfo {
  name: string;
  url: string;
  version: string;
  updated: Date;
  encoding: string;
}

interface Result {
  postal_code: string;
  city: string;
  latitude: string;
  longitude: string;
  county_code: string;
  county: string;
  state_code: string;
  state: string;
  country: string;
  maps: string[];
  note: string;
  created: Date;
  updated: Date;
}
