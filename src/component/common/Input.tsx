import { useInputKeywordContext } from 'context/useInputKeywordContext';
import { useDiseaseSearch } from 'hooks/useDisease';
import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { styled } from 'styled-components';

type InputProps = {
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement> | undefined;
};

const Input: React.FC<InputProps> = ({ onKeyDown }) => {
  const { inputKeyword, setInputKeyword } = useInputKeywordContext();

  const getInputKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputKeyword(e.target.value);
  };

  return (
    <StyledLabel>
      <StyledInput
        type="text"
        value={inputKeyword}
        onChange={getInputKeyword}
        placeholder="검색어를 입력하세요"
        autoFocus
        onKeyDown={onKeyDown}
      />
      <AiOutlineSearch size="34" color="black" />
    </StyledLabel>
  );
};

const StyledLabel = styled.label`
  position: relative;
  flex: 1;

  svg {
    position: absolute;
    top: 15px;
    left: 20px;
  }
`;

const StyledInput = styled.input`
  display: block;
  width: 100%;
  padding: 22px 70px;
  font-size: 20px;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  background-color: white;
  box-sizing: border-box;
`;

export default Input;
