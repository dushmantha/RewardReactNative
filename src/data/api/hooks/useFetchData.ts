// This is hooks only for rest API

import {useRef, useState, useEffect} from 'react';

const useFetchData = (url: string) => {
  const cache = useRef<any>({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<any>(null);
  const [data, setData] = useState(<any>[]);

  useEffect(() => {
    if (!url) {
      return;
    }
    const fetchData = async () => {
      setIsLoading(true);
      if (cache.current[url]) {
        const dataRessponse = cache.current[url];
        setData(dataRessponse);
        setIsLoading(false);
      } else {
        try {
          const response = await fetch(url);
          const dataRessponse = await response.json();
          cache.current[url] = dataRessponse;
          setData(dataRessponse);
          setIsLoading(false);
        } catch (errorE) {
          setIsLoading(false);
          setError(errorE);
        }
      }
    };
    fetchData();
  }, [url]);
  return {isLoading, data, error};
};

export default useFetchData;
