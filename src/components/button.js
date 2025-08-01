import styled from 'styled-components';

const StyledButton = styled.button`
  position: relative;
  background: transparent;
  color: #64ffda;
  border: 1px solid #64ffda;
  border-radius: 4px;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  transition: background 0.3s ease;
  overflow: visible; /* just to be sure */

  &:hover {
    background: rgba(100, 255, 218, 0.1);
  }

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0px;   /* place it exactly at the bottom */
    height: 2px;
    width: 0;
    background-color: #64ffda;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;
