import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 90%;
  max-width: 65%;
  margin: 4% auto;
  background-color: transparent; 
  padding: 0; 
  border: none; 
  box-shadow: none;
  align-items: center;
`;

export const Input = styled.input`
  padding: 0.5rem;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.color};
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Textarea = styled.textarea`
  padding: 0.5rem;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.color};
  background-color: ${({ theme }) => theme.colors.background};
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

export const FormTitle = styled.h2`
  margin-bottom: 1rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.color};
`;
