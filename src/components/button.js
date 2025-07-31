import styled from 'styled-components';

const StyledButton = styled.button`
  background: transparent;
  color: #64ffda;
  border: 1px solid #64ffda;
  border-radius: 4px;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  transition: background 0.3s ease;

  &:hover {
    background: rgba(100, 255, 218, 0.1);
  }
`;
