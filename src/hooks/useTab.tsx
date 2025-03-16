import { useEffect, useState } from 'react';

type Tab = chrome.tabs.Tab | null;

export function useTab(): Tab {
  const [tab, setTab] = useState<Tab>(null);

  useEffect(() => {
    if (!chrome.tabs) {
      return;
    }

    chrome.tabs
      .query({ active: true, currentWindow: true })
      .then(([activeTab]) => setTab(activeTab));
  }, []);

  return tab;
}
