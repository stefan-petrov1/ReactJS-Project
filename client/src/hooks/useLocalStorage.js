import { useState } from 'react';

export const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    const storageData = localStorage.getItem(key);

    return storageData ? JSON.parse(storageData) : initialValue;
  });

  const setStorageData = (value) => {
    if (!value) return;

    localStorage.setItem(key, JSON.stringify(value));
    setValue(value);
  };

  return [value, setStorageData];
};
