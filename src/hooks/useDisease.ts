import { useEffect, useState } from 'react';
import { DiseaseSearchAPI } from '../api/searchDiseaseAPI';
import { useCache } from '../context/CacheContext';
import { SickType } from '../types/sickType';
import { isDataCached } from '../util/cache';

const api = new DiseaseSearchAPI();
const DEBOUNCE_TIME = 300;

export const useDiseaseSearch = (initialQuery: string) => {
  const { cache, setCache } = useCache();
  const [query, setQuery] = useState(initialQuery);
  const [diseases, setDiseases] = useState<SickType[]>([]);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  // 캐시데이터 사용하거나 새로운 데이터 가져오기
  const fetchData = async () => {
    const cachedResults = isDataCached(cache, query) ? cache[query].data : null;

    if (cachedResults) {
      setDiseases(cachedResults);
      return;
    }
    try {
      const data = await api.getDiseaseList(query);
      setCache((prevCache) => ({
        ...prevCache,
        [query]: { data, timestamp: Date.now() },
      }));
      setDiseases(data);
    } catch (error) {
      console.log(error);
    }
  };

  //Debounce
  useEffect(() => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    if (!query) {
      setDiseases([]);
      return;
    }

    const timer = setTimeout(() => {
      void fetchData();
    }, DEBOUNCE_TIME);

    setTimeoutId(timer);

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [query]);

  return {
    query,
    setQuery,
    diseases,
  };
};
