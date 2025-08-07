import styled from 'styled-components';

export const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem 0;
  background-color: var(--linen);
`;

export const BigHeading = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  color: var(--dark-olive);
`;

export const AccentText = styled.span`
  color: #63845dff;
  font-size: 1.5rem;
  font-weight: 700;
`;


export const SubHeading = styled.h2`
  font-size: 1.25rem;
  color: var(--coffee);
  max-width: 90%;
  line-height: 1.5;
`;

export const BodyText = styled.p`
  font-size: 1rem;
  color: #bd997cff;
  line-height: 1.7;
  font-weight: 700;
  margin-bottom: 1.25rem;
`;

export const ReferenceText = styled.p`
  font-family: 'Fira Mono', monospace;
  font-style: italic;
  color: var(--dark-olive);
  font-size: 0.95rem;
  margin-bottom: 1rem;
`;

export const Username = styled.span`
  color: var(--moss);
  font-weight: 600;
  font-family: 'Fira Mono', monospace;
  font-size: 1rem;
`;

export const Footer = styled.footer`
  text-align: center;
  margin-top: 3rem;
  padding: 1rem 0;
  font-size: 0.85rem;
  color: var(--coffee);
`;

export const StyledLink = styled.a`
  color: var(--moss);
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    color: var(--coffee);
  }
`;

export const GenreTitleBar = styled.div`
  background-color: var(--moss);
  color: white;
  padding: 0.75rem 1rem;
  font-size: 1.8rem;
  font-weight: bold;
  font-family: 'Fira Mono', monospace;
  border-radius: 8px;
  margin-bottom: 1.5rem;
  margin-top: 2.5rem;
`;

export const TableOfContents = styled.nav`
  margin-bottom: 2.5rem;
  padding: 1.5rem;
  background: var(--sage);
  border-radius: 8px;
  font-family: 'Fira Mono', monospace;
  color: var(--moss);
`;

export const TOCList = styled.ul`
  list-style: none;
  padding-left: 1rem;
  margin: 0;
`;

export const TOCItem = styled.li`
  margin-bottom: 0.5rem;
  a {
    color: var(--moss);
    text-decoration: none;
    font-weight: 600;
    &:hover {
      text-decoration: underline;
      color: var(--coffee); 
    }
  }
`;
