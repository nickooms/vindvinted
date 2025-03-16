import { createRoot } from 'react-dom/client';
import { Popup } from '@pages/popup/Popup';
import '@pages/popup/index.css';
import '@assets/styles/tailwind.css';

function init() {
  const rootContainer = document.querySelector('#__root');
  if (!rootContainer) {
    throw new Error("Can't find Popup root element");
  }

  createRoot(rootContainer).render(<Popup />);
}

init();
