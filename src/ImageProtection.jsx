import { useEffect } from 'react';

const ImageProtection = ({ children }) => {
  useEffect(() => {
    // Only protect images from right-click, allow text selection
    const disableContextMenu = (e) => {
      if (e.target.tagName === 'IMG') {
        e.preventDefault();
      }
    };

    document.addEventListener('contextmenu', disableContextMenu);

    return () => {
      document.removeEventListener('contextmenu', disableContextMenu);
    };
  }, []);

  // Allow all text and content to be selectable for AI crawling and user copy
  return <div style={{ userSelect: 'text', WebkitUserSelect: 'text' }}>{children}</div>;
};

export default ImageProtection;