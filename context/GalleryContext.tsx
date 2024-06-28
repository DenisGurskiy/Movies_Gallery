"use client";

import { Movie } from "@/type/movie";
import React, { useEffect, useState } from "react";

type Context = {
  detailedMovie: number | null;
  setDetailedMovie: (id: number | null) => void;
  favorites: Movie[];
  isfavorite: (movie: Movie) => boolean;
  addTofavorites: (movie: Movie) => void;
  deleteFromfavorites: (movie: Movie) => void;
};

export const GalleryContext = React.createContext<Context>({
  detailedMovie: null,
  setDetailedMovie: () => {},
  favorites: [],
  isfavorite: () => false,
  addTofavorites: () => {},
  deleteFromfavorites: () => {},
});

type Props = {
  children: React.ReactNode;
};

export const GalleryProvider: React.FC<Props> = ({ children }) => {
  const [favorites, setfavorites] = useState<Movie[]>([]);
  const [isHydrated, setIsHydrated] = useState(false);
  const [detailedMovie, setDetailedMovie] = useState<number | null>(null);

  const deleteFromfavorites = (currentMovie: Movie) => {
    setfavorites((currentMovies) =>
      currentMovies.filter((movie) => movie !== currentMovie)
    );
  };

  const addTofavorites = (newMovie: Movie) => {
    setfavorites((currentMovies) => {
      if (currentMovies.some((movie) => movie.id === newMovie.id)) {
        return currentMovies.filter((movie) => movie.id !== newMovie.id);
      } else {
        return [...currentMovies, newMovie];
      }
    });
  };

  useEffect(() => {
    try {
      const storedfavorites = localStorage.getItem("favorites");
      if (storedfavorites) {
        setfavorites(JSON.parse(storedfavorites));
      }
      setIsHydrated(true);
    } catch (error) {
      console.error("Error reading from localStorage", error);
    }
  }, []);

  useEffect(() => {
    if (isHydrated) {
      try {
        localStorage.setItem("favorites", JSON.stringify(favorites));
      } catch (error) {
        console.error("Error writing to localStorage", error);
      }
    }
  }, [favorites, isHydrated]);

  const isfavorite = (movie: Movie) => {
    return favorites.some((favMovie) => favMovie.id === movie.id);
  };

  const objectContext = {
    detailedMovie,
    setDetailedMovie,
    favorites,
    isfavorite,
    addTofavorites,
    deleteFromfavorites,
  };

  return (
    <GalleryContext.Provider value={objectContext}>
      {children}
    </GalleryContext.Provider>
  );
};
