import { useState, useEffect, useRef } from "react";
import { SearchBox } from "../components/SearchBox";

export const useDebounce = ( value: any, delay: number = 500 ) => {
  const [debouncedValue, setDebouncedValue] = useState<string>("");
  const timerRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    timerRef.current = setTimeout(() => setDebouncedValue(value), delay);

    return () => {
      clearTimeout(timerRef.current);
    };
  }, [value, delay]);

  return debouncedValue;
}

const useSearchBox = () => {
  const [value, setValue] = useState<string>("");

  const instance = <SearchBox value={value} onChange={setValue} />;

  return {
    query: useDebounce(value, 500),
    SearchBox: instance
  }
}

export { useSearchBox };