import React, { FC } from "react";

type Props = {
  children: React.ReactNode;
  onClick: () => void;
  classnames?: string;
  title: string;
};

export const Button: FC<Props> = ({ children, onClick, classnames, title }) => {
  return (
    <button
      onClick={onClick}
      className={`hover:transition hover:scale-125 duration-300 ${classnames}`}
      aria-label={title}
    >
      {children}
    </button>
  );
};
