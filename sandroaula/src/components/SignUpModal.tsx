import React from 'react';
import Button from './button';
import '../styles/signUpModal.css';

interface SignUpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SignUpModal: React.FC<SignUpModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Cadastre-se</h2>
        <form>
          <input type="text" placeholder="Nome" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Senha" required />
          <Button text="Cadastrar" />
        </form>
        <button className="close-button" onClick={onClose}>X</button>
      </div>
    </div>
  );
};

export default SignUpModal;
