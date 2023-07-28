import { ReactElement } from "react";

interface GridProps {
  children: ReactElement;
}
export const Grid = ({ children }: GridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">{children}</div>
  );
};
