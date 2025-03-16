import { useEffect } from 'react';
import { API_URL, USER_ID } from '@src/constants';
import { useFetch } from './useFetch';
import { useItemFacets } from './useItemFacets';
import type { ItemFacetsResponse } from '@src/types';

const URL = `${API_URL}/users/${USER_ID}/item_facets`;

export function useSyncItemFacets(): void {
  const [itemFacets, setItemFacets] = useItemFacets();
  const { data } = useFetch<ItemFacetsResponse>(URL);

  useEffect(() => {
    if (data) {
      setItemFacets(data.catalogs);
    }
  }, [data]);
}
