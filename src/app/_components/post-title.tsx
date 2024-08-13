import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

export function PostTitle({ children }: Props) {
  return (
    <h2 className="mb-5 text-2xl md:text-3xl font-bold">
      {children}
    </h2>
  );
}
