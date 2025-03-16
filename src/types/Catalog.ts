import { Thumbnails, Photo } from '.';

export interface CatalogsResponse {
  code: number;
  catalogs: Catalog[];
}

export interface Catalog {
  id: number;
  title: string;
  code: string;
  size_group_id: number;
  size_group_ids: number[];
  multiple_size_group_ids: null;
  leaf_multiple_size_group_ids: null;
  shippable: boolean;
  author_field_visibility: number;
  brand_field_visibility: number;
  book_title_field_visibility: number;
  color_field_visibility: number;
  isbn_field_visibility: number;
  size_field_visibility: number;
  video_game_rating_field_visibility: number;
  measurements_field_visibility: boolean;
  condition_field_visible: boolean;
  restricted_to_status_id: null;
  landing: null;
  allow_browsing_subcategories: boolean;
  badge: null;
  package_size_ids: number[];
  order: number;
  item_count: number;
  photo: Photo;
  visual_update_photo: {
    url: string;
    thumbnails: Thumbnails;
  };
  unisex_catalog_id: null;
  catalogs: Catalog[];
  url: string;
  url_en: string;
}
