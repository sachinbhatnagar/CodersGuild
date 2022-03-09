import styled from "styled-components";

export const CardContainer = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 200px;
  margin: 0 auto;
  border: ${({ flag }) => {
    return flag ? "border: none" : "2px solid rgb(128,128,128, 0.7)";
  }};
  border-radius: 2px 2px 0 0;
  height: auto;
  & :hover {
    box-shadow: 0 8px 16px 0 rgba(255, 255, 255, 0.2);
    cursor: pointer;
  }
`;
export const CardTextContainer = styled.div`
  padding: 2px 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const Image = styled.img`
  display: block;
  width: 100%;
`;
export const Title = styled.h3`
  font-size: 12px;
  color: #fff;
`;
export const Artist = styled.h4`
  color: #fff;
`;
