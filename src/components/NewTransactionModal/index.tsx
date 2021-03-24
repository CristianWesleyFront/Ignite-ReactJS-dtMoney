import React from 'react';
import Modal from 'react-modal';
import { Container } from './styles';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose(): void;
}

Modal.setAppElement('#root');

export const NewTransactionModal: React.FC<NewTransactionModalProps> = (
  {isOpen, onRequestClose}
  ) => {
  return (
    <Modal 
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    contentLabel="Cadsatrar transação"
    > 
      <Container>
        <h2>Cadsatrar transação</h2>
      </Container>
    </Modal>
  );
};