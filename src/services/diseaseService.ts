// services/diseaseService.ts
import { DiseaseSearchAPI } from '../api/searchDiseaseAPI';
import { CacheState } from '../types/sickType';
import { isDataCached } from '../util/cache';

const api = new DiseaseSearchAPI();

//캐시가 만료되기 전까지는 캐시된 데이터를 사용하고, 만료되면 새로운 데이터를 가져오는 함수
export const fetchDiseaseData = async (cache: CacheState, query: string) => {
  const cachedResults = isDataCached(cache, query) ? cache[query].data : null;

  if (cachedResults) {
    return { data: cachedResults };
  }

  try {
    const data = await api.getDiseaseList(query);
    return { data, cacheUpdate: { [query]: { data, timestamp: Date.now() } } };
  } catch (error) {
    return { error };
  }
};
