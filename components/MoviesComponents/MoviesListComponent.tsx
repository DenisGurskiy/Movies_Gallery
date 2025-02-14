"use client";

import { Movie } from "@/type/movie";
import useSWR from "swr";
import { MovieComponent } from "./MovieComponent";
import Skeleton from "../UI/Skeleton";
import classNames from "classnames";
import React, { useState } from "react";
import Image from "next/image";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const MoviesListComponent = () => {
  const { data: movies, error } = useSWR<Movie[]>(
    "https://my-json-server.typicode.com/moviedb-tech/movies/list",
    fetcher
  );

  const [value, setValue] = useState("select genre");
  const [viewType, setViewType] = useState<"card" | "list">("card");

  if (error) return <div>Failed to load</div>;
  if (!movies)
    return (
      <ul className="grid grid-cols-12 gap-[12px]">
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </ul>
    );

  const allGenres = new Set<string>();
  movies.forEach((movie) => {
    movie.genres.forEach((genre) => {
      allGenres.add(genre.toLowerCase());
    });
  });

  const genresArray = Array.from(allGenres).sort();

  const filteredMovies =
    value.toLowerCase() === "select genre"
      ? movies
      : movies.filter((movie) =>
          movie.genres.some(
            (genre) => genre.toLowerCase() === value.toLowerCase()
          )
        );

  return (
    <>
      <div className="w-full flex justify-between mb-[12px]">
        <label className="sr-only" htmlFor="genre">
          Select genre
        </label>
        <select
          name="genre"
          id="genre"
          className={classNames(
            "border-[1px] py-[4px] px-[8px] cursor-pointer outline-none",
            {
              "text-dark": value === "select genre",
            }
          )}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        >
          <option value="select genre" className="text-dark">
            select genre
          </option>
          {genresArray.length !== 0 &&
            genresArray.map((genre) => (
              <option className="text-black" key={genre} value={genre}>
                {genre.charAt(0).toUpperCase() + genre.slice(1)}
              </option>
            ))}
        </select>
        <div className="flex gap-[12px] items-center justify-center">
          <p className="text-[12px] text-dark">view as: </p>
          <button
            className={classNames("border-black", {
              "border-[1px]": viewType === "card",
            })}
            onClick={() => setViewType("card")}
            title="Change type of view to Card"
          >
            <Image
              src="/cardIcon.png"
              alt="movie image"
              width={24}
              height={24}
            />
          </button>
          <button
            className={classNames("border-black", {
              "border-[1px]": viewType === "list",
            })}
            onClick={() => setViewType("list")}
            title="Change type of view to List"
          >
            <Image
              src="/listIcon.png"
              alt="movie image"
              width={24}
              height={24}
            />
          </button>
        </div>
      </div>
      <ul className="grid grid-cols-12 gap-[12px]">
        {filteredMovies.map((movie) => (
          <MovieComponent key={movie.id} movie={movie} viewType={viewType} />
        ))}
      </ul>
    </>
  );
};

export const MemoizedMoviesListComponent = React.memo(MoviesListComponent);
