interface IResponse {
  hits_total: number;
  hits_returned: number;
  identified_keywords_for_input: {
    competencies: string[];
    occupations: string[];
  };
  related_occupation: IOccupation[];
}

interface IOccupation {
  id: string;
  occupation_label: string;
  concept_taxonomy_id: string;
  legacy_ams_taxonomy_id: string;
  occupation_group: {
    occupation_group_label: string;
    concept_taxonomy_id: string;
    ssyk: string;
  };
  metadata: {
    enriched_ads_count: number;
    enriched_ads_total_count: number;
    enriched_ads_percent_of_total: number;
    match_score: number;
  };
}

class MatchService {
  private baseurl =
    "https://jobed-connect-api.jobtechdev.se/v1/occupations/match-by-text";
  matchByText(input_text: string, limit: number, offset: number) {
    const response = axios.post(
      `?input_text=${input_text}&limit=${limit}&offset=${offset}&include_metadata=false`
    );
  }
}

const matchService = new MatchService();
matchService.matchByText();
