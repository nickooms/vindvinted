import { FC, useState } from 'react';
import { useItems } from '@src/hooks/useItems';
import { Item } from './Item';
import { Brands } from './Brands';
import { Button } from './Button';

export const Items: FC = () => {
  const [showMerken, setShowMerken] = useState<boolean>(false);
  const [items, setItems] = useItems();
  return (
    <>
      <Button active={showMerken} onClick={() => setShowMerken(!showMerken)}>
        Merken
      </Button>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        {showMerken && <Brands items={items} />}
        <div>
          {items.map((item) => (
            <Item key={item.id} {...item} />
          ))}
        </div>
      </div>
    </>
  );
};
