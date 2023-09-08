import React, { useState } from 'react';
import { useDiseaseSearch } from '../hooks/useDisease';
import DiseaseList from '../component/DiseaseList';

const DiseaseSearch: React.FC = () => {
  const { query, setQuery, diseases } = useDiseaseSearch('');
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const navigateGoogleSearch = (url: string) => {
    window.open(url, '_blank', 'noopener, noreferrer');
  };

  const moveKeyword = (event: React.KeyboardEvent) => {
    if (event.key !== 'ArrowUp' && event.key !== 'ArrowDown' && event.key !== 'Enter') return;
    if (event.nativeEvent.isComposing) return;

    if (diseases.length > 0) {
      switch (event.key) {
        case 'ArrowUp':
          setSelectedIndex((prevIndex) => (prevIndex <= 0 ? diseases.length - 1 : prevIndex - 1));
          break;
        case 'ArrowDown':
          setSelectedIndex((prevIndex) => (prevIndex >= diseases.length - 1 ? 0 : prevIndex + 1));
          break;
        case 'Enter':
          if (diseases[selectedIndex]) {
            navigateGoogleSearch(
              `https://www.google.com/search?q=${diseases[selectedIndex].sickNm}`
            );
          }
          break;
        default:
      }
    }
  };

  return (
    <div>
      <input
        type='text'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder='질환명 검색...'
      />
      {/* <ul>
        {results.length > 0
          ? results.map((result) => <DiseaseItem key={result.sickCd} data={result} />)
          : query && <li>검색 결과 없음</li>}
      </ul> */}
      <DiseaseList diseases={diseases} selectedIndex={selectedIndex} />
    </div>
  );
};

export default DiseaseSearch;
