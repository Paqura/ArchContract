import styled from "styled-components";

const FlyButton = styled.button`
  background-color: ${props =>
    props.theme === "dark" ? "black" : "papayawhip"};
  color: ${props => (props.theme === "dark" ? "papayawhip" : "black")};
  box-shadow: 2px 2px 8px #cccccc;
`;

export { FlyButton };
