export interface IMovie {
  imdbID: string;
  Title: string;
  Poster?: string;
  Year: string;
  Type: string;
  Genre: string;
  Director: string;
  Writer: string;
  Plot: string;
  Actors: string;
  //   rating: IRating[];
}
export interface IMovies {
  Search: IMovie[];
  totalResults: string;
  Response: string;
  Error?: string;
}

interface IRating {
  Source: string;
  Value: string;
}
