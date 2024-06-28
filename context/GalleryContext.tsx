"use client";

import { Movie } from "@/type/movie";
import React, { useEffect, useState } from "react";

type Context = {
  favourites: Movie[];
  addToFavourites: (movie: Movie) => void;
  deleteFromFavourites: (movie: Movie) => void;
};

export const GalleryContext = React.createContext<Context>({
  favourites: [],
  addToFavourites: () => {},
  deleteFromFavourites: () => {},
});

type Props = {
  children: React.ReactNode;
};

export const GalleryProvider: React.FC<Props> = ({ children }) => {
  const [favourites, setFavourites] = useState<Movie[]>([]);
  const [isHydrated, setIsHydrated] = useState(false);

  const deleteFromFavourites = (currentMovie: Movie) => {
    setFavourites((currentMovies) =>
      currentMovies.filter((movie) => movie !== currentMovie)
    );
  };

  const addToFavourites = (newMovie: Movie) => {
    setFavourites((currentMovies) => {
      if (currentMovies.some((movie) => movie.id === newMovie.id)) {
        return currentMovies.filter((movie) => movie.id !== newMovie.id);
      } else {
        return [...currentMovies, newMovie];
      }
    });
  };

  useEffect(() => {
    try {
      const storedFavourites = localStorage.getItem("favourites");
      if (storedFavourites) {
        setFavourites(JSON.parse(storedFavourites));
      }
      setIsHydrated(true);
    } catch (error) {
      console.error("Error reading from localStorage", error);
    }
  }, []);

  useEffect(() => {
    if (isHydrated) {
      try {
        localStorage.setItem("favourites", JSON.stringify(favourites));
      } catch (error) {
        console.error("Error writing to localStorage", error);
      }
    }
  }, [favourites, isHydrated]);

  const objectContext = {
    favourites,
    addToFavourites,
    deleteFromFavourites,
  };

  return (
    <GalleryContext.Provider value={objectContext}>
      {children}
    </GalleryContext.Provider>
  );
};
