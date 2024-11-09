interface PaginationParams {
  limit: number;
  offset: number;
}

export interface Response {
  MRData: {
    xmlns: string;
    series: string;
    limit: string;
    offset: string;
    total: string;
  };
}
