import styled from "styled-components";

export const BannerContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 60vh;
  margin: 0;
  padding: 0;
  overflow: hidden;
`;

export const BannerBackground = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.5);
  margin: 0;
`;

export const BannerImg = styled.img`
  width: 600px;
  border-radius: 5rem 0 0 5rem;
  box-shadow: 0px 0px 0.75rem 0.25rem #2271d1;
`;

export const BannerContent = styled.div`
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #fff;
`;

export const BannerTitle = styled.h1`
  font-size: 2.5rem;
  background-color: ${({ theme, category }) =>
    theme.colors.categoryColors[category]};
  padding: 0.5rem 1rem;
  border-radius: 8px;
  display: inline-block;
  display: flex; 
  justify-content: center; 
  align-items: center;
  margin: 1rem 3rem;
`;

export const BannerDescription = styled.p`
  font-size: 1.2rem;
  display: flex; 
  justify-content: center; 
  align-items: center;
  margin: 1rem 3rem;
  text-align: center;
  text-justify: inter-word;
`;
