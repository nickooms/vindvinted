import type { Item } from '@src/types';

export function Item({
  title,
  photos,
  brand,
  size,
  total_item_price,
  currency,
}: Item) {
  const [photo] = photos;
  const { url, width, height } = photo.thumbnails.toSorted(
    (a, b) => a.width * a.height - b.width * b.height
  )[0];
  return (
    <div
      className="inline-block rounded-sm item"
      title={`${title}\n${brand}\n${size}\n${currency} ${total_item_price}`}
    >
      <img
        className="rounded-sm"
        src={url}
        width={width}
        height={height}
        alt={title}
      />
      <div
        className="merk"
        style={{
          width: `${width}px`,
        }}
      >
        {brand}
      </div>
      <div
        className="maat"
        style={{
          width: `${width}px`,
        }}
      >
        {size}
      </div>
      <div
        className="prijs"
        style={{
          width: `${width}px`,
        }}
      >
        {total_item_price} {currency}
      </div>
    </div>
  );
}
