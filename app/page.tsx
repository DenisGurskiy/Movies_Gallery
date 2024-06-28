"use client";

import FavoritesComponent from "@/components/FavoritesComponents/FavoritesComponent";
import { ModalComponent } from "@/components/ModalComponent";
import { MoviesComponent } from "@/components/MoviesComponents/MoviesComponent";
import { GalleryContext } from "@/context/GalleryContext";
import { useContext } from "react";

export default function Home() {
  const { detailedMovie } = useContext(GalleryContext);

  return (
    <>
      <MoviesComponent />
      <FavoritesComponent />
      {detailedMovie && <ModalComponent id={detailedMovie} />}
    </>
  );
}
