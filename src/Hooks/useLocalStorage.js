import { useState, useEffect } from "react";

const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    try {
      const localValue = window.localStorage.getItem(key);
      // checking to see if there is any value in local storage with the given key and return the value by parsing it:
      return localValue ? JSON.parse(localValue) : initialValue;
    } catch (e) {
      return initialValue;
    }
  })

  useEffect(() => {
    //  if there is any change in the key or value, so update the local storage:
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];

}

export default useLocalStorage;
