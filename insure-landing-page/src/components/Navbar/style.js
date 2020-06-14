import styled from 'styled-components';

export const ContainerMenu = styled.nav`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  font-family: 'Karla', sans-serif;
`;

export const LogoMenu = styled.img`
  width: 100px;
  height: 20px;
  margin: auto 0;
`;

export const Menu = styled.ul`
  list-style: none;
`;

export const MenuItem = styled.li`
  display: inline-block;
  color: hsl(273, 4%, 51%);
  text-transform: uppercase;
  margin: auto 15px;
  letter-spacing: 1px;
  cursor: pointer;

  &:hover {
    color: hsl(270, 9%, 17%);
  }
`;

export const ButtonMenu = styled.button`
  color: #fff;
  background-color: hsl(270, 9%, 17%);
  text-transform: uppercase;
  padding: 13px 20px;
  font-weight: 700;
  letter-spacing: 2px;
  border: none;
  cursor: pointer;
`;
