import { HighResolution } from './Items';
import { Thumbnails } from './Thumb';

export interface Photo {
  id: number;
  width: number;
  height: number;
  temp_uuid: null;
  url: string;
  dominant_color: string;
  dominant_color_opaque: string;
  thumbnails: Thumbnails;
  is_suspicious: boolean;
  orientation: null;
  high_resolution: HighResolution;
  full_size_url: string;
  is_hidden: boolean;
  extra: {};
}
