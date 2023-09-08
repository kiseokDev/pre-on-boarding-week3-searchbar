import { CacheState } from '../types/sickType';

const CACHE_EXPIRE_TIME = 300000;

const isCacheValid = (timestamp: number): boolean => {
  return Date.now() - timestamp < CACHE_EXPIRE_TIME;
};
export const isDataCached = (cache: CacheState, queryKey: string): boolean => {
  const cachedData = cache[queryKey];
  return cachedData && isCacheValid(cachedData.timestamp);
};
