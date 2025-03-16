import {
  useState,
  Children,
  ReactNode,
  cloneElement,
  isValidElement,
} from 'react';
import { Tab, TabProps } from './Tab';
import './vinted-web-ui.css';
import { Divider } from './Divider';

export function Tabs({ children }: { children: React.ReactNode }) {
  const [activeTab, setActiveTab] = useState<number>(0);
  return (
    <>
      <span id="tabs">
        <div className="web_ui__Tabs__tabs">
          <ul className="web_ui__Tabs__content" role="tablist">
            {Children.map(
              children,
              (child, index) =>
                isValidElement<TabProps>(child) &&
                cloneElement<TabProps>(child, {
                  active: index === activeTab,
                  index,
                  setActiveTab,
                })
            )}
          </ul>
        </div>
      </span>
      <Divider />
      {Children.map(
        children,
        (child, index) =>
          isValidElement<TabProps>(child) &&
          index === activeTab &&
          cloneElement<TabProps>(child).props.children
      )}
    </>
  );
}
