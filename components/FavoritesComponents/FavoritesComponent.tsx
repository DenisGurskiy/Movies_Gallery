"use client";

import { GalleryContext } from "@/context/GalleryContext";
import React, { useContext, useEffect, useState } from "react";
import classNames from "classnames";
import { StarIcon } from "../UI/StarIcon";
import { CloseIcon } from "../UI/CloseIcon";
import { FavoriteComponent } from "./FavoriteComponent";

export default function FavoritesComponent() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const { favorites } = useContext(GalleryContext);

  useEffect(() => {
    if (menuIsOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [menuIsOpen]);

  const closeMenu = () => {
    setMenuIsOpen(false);
  };

  const openMenu = () => {
    setMenuIsOpen(true);
  };
  return (
    <>
      <header className="fixed top-0 w-full h-[40px] border-b-[1px] border-grey md:hidden flex flex-row-reverse px-[24px] bg-white shadow-md">
        <div className="relative flex gap-[12px] items-center cursor-pointer px-[12px]">
          <StarIcon active={true} />
          <button onClick={openMenu}>Favorite List</button>
          {favorites.length !== 0 && (
            <div className="absolute top-[4px] left-[30px] text-[10px] rounded-full bg-blue w-[16px] text-white text-center">
              {favorites.length}
            </div>
          )}
        </div>
      </header>
      <section
        className={classNames(
          "bg-white border-grey border-0 md:border-[1px] rounded overflow-hidden shadow-lg p-[18px] w-full fixed top-0 h-[100dvh] md:h-min z-10 transition-transform transform md:relative md:col-span-4",
          {
            "translate-x-0": menuIsOpen,
            "translate-x-full": !menuIsOpen,
          },
          "md:transform-none"
        )}
      >
        <div className="flex justify-between items-center mb-[16px]">
          <div className="flex gap-[12px] items-center">
            <StarIcon active={true} />
            <h2 className="text-center text-[24px] font-semibold">
              Favorite List
            </h2>
          </div>
          <button
            className="md:hidden hover:transition hover:scale-125 duration-300"
            onClick={closeMenu}
            title="Close menu"
          >
            <CloseIcon />
          </button>
        </div>

        {favorites.length === 0 ? (
          <div className="text-center">...empty list...</div>
        ) : (
          <ul>
            {favorites.map((favorite) => (
              <FavoriteComponent key={favorite.id} favorite={favorite} />
            ))}
          </ul>
        )}
      </section>
    </>
  );
}
