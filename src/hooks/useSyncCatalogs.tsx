import { useEffect } from 'react';
import { useCatalogs } from './useCatalogs';
import { useFetch } from './useFetch';
import type { CatalogsResponse } from '@src/types';

const URL = 'https://www.vinted.be/api/v2/catalogs';

export function useSyncCatalogs(): void {
  const [catalogs, setCatalogs] = useCatalogs();
  const { loading, data, error } = useFetch<CatalogsResponse>(URL);

  useEffect(() => {
    if (data) {
      setCatalogs(data.catalogs);
    }
  }, [data]);
}
