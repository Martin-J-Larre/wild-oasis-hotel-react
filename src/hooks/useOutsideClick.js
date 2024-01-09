import { useEffect, useRef } from "react";

function useOutsideClick(fn) {
  const refElemt = useRef();

  useEffect(() => {
    function handleClick(e) {
      if (refElemt.current && !refElemt.current.contains(e.target)) {
        fn();
      }
    }
    document.addEventListener("click", handleClick, true);

    return () => document.removeEventListener("click", handleClick, true);
  }, [fn]);

  return refElemt;
}

export default useOutsideClick;
