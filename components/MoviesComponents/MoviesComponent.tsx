"use client";

import React from "react";
import MoviesListComponent from "./MoviesListComponent";

export default function MoviesComponent() {
  return (
    <section className="border-grey border-0 md:border-[1px] col-1 md:col-span-8 rounded overflow-hidden shadow-lg p-[18px]">
      <h1 className="text-center text-[24px] font-semibold mb-[18px]">
        Movies Gallery
      </h1>
      <MoviesListComponent />
    </section>
  );
}
