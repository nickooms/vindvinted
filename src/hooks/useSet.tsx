import { useRef, useReducer } from 'react';

export function useSet<T>(values: T[]): Set<T> {
  const setRef = useRef(new Set<T>(values));
  const [, reRender] = useReducer((x) => x + 1, 0);

  setRef.current.add = (...args) => {
    const res = Set.prototype.add.apply(setRef.current, args);
    reRender();
    return res;
  };

  setRef.current.clear = (...args) => {
    Set.prototype.clear.apply(setRef.current, args);
    reRender();
  };

  setRef.current.delete = (...args) => {
    const res = Set.prototype.delete.apply(setRef.current, args);
    reRender();
    return res;
  };

  return setRef.current;
}
