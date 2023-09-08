import React from 'react';
import { useDiseaseSearch } from '../hooks/useDisease';
import DiseaseItem from '../component/DiseaseItem';

const DiseaseSearch: React.FC = () => {
  const { query, setQuery, results } = useDiseaseSearch('');

  return (
    <div>
      <input
        type='text'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder='질환명 검색...'
      />
      <ul>
        {results.length > 0
          ? results.map((result) => <DiseaseItem key={result.sickCd} data={result} />)
          : query && <li>검색 결과 없음</li>}
      </ul>
    </div>
  );
};

export default DiseaseSearch;
