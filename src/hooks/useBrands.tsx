import { Dispatch, SetStateAction } from 'react';
import { useStorage } from './useStorage';

type Brands = string[];

/**
 * Returns a stateful array of brands from local storage, and a function to update it.
 */
export function useBrands(): [Brands, Dispatch<SetStateAction<Brands>>] {
  return useStorage<Brands>('brands', [], 'local');
}
