export interface ItemFacet {
  id: number;
  count: number;
}

export interface ItemFacetsResponse {
  code: number;
  catalogs: ItemFacet[];
}
