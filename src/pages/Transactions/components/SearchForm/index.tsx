import { MagnifyingGlass } from "phosphor-react";
import * as S from "./styles";
export function SearchFrom() {
  return (
    <S.SearchFormContainer>
      <input placeholder='Busque por transações' />
      <button type='submit'>
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </S.SearchFormContainer>
  );
}
