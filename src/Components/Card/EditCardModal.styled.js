import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background: linear-gradient(145deg,rgb(15, 15, 15),rgb(19, 19, 19));
  padding: 40px;
  border-radius: 10px;
  width: 500px;
  max-width: 90%;
  color: #ffffff;
  box-shadow: 0px 0px 0.75rem 0.25rem #2271d1;
`;

export const ModalTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px 15px;
  margin-bottom: 15px;
  border: none;
  border-radius: 5px;
  background:rgb(58, 58, 58);
  color: #ffffff;
  font-size: 14px;

  &:focus {
    outline: none;
    box-shadow: 0px 0px 8px rgba(255, 255, 255, 0.4);
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 13vh;
  padding: 5px;
  margin-bottom: 15px;
  border: none;
  border-radius: 5px;
  background:rgb(58, 58, 58);
  color: #ffffff;
  font-size: 14px;
  resize: none; 
  
  &:focus {
    outline: none;
    box-shadow: 0px 0px 8px rgba(255, 255, 255, 0.4);
  }
`;

export const Select = styled.select`
  width: 100%;
  padding: 10px 15px;
  margin-bottom: 15px;
  border: none;
  border-radius: 5px;
  background:rgb(58, 58, 58);
  color: #ffffff;
  font-size: 14px;

  &:focus {
    outline: none;
    box-shadow: 0px 0px 8px rgba(255, 255, 255, 0.4);
  }
`;
export const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem; 
  justify-content: flex-end;
  margin-top: 1rem;
`;
export const StyledButton  = styled.button`
  padding: 0.75rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.primaryHover};
  color: #fff;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
  }
  
`;
