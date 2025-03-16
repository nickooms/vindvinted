import { Dispatch, SetStateAction } from 'react';
import { useStorage } from './useStorage';
import { Catalog } from '@src/types';

type Catalogs = Catalog[];

/**
 * Returns a stateful array of catalogs from local storage, and a function to update it.
 */
export function useCatalogs(): [Catalogs, Dispatch<SetStateAction<Catalogs>>] {
  return useStorage<Catalogs>('catalogs', [], 'local');
}
