import { Dispatch, SetStateAction } from 'react';
import { useStorage } from './useStorage';
import { Box } from '@src/types';

type Boxes = Box[];

/**
 * Returns a stateful array of boxes from local storage, and a function to update it.
 */
export function useBoxes(): [Boxes, Dispatch<SetStateAction<Boxes>>] {
  return useStorage<Boxes>('boxes', [], 'sync');
}
