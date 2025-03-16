import { createRoot } from 'react-dom/client';
import { SyncData } from './SyncData';
import './style.css';

const div = document.createElement('div');
div.id = '__root';
document.body.appendChild(div);

const rootContainer = document.querySelector('#__root');
if (!rootContainer) throw new Error("Can't find Content root element");
const root = createRoot(rootContainer);
root.render(<SyncData />);

try {
  console.log('content script loaded');
} catch (e) {
  console.error(e);
}

const BASE_URL = 'https://www.vinted.be/api/v2/wardrobe';
const USER_ID = 66072811;
const ITEMS_PER_PAGE = 20;
const ORDER = 'newest_first';

const getItems = async (page = 1) => {
  const url = `${BASE_URL}/${USER_ID}/items?page=${page}&per_page=${ITEMS_PER_PAGE}&order=${ORDER}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.message === 'getItems') {
    getItems(request.page)
      .then((data) => sendResponse(data))
      .catch((error) => sendResponse({ error }));
    return true;
  }
});
