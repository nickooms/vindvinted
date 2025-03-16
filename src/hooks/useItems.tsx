import { Dispatch, SetStateAction } from 'react';
import { useStorage } from './useStorage';
import { Item } from '@src/types';

type Items = Item[];

/**
 * Returns a stateful array of items from local storage, and a function to update it.
 */
export function useItems(): [Items, Dispatch<SetStateAction<Items>>] {
  return useStorage<Items>('items', [], 'local');
}
