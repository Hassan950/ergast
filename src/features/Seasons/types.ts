export interface Season {
  season: string;
  url: string;
}

export interface SeasonTable {
  constructorId: string;
  driverId: string;
  Seasons: Season[];
}

export interface GetSeasonsResponse {
  MRData: {
    xmlns: string;
    series: string;
    limit: string;
    offset: string;
    total: string;
    SeasonTable: SeasonTable;
  };
}
