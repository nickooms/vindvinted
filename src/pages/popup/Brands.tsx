import type { Item } from '@src/types/Item';

export const Brands = ({ items }: { items: Item[] }) => (
  <aside>
    <ul>
      {[...new Set(items.map((item) => item.brand))].toSorted().map((brand) => (
        <li className="merk">{brand}</li>
      ))}
    </ul>
  </aside>
);
