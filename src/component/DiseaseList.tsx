import { styled } from 'styled-components';
import { SickType } from '../types/sickType';
import DiseaseItem from './DiseaseItem';

type SelectProps = {
  diseases: SickType[];
  selectedIndex: number;
};

const DiseaseList: React.FC<SelectProps> = ({ diseases, selectedIndex }) => {
  return (
    <StyledUl>
      <li>
        <StyledP>추천 검색어</StyledP>
      </li>
      {diseases.length === 0 ? (
        <NoKeyword>검색어 없음</NoKeyword>
      ) : (
        diseases.map((diseaseItem, index) => {
          const isSelected = index === selectedIndex;
          return (
            <DiseaseItem key={diseaseItem.sickCd} disease={diseaseItem} $isSelected={isSelected} />
          );
        })
      )}
    </StyledUl>
  );
};

const StyledUl = styled.ul`
  margin-top: 10px;
  padding: 20px;
  border-radius: 20px;
  background-color: #fff;
`;

const StyledP = styled.p`
  margin-bottom: 15px;
  font-size: 16px;
  color: var(--gray-600);
`;

const NoKeyword = styled.p`
  color: var(--gray-800);
`;

export default DiseaseList;
