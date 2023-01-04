import { useCallback, useRef } from "react";

// 【小ネタ】ReactのカスタムフックでuseDebounceを実装する
// @see cf. https://zenn.dev/bom_shibuya/articles/bd9c84bfe59f4f

export const useDebounce = (timeout) => {
  const timer = useRef(null);
  const debounce = useCallback(
    (fn) => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
      timer.current = setTimeout(() => {
        fn();
      }, timeout);
    },
    [timeout]
  );
  return debounce;
};
