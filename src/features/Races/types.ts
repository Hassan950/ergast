export interface Location {
  lat: string;
  long: string;
  locality: string;
  country: string;
}

export interface Circuit {
  circuitId: string;
  url: string;
  circuitName: string;
  Location: Location;
}

export interface Session {
  date: string;
  time: string;
}

export interface Race {
  season: string;
  round: string;
  url: string;
  raceName: string;
  Circuit: Circuit;
  date: string;
  time: string;
  FirstPractice: Session;
  SecondPractice: Session;
  ThirdPractice: Session;
  Qualifying: Session;
}

export interface RaceTable {
  season: string;
  Races: Race[];
}

export interface GetRacesResponse {
  MRData: {
    xmlns: string;
    series: string;
    limit: string;
    offset: string;
    total: string;
    RaceTable: RaceTable;
  };
}
