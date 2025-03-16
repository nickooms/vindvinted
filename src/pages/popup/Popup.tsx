import { Items } from './Items';
import { Boxes } from './Boxes';
import { Catalogs } from './Catalogs';
import { Tabs } from './Tabs';
import { Tab } from './Tab';

export const Popup = () => (
  <div style={{ position: 'sticky' }}>
    <Tabs>
      <Tab title="Items">
        <Items />
      </Tab>
      <Tab title="Dozen">
        <Boxes />
      </Tab>
      <Tab title="Catalogus">
        <Catalogs />
      </Tab>
    </Tabs>
  </div>
);
