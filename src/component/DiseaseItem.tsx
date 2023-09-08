import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { SickType } from '../types/sickType';
import { css, styled } from 'styled-components';

type DiseaseItemProps = {
  disease: SickType;
  $isSelected: boolean;
};

const DiseaseItem: React.FC<DiseaseItemProps> = ({ disease, $isSelected }) => {
  return (
    <StyledItem $isSelected={$isSelected}>
      <AiOutlineSearch size="34" />
      <StyledButton>{disease.sickNm}</StyledButton>
    </StyledItem>
  );
};

const StyledItem = styled.li<{ $isSelected: boolean }>`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;

  ${props =>
    props.$isSelected &&
    css`
      background-color: var(--gray-100);
      border-radius: 10px;
    `}
`;

const StyledButton = styled.button`
  font-size: 20px;
`;

export default DiseaseItem;
