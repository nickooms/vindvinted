import { Dispatch, SetStateAction } from 'react';
import { useStorage } from './useStorage';
import { ItemFacet } from '@src/types';

type ItemFacets = ItemFacet[];

/**
 * Returns a stateful array of itemfacets from local storage, and a function to update it.
 */
export function useItemFacets(): [
  ItemFacets,
  Dispatch<SetStateAction<ItemFacets>>
] {
  return useStorage<ItemFacets>('itemfacets', [], 'local');
}
