export interface IMovie {
  imdbID: string;
  Title: string;
  Poster?: string;
  Year: string;
  Type: string;
  //   uri: string;
  //   genre: string;
  //   director: string;
  //   writer: string;
  //   plot: string;
  //   rating: IRating[];
}
export interface IMovies {
  Search: IMovie[];
}

interface IRating {
  Source: string;
  Value: string;
}
