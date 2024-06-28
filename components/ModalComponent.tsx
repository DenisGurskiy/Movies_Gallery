"use client";

import React, { FC, useContext, useEffect } from "react";
import useSWR from "swr";
import { Movie } from "@/type/movie";
import { GalleryContext } from "@/context/GalleryContext";
import Image from "next/image";
import { StarIcon } from "./UI/StarIcon";
import { CloseModal } from "./UI/CloseModal";
import { Button } from "./UI/Button";
import ModalSkeleton from "./UI/ModalSkeleton";

type Props = {
  id: number;
};

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const ModalComponent: FC<Props> = ({ id }) => {
  const { data: movie, error } = useSWR<Movie>(
    `https://my-json-server.typicode.com/moviedb-tech/movies/list/${id}`,
    fetcher
  );

  const { setDetailedMovie, favorites, addTofavorites } =
    useContext(GalleryContext);

  useEffect(() => {
    document.body.classList.add("overflow-hidden");

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  if (error) return <div>Failed to load</div>;
  if (!movie) return <ModalSkeleton />;

  const isfavorite = favorites.some((favMovie) => favMovie.id === movie.id);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="fixed inset-0 bg-black bg-opacity-50"
        onClick={() => setDetailedMovie(null)}
      ></div>
      <div className="max-w-[640px] w-auto h-auto absolute bg-white z-50 md:rounded-[4px] md:p-[48px] p-[20px] m-[12px]">
        <div className="w-full grid grid-cols-12 gap-[24px]">
          <div className="col-span-4 flex flex-col gap-[12px] text-[12px]">
            <div className="relative w-full aspect-square">
              <Image
                src={movie.img}
                alt="movie image"
                layout="fill"
                objectFit="contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="flex justify-between items-center">
              <Button onClick={() => addTofavorites(movie)}>
                <StarIcon active={isfavorite} />
              </Button>
              <p>{movie.year}</p>
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
          </div>
          <div className="col-span-8 flex flex-col justify-between text-[14px]">
            <div>
              <h2 className="text-[24px] font-semibold mb-[12px]">
                {movie.name}
              </h2>
              <p>{movie.description}</p>
            </div>
            <div>
              <p className="mb-[12px]">Director: {movie.director}</p>
              <p>Starring: {movie.starring.join(", ")}</p>
            </div>
          </div>
          <Button
            onClick={() => setDetailedMovie(null)}
            classnames="absolute top-[8px] right-[8px] md:top-[24px] md:right-[24px]"
          >
            <CloseModal />
          </Button>
        </div>
      </div>
    </div>
  );
};
