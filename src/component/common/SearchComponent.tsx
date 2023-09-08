import { styled } from 'styled-components';
const SearchComponent = () => {
  return (
    <>
      <H2>
        국내 모든 임상시험 검색하고
        <br></br>
        온라인으로 참여하기
      </H2>
      <SearchBarWrapper>
        <SearchBarContainter>
          {/* <SearchTextArea></SearchTextArea> */}
          {/* <SearchButton></SearchButton>/ */}
        </SearchBarContainter>
      </SearchBarWrapper>
    </>
  );
};
export default SearchComponent;

const SearchTextArea = styled.div``;

const SearchBarContainter = styled.div`
  border-radius: 42px;
  border: 2px solid;
  border-color: #ffffff;
  background-color: #ffffff;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: -0.018em;
  line-height: 1.6;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  position: relative;
  padding-right: 8px;
`;

const SearchBarWrapper = styled.div`
  display: flex;
  max-width: 490px;
`;

const H2 = styled.h1`
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: -0.018em;
  line-height: 1.6;
  margin: 0;
  margin-bottom: 20px;
  font-family: inherit;
  text-align: center;
  background-color: var(--dark-bg);
`;
