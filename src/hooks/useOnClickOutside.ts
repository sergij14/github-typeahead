import { useEffect, RefObject } from "react";

type Event = MouseEvent | TouchEvent;

// custom hook for detecting the outside click
// code is taken from: https://hashnode.com/post/useonclickoutside-custom-hook-to-detect-the-mouse-click-on-outside-typescript-ckrejmy3h0k5r91s18iu42t28

const useOnClickOutside = <T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  handler: (event: Event) => void
) => {
  useEffect(() => {
    const listener = (event: Event) => {
      const el = ref?.current;
      if (!el || el.contains((event?.target as Node) || null)) {
        return;
      }

      handler(event); // Call the handler only if the click is outside of the element passed.
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]); // Reload only if ref or handler changes
};

export default useOnClickOutside;
