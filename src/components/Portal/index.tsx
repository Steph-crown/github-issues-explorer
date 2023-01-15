import { FC, ReactNode, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Portal: FC<IProps> = ({ children, id }) => {
  const el = useRef<Element | DocumentFragment | null>(null);

  if (!el.current) {
    el.current = document.createElement("div");
  }

  useEffect(() => {
    const container = document.getElementById(
      id || "portal-root"
    ) as HTMLElement;

    if (el.current) {
      container.appendChild(el.current);
    }

    return () => {
      if (el.current) {
        container.removeChild(el.current);
      }
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return el.current ? createPortal(children, el.current) : null;
};

export default Portal;

interface IProps {
  children: ReactNode;
  id?: string;
}
