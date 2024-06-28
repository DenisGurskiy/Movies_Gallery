"use client";

import { Movie } from "@/type/movie";
import useSWR from "swr";
import { MovieComponent } from "./MovieComponent";
import Skeleton from "../UI/Skeleton";
import classNames from "classnames";
import React, { useState } from "react";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const MoviesListComponent = () => {
  const { data: movies, error } = useSWR<Movie[]>(
    "https://my-json-server.typicode.com/moviedb-tech/movies/list",
    fetcher
  );

  const [value, setValue] = useState("select genre");

  if (error) return <div>Failed to load</div>;
  if (!movies)
    return (
      <ul className="grid  grid-cols-12 gap-[12px]">
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </ul>
    );

  const allGenres = new Set<string>();
  movies.forEach((movie) => {
    movie.genres.forEach((genre) => {
      allGenres.add(genre);
    });
  });

  const genresArray = Array.from(allGenres).sort();

  const filteredMovies =
    value === "select genre"
      ? movies
      : movies.filter((movie) => movie.genres.includes(value));

  return (
    <>
      <div className="w-full flex justify-between mb-[12px]">
        <select
          name="genre"
          id="genre"
          className={classNames(
            "border-[1px] py-[4px] px-[8px] cursor-pointer outline-none ",
            {
              "text-grey": value === "select genre",
            }
          )}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        >
          <option value="select genre" className="text-grey">
            select genre
          </option>
          {genresArray.length !== 0 &&
            genresArray.map((genre) => (
              <option className="text-black" key={genre} value={genre}>
                {genre}
              </option>
            ))}
        </select>
      </div>
      <ul className="grid grid-cols-12 gap-[12px]">
        {filteredMovies.map((movie) => (
          <MovieComponent key={movie.id} movie={movie} />
        ))}
      </ul>
    </>
  );
};

export const MemoizedMoviesListComponent = React.memo(MoviesListComponent);
