import React, { useState } from 'react';
import { useDiseaseSearch } from '../hooks/useDisease';
import DiseaseList from '../component/DiseaseList';
import Input from './common/Input';
import Button from './common/Button';
import styled from 'styled-components';

const DiseaseSearch: React.FC = () => {
  const { diseases } = useDiseaseSearch('');
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const navigateGoogleSearch = (url: string) => {
    window.open(url, '_blank', 'noopener, noreferrer');
  };

  const moveKeyword = (event: React.KeyboardEvent) => {
    if (
      event.key !== 'ArrowUp' &&
      event.key !== 'ArrowDown' &&
      event.key !== 'Enter'
    )
      return;
    if (event.nativeEvent.isComposing) return;

    if (diseases.length > 0) {
      switch (event.key) {
        case 'ArrowUp':
          setSelectedIndex(prevIndex =>
            prevIndex <= 0 ? diseases.length - 1 : prevIndex - 1
          );
          break;
        case 'ArrowDown':
          setSelectedIndex(prevIndex =>
            prevIndex >= diseases.length - 1 ? 0 : prevIndex + 1
          );
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
    <>
      <StyledSearchLayout>
        <Input onKeyDown={moveKeyword} />
        <Button>검색</Button>
      </StyledSearchLayout>
      <DiseaseList diseases={diseases} selectedIndex={selectedIndex} />
    </>
  );
};

export default DiseaseSearch;

const StyledSearchLayout = styled.div`
  display: flex;
  flex: auto;
`;
