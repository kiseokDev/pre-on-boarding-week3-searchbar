import {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from 'react';

type InputKeywordContextType =
  | {
      inputKeyword: string;
      setInputKeyword: Dispatch<SetStateAction<string>>;
    }
  | undefined;

const InputKeywordContext = createContext<InputKeywordContextType>(undefined);

type InputKeywordProviderProps = {
  children: ReactNode;
};

export function useInputKeywordContext() {
  const context = useContext(InputKeywordContext);
  if (!context) {
    throw new Error('InputKeywordProvider로 컴포넌트를 감싸주세요!');
  }
  return context;
}

export function InputKeywordProvider({ children }: InputKeywordProviderProps) {
  const [inputKeyword, setInputKeyword] = useState('');

  return (
    <InputKeywordContext.Provider value={{ inputKeyword, setInputKeyword }}>
      {children}
    </InputKeywordContext.Provider>
  );
}
