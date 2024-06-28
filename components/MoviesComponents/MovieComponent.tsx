"use client";

import React, { FC, useContext } from "react";
import { Movie } from "@/type/movie";
import { GalleryContext } from "@/context/GalleryContext";
import Image from "next/image";
import { StarIcon } from "../UI/StarIcon";
import { Button } from "../UI/Button";
import classNames from "classnames";

type Props = {
  movie: Movie;
  viewType: "card" | "list";
};

export const MovieComponent: FC<Props> = ({ movie, viewType }) => {
  const { isfavorite, addTofavorites, setDetailedMovie } =
    useContext(GalleryContext);

  return (
    <li
      key={movie.id}
      className={classNames({
        "col-span-6 ss:col-span-4 lg:col-span-3": viewType === "card",
        "col-span-full": viewType === "list",
      })}
    >
      <div
        className={classNames(
          "relative  rounded-md overflow-hidden p-[12px] shadow-md shadow-gray-300 text-[12px]",
          {
            "h-[300px]": viewType === "card",
            "grid grid-cols-12 gap-[12px]": viewType === "list",
          }
        )}
      >
        <div
          className={classNames(
            "relative w-full mb-[8px] hover:shadow-md hover:shadow-gray-300 hover:transition-all hover:scale-105 duration-300 overflow-hidden",
            {
              "h-[200px]": viewType === "card",
              "col-span-4 h-[120px]": viewType === "list",
            }
          )}
          onClick={() => setDetailedMovie(movie.id)}
        >
          <Image
            className="cursor-pointer"
            src={movie.img}
            alt="movie image"
            layout="fill"
            objectFit={viewType === "card" ? "cover" : "contain"}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div
          className={classNames("flex", {
            "flex-col": viewType === "card",
            "flex-row col-span-8 gap-x-[24px] gap-y-[18px] flex-wrap":
              viewType === "list",
          })}
        >
          <h2
            className="font-semibold cursor-pointer"
            onClick={() => setDetailedMovie(movie.id)}
          >
            {movie.name}
          </h2>
          <p>{movie.year}</p>
          {viewType === "list" && (
            <>
              <div className="w-full h-[24px] leading-[24px] overflow-hidden">
                {movie.description}
              </div>
              <ul className="flex flex-wrap gap-[12px]">
                {movie.genres.map((genre) => (
                  <li
                    key={genre}
                    className="border-[1px] h-[24px] border-grey rounded-md text-center leading-[24px] px-[4px]"
                  >
                    {genre}
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>

        <Button
          classnames={classNames("absolute w-[24px] h-[24px]", {
            "bottom-[12px] right-[12px]": viewType === "card",
            "top-[12px] right-[12px]": viewType === "list",
          })}
          onClick={() => addTofavorites(movie)}
        >
          <StarIcon active={isfavorite(movie)} />
        </Button>
      </div>
    </li>
  );
};
