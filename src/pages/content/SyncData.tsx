import { FC } from 'react';
import { useSyncItems, useSyncCatalogs, useSyncItemFacets } from '@src/hooks';

export const SyncData: FC = () => {
  useSyncItems();
  useSyncCatalogs();
  useSyncItemFacets();
  return <div className="hidden">SyncData</div>;
};
