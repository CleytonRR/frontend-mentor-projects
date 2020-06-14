import styled from "styled-components";

import BackgroundSvg from "../../assets/bg-pattern-intro-right-desktop.svg";

export const HeaderContainer = styled.header`
  width: 100vw;
  background-color: hsl(256, 26%, 20%);
  background-image: url(${BackgroundSvg});
  background-repeat: no-repeat;
  background-position: top right;
  background-size: 400px 400px;
  height: 450px;
`;

export const Container = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

export const ContainerText = styled.div`
  font-family: "DM Serif Display", serif;
  width: 600px;
`;

export const Title = styled.h1`
  color: hsl(0, 0%, 98%);
  font-weight: 400;
  font-size: 60px;
  margin-bottom: 0;

  &:before {
    content: "";
    width: 100px;
    height: 2px;
    display: block;
    background-color: #fff;
    margin-bottom: 20px;
  }
`;

export const Detail = styled.p`
  color: hsl(0, 0%, 98%);
  font-family: "Karla", sans-serif;
`;

export const Image = styled.img`
  transform: translateY(100px);
  height: 450px;
`;

export const Button = styled.button`
  background-color: hsl(0, 0%, 98%);
  font-family: "Karla", sans-serif;
  color: hsl(256, 26%, 20%);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 13px 20px;
  border: none;
`;
