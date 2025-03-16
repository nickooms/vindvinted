import { Item } from './Item';
import { Pagination } from './Pagination';

export interface PushUp {
  next_push_up_time: string;
}

export interface HighResolution {
  id: string;
  timestamp: number;
  orientation: null;
}

export interface ItemsResponse {
  code: number;
  items: Item[];
  pagination: Pagination;
}
