import { PushUp } from './Items';
import { Photo } from './Photo';
import { User } from './User';

export interface Item {
  id: number;
  title: string;
  user_id: number;
  brand: string;
  is_draft: boolean;
  is_closed: boolean;
  is_reserved: boolean;
  is_hidden: boolean;
  price: string;
  discount_price: null;
  transaction_permitted: true;
  is_processing: false;
  currency: string;
  item_closing_action: null;
  path: string;
  user: User;
  item_alert: null;
  item_alert_type: null;
  promoted: boolean;
  is_business_user: boolean;
  size: string;
  view_count: number;
  can_push_up: boolean;
  push_up: PushUp;
  can_edit: boolean;
  stats_visible: boolean;
  favourite_count: number;
  is_favourite: boolean;
  url: string;
  service_fee: string;
  total_item_price: string;
  status: string;
  photos: Photo[];
  badge: null;
  item_box: {
    first_line: string;
    second_line: string;
    accessibility_label: string;
  };
}
