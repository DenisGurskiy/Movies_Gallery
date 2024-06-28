"use client";

import { GalleryContext } from "@/context/GalleryContext";
import { Movie } from "@/type/movie";
import { FC, useContext } from "react";
import { RemoveIcon } from "../UI/RemoveIcon";
import Image from "next/image";
import { Button } from "../UI/Button";

type Props = {
  favorite: Movie;
};

export const FavoriteComponent: FC<Props> = ({ favorite }) => {
  const { deleteFromfavorites, setDetailedMovie } = useContext(GalleryContext);
  return (
    <li className="text-[14px] font-semibold flex gap-[12px] justify-between items-center mb-[8px]">
      <div
        className="cursor-pointer flex gap-[12px] items-center  hover:shadow-md grow"
        onClick={() => setDetailedMovie(favorite.id)}
      >
        <div>
          <Image src={favorite.img} alt="movie image" width={24} height={24} />
        </div>
        <h3 className="w-3/4">{favorite.name}</h3>
      </div>
      <Button onClick={() => deleteFromfavorites(favorite)}>
        <RemoveIcon />
      </Button>
    </li>
  );
};
