import { useEffect } from 'react';

const ImageProtection = ({ children }) => {
  useEffect(() => {
    const disableContextMenu = (e) => {
      if (e.target.tagName === 'IMG') {
        e.preventDefault();
      }
    };

    const disableKeys = (e) => {
      if (
        (e.ctrlKey && ['s', 'c', 'u', 'p'].includes(e.key.toLowerCase())) ||
        e.key === 'F12'
      ) {
        e.preventDefault();
      }
    };

    document.addEventListener('contextmenu', disableContextMenu);
    document.addEventListener('keydown', disableKeys);

    return () => {
      document.removeEventListener('contextmenu', disableContextMenu);
      document.removeEventListener('keydown', disableKeys);
    };
  }, []);

  return children;
};

export default ImageProtection;