"use client";

import { GalleryContext } from "@/context/GalleryContext";
import React, { useContext, useState } from "react";
import classNames from "classnames";

export default function FavoriteComponent() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const { favourites, deleteFromFavourites } = useContext(GalleryContext);

  const closeMenu = () => {
    setMenuIsOpen(false);
  };

  const openMenu = () => {
    setMenuIsOpen(true);
  };
  return (
    <>
      <header className="fixed top-0 w-full h-[40px] border-b-[1px] border-grey md:hidden">
        <button onClick={openMenu}>Favourite List</button>
        <p>{favourites.length}</p>
      </header>
      <section
        className={classNames(
          "bg-red-50 overflow-hidden w-full fixed top-0 full_height z-10 transition-transform transform md:relative md:col-span-4",
          {
            "translate-x-0": menuIsOpen,
            "translate-x-full": !menuIsOpen,
          },
          "md:transform-none"
        )}
      >
        <p>Favorite</p>

        <button className="md:hidden" onClick={closeMenu}>
          exit
        </button>
        <ul>
          {favourites.map((favourite) => (
            <li key={favourite.id}>
              <h3>{favourite.name}</h3>
              <button onClick={() => deleteFromFavourites(favourite)}>x</button>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
