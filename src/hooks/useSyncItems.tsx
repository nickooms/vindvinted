import { useState, useEffect } from 'react';
import { useFetch } from './useFetch';
import type { Item, ItemsResponse } from '@src/types';
import { useItems } from './useItems';
import { useSet } from './useSet';

const BASE_URL = 'https://www.vinted.be/api/v2/wardrobe';
const USER_ID = 66072811;
const PER_PAGE = 20;
const ORDER = 'newest_first';

export function useSyncItems() {
  const [items, setItems] = useItems();
  const ids = useSet<number>([...new Set(items.map((item) => item.id))]);
  const [page, setPage] = useState<number>(1);
  const url = `${BASE_URL}/${USER_ID}/items?page=${page}&per_page=${PER_PAGE}&order=${ORDER}`;
  const { loading, data, error } = useFetch<ItemsResponse>(url);

  const nextPage = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    if (data) {
      const currentItems: Item[] = [];
      data.items.forEach((item) => {
        if (!ids.has(item.id)) {
          currentItems.push(item);
          ids.add(item.id);
        }
      });
      setItems([...items, ...currentItems]);
      if (
        items.length < data.pagination.total_entries &&
        page < data.pagination.total_pages
      ) {
        setTimeout(nextPage, 1000);
      }
    }
  }, [data]);

  return { loading, data, error };
}
