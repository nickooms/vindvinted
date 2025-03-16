import { useCatalogs, useItemFacets } from '@src/hooks';
import type { Catalog } from '@src/types';

const CatalogItem = ({ id, title, catalogs }: Catalog) => {
  const [itemFacets, setItemFacets] = useItemFacets();
  const facet = itemFacets.find((facet) => facet.id === id);
  if (!facet && !catalogs.length) return null;
  return (
    <>
      <li key={id}>
        {title} {facet && <span>[{facet.count}]</span>}
      </li>
      <li>{catalogs && <CatalogList catalogs={catalogs} />}</li>
    </>
  );
};

const CatalogList = ({ catalogs }: { catalogs: Catalog[] }) => (
  <ul>{catalogs.map(CatalogItem)}</ul>
);

export const Catalogs = () => {
  const [catalogs, setCatalogs] = useCatalogs();
  // const [itemFacets, setItemFacets] = useItemFacets();

  return <CatalogList catalogs={catalogs} />;
};
