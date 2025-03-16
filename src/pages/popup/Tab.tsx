import { FC, HTMLAttributes, ReactNode } from 'react';

export interface TabProps extends HTMLAttributes<HTMLLIElement> {
  title: string;
  active?: boolean;
  setActiveTab?: (index: number) => void;
  index?: number;
  children?: ReactNode;
}

export const Tab: FC<TabProps> = ({
  title,
  active = false,
  setActiveTab,
  index,
}) => (
  <li
    className={`web_ui__Tabs__tab ${active ? 'web_ui__Tabs__is-active' : ''}`}
    role="tab"
    aria-selected={active}
    tabIndex={0}
    {...(!active &&
      setActiveTab &&
      index !== undefined && {
        onClick: () => {
          console.log('index', index);
          setActiveTab(index);
        },
      })}
  >
    <span className="web_ui__Tabs__title">{title}</span>
  </li>
);
