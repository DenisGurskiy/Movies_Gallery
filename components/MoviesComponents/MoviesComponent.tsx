import React from "react";
import { MemoizedMoviesListComponent } from "./MoviesListComponent";

export const MoviesComponent = () => {
  return (
    <section className="border-grey border-0 md:border-[1px] col-1 md:col-span-8 rounded overflow-hidden md:shadow-lg p-[18px]">
      <h1 className="text-center text-[24px] font-semibold mb-[18px]">
        Movies Gallery
      </h1>
      <MemoizedMoviesListComponent />
    </section>
  );
};
