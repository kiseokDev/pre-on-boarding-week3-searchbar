import React, { createContext, useContext, useState } from 'react';
import { CacheState } from '../types/sickType';

const CacheContext = createContext<
  | {
      cache: CacheState;
      setCache: React.Dispatch<React.SetStateAction<CacheState>>;
    }
  | undefined
>(undefined);

interface CacheProviderProps {
  children: React.ReactNode;
}

const CacheProvider: React.FC<CacheProviderProps> = ({ children }) => {
  const [cache, setCache] = useState<CacheState>({});

  return (
    <CacheContext.Provider value={{ cache, setCache }}>
      {children}
    </CacheContext.Provider>
  );
};

const useCache = () => {
  const context = useContext(CacheContext);
  if (!context) {
    throw new Error('CacheProvider로 컴포넌트를 감싸주세요!');
  }
  return context;
};

export { CacheProvider, useCache };
