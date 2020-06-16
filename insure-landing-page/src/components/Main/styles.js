import styled from 'styled-components';

import BackgroundSvg from '../../assets/bg-pattern-intro-right-desktop.svg';

export const Container = styled.section`
  width: 100vw;
  max-width: 1440px;
  display: flex;
  justify-content: center;
`;
export const ContainerDetails = styled.div`
  width: 80%;
  margin: auto;
`;

export const Title = styled.h2`
  font-size: 70px;
  font-family: 'DM Serif Display', serif;

  &::before {
    content: '';
    display: block;
    width: 100px;
    height: 1px;
    margin-bottom: 50px;
    background-color: hsl(256, 26%, 20%);
  }
`;

export const ContainerItems = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const Item = styled.div``;

export const IconItem = styled.img``;

export const TitleItem = styled.h5`
  font-family: 'DM Serif Display', serif;
  color: hsl(256, 26%, 20%);
  font-size: 30px;
  margin-bottom: 0;
  color: hsl(270, 9%, 17%);
`;

export const DescriptionItem = styled.p`
  font-family: 'Karla', sans-serif;
  color: hsl(273, 4%, 51%);
`;

export const ContainerAbout = styled.div`
  background-color: hsl(256, 26%, 20%);
  background-image: url(${BackgroundSvg});
  background-position: right;
  background-repeat: no-repeat;
  background-size: 500px 500px;
  width: 100%;
  height: 200px;
  margin-top: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const AboutTitle = styled.h5`
  font-family: 'DM Serif Display', serif;
  font-size: 45px;
  color: hsl(0, 0%, 98%);
`;

export const AboutButton = styled.button`
  font-family: 'Karla', sans-serif;
  color: hsl(0, 0%, 98%);
  background-color: transparent;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  border: 1px solid hsl(0, 0%, 98%);
  padding: 13px 20px;
  transition: all 500ms;

  &:hover {
    background-color: hsl(0, 0%, 98%);
    color: hsl(256, 26%, 20%);
  }
`;
