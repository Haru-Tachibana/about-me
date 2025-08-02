import styled from 'styled-components';

const StyledButton = styled.button`
  position: relative;
  background: transparent;
  color: var(--dark-olive); 
  border: 1px solid var(--dark-olive);
  border-radius: 4px;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-family: 'Fira Mono', monospace;
  cursor: pointer;
  transition: background 0.3s ease, color 0.3s ease;
  overflow: visible;

  &:hover {
    background: rgba(108, 88, 76, 0.1); /* semi-transparent dark-olive */
    color: var(--coffee);
  }

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0px;
    height: 2px;
    width: 0;
    background-color: var(--coffee);
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

export default StyledButton;
