import styled from "styled-components";

export const CategoryContainer = styled.div`
  width:100%
  padding:1rem;
  margin: 1rem;

   @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 0.5rem;
    margin: 0.5rem 0;
  }
`;

export const CategoryTitle = styled.h2`
  width: 25%;
  background-color: ${({ theme, category }) =>
  theme.colors.categoryColors[category] || theme.colors.primary};
  color: #fff;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1rem;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes.large};
   @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ theme }) => theme.fontSizes.medium};
    padding: 0.75rem;
    width: 100%;
  }
  `;

export const VideoList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  padding: 1rem;
`;
