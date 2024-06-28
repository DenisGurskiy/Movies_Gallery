"use client";

import React, { FC, useContext } from "react";
import { Movie } from "@/type/movie";
import { GalleryContext } from "@/context/GalleryContext";
import Image from "next/image";
import classNames from "classnames";
import { StarIcon } from "./UI/StarIcon";

type Props = {
  movie: Movie;
};

export const MovieComponent: FC<Props> = ({ movie }) => {
  const { favourites, addToFavourites } = useContext(GalleryContext);

  const isFavourite = favourites.some((favMovie) => favMovie.id === movie.id);

  return (
    <li key={movie.id} className="col-span-6 ss:col-span-4">
      <div className="relative h-[300px] rounded-md overflow-hidden p-[12px] shadow-md shadow-gray-300 text-[12px] ">
        <div className="relative w-full h-[200px] mb-[8px]">
          <Image
            className="cursor-pointer"
            src={movie.img}
            alt="movie image"
            layout="fill"
            objectFit="cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div>
          <h2 className="font-semibold">{movie.name}</h2>
          <p>{movie.year}</p>
        </div>
        <button
          className="absolute bottom-[12px] right-[12px] w-[24px] h-[24px]"
          onClick={() => addToFavourites(movie)}
        >
          <StarIcon active={isFavourite} />
        </button>
      </div>
    </li>
  );
};
