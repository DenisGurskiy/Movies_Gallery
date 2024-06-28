import { Movie } from "@/type/movie";
import useSWR from "swr";
import Skeleton from "./Skeleton";
import { MovieComponent } from "./MovieComponent";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function MoviesListComponent() {
  const { data: movies, error } = useSWR<Movie[]>(
    "https://my-json-server.typicode.com/moviedb-tech/movies/list",
    fetcher
  );

  if (error) return <div>Failed to load</div>;
  if (!movies)
    return (
      <div>
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </div>
    );

  return (
    <ul className="grid  grid-cols-12 gap-[12px]">
      {movies.map((movie) => (
        <MovieComponent key={movie.id} movie={movie} />       
      ))}
    </ul>
  );
}
