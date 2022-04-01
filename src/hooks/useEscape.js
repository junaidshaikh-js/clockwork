import { useEffect } from "react";

export function useEscape(setShow) {
  function closeOnEscape(e) {
    if (e.keyCode === 27) {
      setShow((s) => s && false);
    }
  }
  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.removeEventListener("keydown", closeOnEscape);
    };
  }, []);
}
