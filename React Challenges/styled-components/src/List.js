import styled from "styled-components";
const List = styled.ul`
  display: flex;
  list-style: none;

  & li {
    margin-right: 10px;
    transition: all 0.5s ease-in-out;
  }
  & li:hover {
    color: orange;
    cursor: pointer;
    transform: scale(1.1);
  }
`;

export default List;
