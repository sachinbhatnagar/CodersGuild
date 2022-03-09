import styled from "styled-components";

export const MainWrapper = styled.div`
  background: #000000;
  background: -webkit-linear-gradient(right, #000000, #222222);
  background: -moz-linear-gradient(right, #000000, #222222);
  background: linear-gradient(to left, #000000, #222222);
  width: 100%;
`;
export const Flex = styled.div`
  display: flex;
`;
export const MainNav = styled.nav`
  padding: 1em 3em;
  display: flex;
  justify-content: space-between;
  color: #fff;
  align-items: center;
`;

export const MainButton = styled.button`
  color: #fff;
  font-weight: bold;
  padding: 1em 2em;
  cursor: pointer;
  border-radius: 10px;
  background-color: transparent;
  margin-right: 1.5em;

  &:hover {
    transform: scale(1.1);
    transition: 0.4s all;
  }
`;
export const Div = styled.div``;
