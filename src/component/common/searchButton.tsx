import { styled } from 'styled-components';

const SearchButtonComponent = () => {
  return (
    <SearchButton>
      <ButtonText>검색버튼</ButtonText>
      <div className='css-1i55lp4'>
        <svg
          viewBox='0 0 16 16'
          fill='currentColor'
          preserveAspectRatio='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M6.56 0a6.56 6.56 0 015.255 10.49L16 14.674 14.675 16l-4.186-4.184A6.56 6.56 0 116.561 0zm0 1.875a4.686 4.686 0 100 9.372 4.686 4.686 0 000-9.372z'></path>
        </svg>
      </div>
    </SearchButton>
  );
};
export default SearchButtonComponent;

const ButtonText = styled.div`
  font-family: inherit;
  overflow: hidden;
  position: absolute;
  width: 0;
  height: 0;
  line-height: 0;
  text-indent: -9999px;
`;

const SearchButton = styled.button`
  border-radius: 100%;
  -ms-flex-align: center;
  -ms-flex-pack: center;
  width: 48px;
  height: 48px;
  display: -ms-flexbox;
  font-weight: 500;
  display: -ms-inline-flexbox;
  border: 0;
  background-color: #007be9;
  display: -ms-flexbox;
  display: flex;
  color: #ffffff;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
`;
