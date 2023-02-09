import * as Dialog from "@radix-ui/react-dialog";
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";
import { useTheme } from "styled-components";
import * as S from "./styles";

export function NewTransactionModal() {
  const theme = useTheme();
  return (
    <Dialog.Portal>
      <S.Overlay />

      <S.Content>
        <Dialog.Title>Nova Transação</Dialog.Title>

        <S.CloseButton>
          <X size={24} />
        </S.CloseButton>

        <form action=''>
          <input type='text' placeholder='Descrição' required />
          <input type='text' placeholder='Valor' required />
          <input type='text' placeholder='Categoria' required />

          <S.TransactionType>
            <S.TransactionTypeButton variant='income' value='income'>
              <ArrowCircleUp size={24} /> Entrada
            </S.TransactionTypeButton>
            <S.TransactionTypeButton variant='outcome' value='outcome'>
              <ArrowCircleDown size={24} />
              Saída
            </S.TransactionTypeButton>
          </S.TransactionType>

          <button type='submit'>Cadastrar</button>
        </form>
      </S.Content>
    </Dialog.Portal>
  );
}
