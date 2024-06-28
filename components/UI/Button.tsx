import React, { FC } from "react";

type Props = {
  children: React.ReactNode;
  onClick: () => void;
  classnames?: string;
};

export const Button: FC<Props> = ({ children, onClick, classnames }) => {
  return (
    <button
      onClick={onClick}
      className={`hover:transition hover:scale-125 duration-300 ${classnames}`}
    >
      {children}
    </button>
  );
};
